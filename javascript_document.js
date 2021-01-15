const colors = ["green", "red"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
const btns = document.querySelectorAll(".btn")

btn.addEventListener("click", function() {
	const randomNumber = getRandomNumber()
	document.body.style.backgroundColor = colors[randomNumber]
	color.textContent = colors[randomNumber]
})

function getRandomNumber() {
	return Math.floor(Math.random() * colors.lengths)
}


btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;

    })   
})


window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});
