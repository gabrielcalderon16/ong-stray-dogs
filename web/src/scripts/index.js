import "../styles/index.scss";
import "bootstrap";
import simpleParallax from "simple-parallax-js";
import indexPage from "../pages/index.html";
import aboutPage from "../pages/about.html";
import donationsPage from "../pages/donations.html";
import contactPage from "../pages/contact.html";

console.log("webpack & bootstrap");

console.log("path", window.location.pathname);

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/": indexPage,
  "/about": aboutPage,
  "/donations": donationsPage,
  "/contact": contactPage,
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path];
  document.getElementById("app").innerHTML = route;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

// Parallax controller
const image = document.getElementsByClassName("thumbnail");
new simpleParallax(image, {
  delay: 0.6,
  scale: 1.5,
});

// Form controller
const form = document.getElementById("contactForm");
form.addEventListener("submit", onFormSubmit);

async function onFormSubmit(event) {
  try {
    
    event.preventDefault();
    const data = new FormData(event.target);
    const {nombres, correo, descripcion } = Object.fromEntries(data.entries());
    if (!nombres || !correo || !descripcion) {
      alert("Todos los campos son requeridos.");
    }

    const response = await fetch("http://localhost:3001/api/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombres,
        correo,
        descripcion
      }),
    });

    const result = await response.json();
    if (result) alert("formulario enviado con éxito");
    form.reset();
  } catch (error) {
    console.error(error);
  }
}
