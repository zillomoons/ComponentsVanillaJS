import {Rater} from "./rater.js";
import {template} from './template.js'

const render = (template,node) => {
    if(!node) return;
    node.innerHTML = template;
}
render(template, document.getElementById('rater-1'));
render(template, document.getElementById('rater-2'));
render(template, document.getElementById('rater-3'));

document.addEventListener('DOMContentLoaded', function(){
    const raters = document.querySelectorAll('[role=rater]');
    raters.forEach(rater => {
        new Rater(rater);
    });
});