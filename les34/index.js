// 1
function for2(){
    let a = +prompt()
    let b = +prompt()
    for(let i=a; i<=b; i++){
        alert(i)
    }
}

function for3(){
    let a = +prompt()
    let b = +prompt()
    for(let i=b; i>a; i--){
        alert(i)
    }
}

function for4(){
    let price = 10
    for(i=1;i<=10;i++)
    alert(`${i}-${i*price}`)
}

function for5(){
    let price = 10
    for(i=0.1;i<=1;i+=0.1)
    alert(`${i}-${i*price}`)
}

function for6(){
    let price = 10
    for(i=1;i<=2;i+=0.2)
    alert(`${i}-${i*price}`)
}

function for7(){
    let a = +prompt()
    let b = +prompt()
    
    for(i = a; i<b;i++){
        alert(i)
    }
}