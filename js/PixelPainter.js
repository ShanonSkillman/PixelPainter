var canvas = (function(){

//VARIALBES//
let currentColor;
let memory;


//CREATE GRID FOR PIXEL PAINTER//
const pixelPainter = document.getElementById('pixelPainter')

//CREATE GRID TO COLOR//

let freshGrid = (height, width, item) => {
    let grid = document.createElement('div');
    grid.id = 'grid';

    for(let y=0; y<height; y++){
        let column = document.createElement('div')
        column.className = 'column';
        for(let x=0; x<width; x++){
            let pixel = document.createElement('div');
            pixel.className = item;
            column.appendChild(pixel);
        }
        grid.appendChild(column);
    }
    return grid;
}

let theGrid = freshGrid(25, 25, 'item')
theGrid.id = 'theGrid'
pixelPainter.appendChild(theGrid)   

let down = false;

let cell = document.getElementsByClassName('item');
for(let i=0; i<cell.length; i++){
    cell[i].addEventListener("click", (e) => {
            cell[i].style.backgroundColor = currentColor})

    cell[i].addEventListener("mouseover", () => {
        cell[i].style.backgroundColor = currentColor;
        console.log(i)
    })
}

//TOOLBOX//
let toolbox = document.createElement('div');
toolbox.id = 'toolbox';
pixelPainter.appendChild(toolbox);


//CREATE GRID FOR COLOR PALLETE//
let palatte = document.createElement('div');
toolbox.appendChild(freshGrid(3, 5, 'palette'));

//HOLDING COLOR//
const colorSwatch = [
    '#000080',
    '#1E90FF',
    '#00BFFF',
    '#00CED1',
    '#2E8B57',
    '#FFFF00',
    '#FFA500',
    '#FF7F50',
    '#B22222',
    '#FF1493',
    '#4B0082',
    '#696969',
    '#DEB887',
    '#000000',
    '#8B008B'
]

let colorPalette = document.getElementsByClassName('palette');


for(let i=0; i<colorPalette.length; i++){
colorPalette[i].style.backgroundColor = colorSwatch[i]
colorPalette[i].id = colorSwatch[i]
colorPalette[i].addEventListener("click", (x) => {
currentColor = x.target.id;
console.log(currentColor + "chosen color")
    })
}

//SPACE FOR PALETTE & BUTTONS//
let buttonBox = document.createElement('div');
buttonBox.id='buttonBox';
toolbox.appendChild(buttonBox);

//ERASER BUTTON//
let eraser = document.createElement('button');
eraser.id='eraser';
eraser.innerHTML = "ERASER";
buttonBox.appendChild(eraser);
eraser.addEventListener("click", eraserMode) 

function eraserMode () {
    currentColor = "white";
}

//CLEAR BUTTON//
let clear = document.createElement('button');
clear.id = 'clear';
clear.innerHTML = "CLEAR";
buttonBox.appendChild(clear);
clear.addEventListener("click", clearMode)

function clearMode () { console.log("fuck")
    var clearLoop = document.getElementsByClassName('item');
    for(let s=0; s<clearLoop.length; s++){
        clearLoop[s].style.background = "white";
        console.log("fuck")
    }
}

//SAVE BUTTON//
let save = document.createElement('button');
save.id = 'save';
save.innerHTML = "SAVE";
buttonBox.appendChild(save);
save.addEventListener("click", saveMemory)

function saveMemory () { 
    // console.log("fuckyas")
    memory = [];
    var save = document.getElementsByClassName('item');
    for(let t = 0; t<save.length; t++){
        memory.push(save[t].style.backgroundColor)
    }
    return memory;
}


//LOAD BUTTON//
let load = document.createElement('button');
load.id = 'load';
load.innerHTML = "LOAD";
buttonBox.appendChild(load);
load.addEventListener("click", loadMemory)

function loadMemory () {
    // console.log("NICEEE")
    var upload = document.getElementsByClassName('item');
    for(let u = 0; u<upload.length; u++){
        upload[u].style.backgroundColor = memory[u]
    }
}

})();
