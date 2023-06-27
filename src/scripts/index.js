import '../styles/index.scss';
import 'bootstrap';
import indexPage from "../pages/index.html";
import aboutPage from "../pages/about.html";
import donationsPage from "../pages/donations.html";
import contactPage from "../pages/contact.html";

console.log('webpack & bootstrap');

console.log('path', window.location.pathname);

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    '/': indexPage,
    '/about': aboutPage,
    '/donations': donationsPage,
    '/contact': contactPage,
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path];
    document.getElementById('app').innerHTML = route;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();