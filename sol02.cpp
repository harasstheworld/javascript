#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int T, number, even, odd;
  cin >> T;

  for (int i = 0; i < T; i++) {
    cin >> number;
    even = odd = 0;
    while (number != 0) {
      even += (number % 10 % 2) == 0 ? 1 : 0;
      odd += (number % 10 % 2) == 1 ? 1 : 0;
      number /= 10;
    }
    cout << even << ' ' << odd << '\n';
  }
  return 0;
}
