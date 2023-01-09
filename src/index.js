import { doWork } from "./module.js";

function createComponent() {
    const elem = document.createElement("div");
    elem.innerText = "Hello, Webpack";
    doWork();
    return elem;
}

const elem = createComponent();
document.body.appendChild(elem);
