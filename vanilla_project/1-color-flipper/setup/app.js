const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn");
const textColor = document.getElementById("text-color");

btn.addEventListener("click", () => {
    const randomNumber = Math.round(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    textColor.textContent = colors[randomNumber];
})
