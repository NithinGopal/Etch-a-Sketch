// Component variables

let body = document.querySelector('body');
let container = document.createElement('div');
let button = document.createElement('button');

//Adding attributes to components
container.setAttribute('id','container');
button.setAttribute('class','btn clear');
button.innerHTML = "Reset";

//Adding components to body
body.appendChild(button);
body.appendChild(container);

//start
start ();

function start () {
    let n = prompt ('Choose grid size');
    addDivs(16);
}





function addDivs (n) {
    for (i=0; i<n; i++) {
        let rowDivs = document.createElement('div');
        rowDivs.setAttribute('id','rows');
        container.appendChild(rowDivs);

        for (j=0; j<n; j++){
            let div = document.createElement('div');
            div.classList.add('squares');
            rowDivs.appendChild(div);
        }
    }
    return
}

let boxes = document.querySelectorAll('.squares');
boxes.forEach(box => {
    box.addEventListener('mouseover', function(){
        box.classList.add('sketched');
    })
})



let clear = document.querySelector('.clear');
clear.addEventListener('click', function() {
    boxes.forEach(box => {
        box.classList.remove('sketched');
    })
});







