var canvas = (function(){

//CREATE GRID FOR PIXEL PAINTER//
const pixelPainter = document.getElementById('pixelPainter')

//CREATE GRID TO COLOR//

let freshGrid = (height, width) => {
    let grid = document.createElement('div');
    grid.id = 'grid';

    for(let y=0; y<height; y++){
        let column = document.createElement('div')
        column.className = 'column';
        for(let x=0; x<width; x++){
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            column.appendChild(pixel);
        }
        grid.appendChild(column);
    }
    return grid;
}

let theGrid = freshGrid(25, 25)
theGrid.id = 'theGrid'
pixelPainter.appendChild(theGrid)

//TOOLBOX//
let toolbox = document.createElement('div');
toolbox.id = 'toolbox';
pixelPainter.appendChild(toolbox);


//CREATE GRID FOR COLOR PALLETE//
let palette = freshGrid(10, 5)
palette.id = 'palette'
toolbox.appendChild(palette)

//SPACE FOR PALETTE & BUTTONS//
let buttonBox = document.createElement('div');
buttonBox.id='buttonBox';
toolbox.appendChild(buttonBox);

//ERASER BUTTON//
let eraser = document.createElement('button');
eraser.id='eraser';
eraser.innerHTML = "ERASER";
buttonBox.appendChild(eraser);

//CLEAR BUTTON//
let clear = document.createElement('button');
clear.id = 'clear';
clear.innerHTML = "CLEAR";
buttonBox.appendChild(clear);

//LOAD BUTTON//
let load = document.createElement('button');
load.id = 'load';
load.innerHTML = "LOAD";
buttonBox.appendChild(load);

//SAVE BUTTON//
let save = document.createElement('button');
save.id = 'save';
save.innerHTML = "SAVE";
buttonBox.appendChild(save);

})();








/*
give functionality-event listeners
create functions for eventlistners
*/

