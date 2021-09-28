
const btn = document.querySelector("#favProj");
btn.onclick = () => {
    const proj = document.querySelector("#proj4");
    proj.style.transition = "background-color 0.5s"
    proj.style.backgroundColor = "orange";
}