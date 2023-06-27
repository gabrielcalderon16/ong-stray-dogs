import '../styles/index.scss';
import 'bootstrap';
import indexPage from "../pages/index.html";
import aboutPage from "../pages/about.html";

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
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path];
    // console.log(route);
    // const html = await fetch(route).then((data) => data.text());
    document.getElementById('app').innerHTML = route;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();