let input = document.getElementById('userInput');
let add = document.getElementById('addToDo');
let toDo = document.getElementById('container');
let box = document.getElementById("box");

add.addEventListener('click', function(){
    var paragraph=document.createElement('p');
    paragraph.innerText=input.value;
    toDo.appendChild(paragraph);
    input.value='';

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration='line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        toDo.removeChild(paragraph);
    })
  
})

function colourGreen() {
    box.style = "background-color: green;";
}

function colourYellow() {
    box.style = "background-color: yellow;";
}

// function moveBox() {
//   let box = document.getElementById("box");
  
// }

 // box.addEventListener('click', function(){
 //        box.style.left='100px';
 //    })

 