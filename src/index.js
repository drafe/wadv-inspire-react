import {React} from "react"
import ReactDOM from "react-dom/client";
import {App} from "./components/app";

document.addEventListener("DOMContentLoaded", setup)

function setup() {
    const root = ReactDOM.createRoot(document.getElementById('app'))
    const element = <App />
    root.render(element)
}
