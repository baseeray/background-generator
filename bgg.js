let css = document.querySelector("h3");
let color1 =  document.getElementsByName("color1")[0];
let color2 = document.getElementsByName("color2")[0];
let body = document.getElementById("gradient");
css.textContent = "linear-gradient(to right, rgb(0, 14, 204) , rgb(204, 0, 14));";

const setGradient = () => {
    body.style.background = "linear-gradient(to right, "+color1.value+","+color2.value+")";
    css.textContent = body.style.background+";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
