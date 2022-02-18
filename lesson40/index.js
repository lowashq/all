let newBlock

let inputWidth = document.getElementById('width')
let inputHeight =document.getElementById('height')
let inputColor = document.getElementById('color')
let container = document.querySelector('.container')
let cbox = document.getElementById('round')

let btnCreate = document.querySelector('.btn--create')
let btnClear = document.querySelector('.btn--clear')

let btnUp = document.querySelector('.btn--up')
let btnDown = document.querySelector('.btn--down')
let btnLeft = document.querySelector('.btn--left')
let btnRight = document.querySelector('.btn--right')

let blockTop
let blockLeft

btnCreate.addEventListener('click', () => {
    let iWidth = inputWidth.value
    let iHeight = inputHeight.value
    let iColor = inputColor.value
    let chbox = cbox.checked

    blockTop = 0
    blockLeft = 0
    
    newBlock = document.createElement('div')
    newBlock.style.width = iWidth + 'px'
    newBlock.style.height = iHeight + 'px'
    if(chbox == true){
        newBlock.style.borderRadius = "50px"
    }
    
    newBlock.style.backgroundColor = iColor
    container.prepend(newBlock);
})

btnClear.addEventListener('click', () =>{
    newBlock.remove()
})


btnDown.addEventListener('click', () =>{
    newBlock.style.position = 'absolute'
    blockTop += 50
    newBlock.style.top = blockTop + 'px'
} )

btnUp.addEventListener('click', () =>{
    newBlock.style.position = 'absolute'
    blockTop += -50
    newBlock.style.top = blockTop + 'px'
    if(blockTop<0){
        blockTop = 0
    }
} )

btnLeft.addEventListener('click', () =>{
    newBlock.style.position = 'absolute'
    blockLeft += -50
    newBlock.style.left = blockLeft + 'px'
} )

btnRight.addEventListener('click', () =>{
    newBlock.style.position = 'absolute'
    blockLeft += 50
    newBlock.style.left = blockLeft + 'px'
} )

