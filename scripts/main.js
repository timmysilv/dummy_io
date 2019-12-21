let mybutt = document.querySelector('button');
let myhead = document.querySelector('h1');

function setUser(){
    let myname = prompt('Please enter your name.');
    localStorage.setItem('name', myname);
    myhead.textContent = 'You are lame, ' + myname;
}

if(!localStorage.getItem('name')){
    setUser();
} else {
    let storedname = localStorage.getItem('name');
    myhead.textContent = 'You are lame, ' + storedname;
}

mybutt.onclick = function() {
    setUser();
}