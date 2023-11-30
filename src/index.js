
import {getStarted, createForm} from "./page-load";


getStarted();

const button = document.querySelector('.createButton');
button.addEventListener('click', () => {
    createForm();
    button.remove();


});





