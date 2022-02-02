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
    sum = 0
    for(i = a; i<b;i++){
        sum+=i
    }
    alert(sum)
}

function for19(){
    let a = +prompt()
    let res = 1;
    for (i = 1; i <= a; i++){
        res*=i
    }
    alert(res)
}

function for20(){
    let a = +prompt()
    let sum = 0;
    let fct = 1
    for (let i = 1; i <= a; i++){
        fct*=i
        sum+=fct
    }
    alert(sum)
}

function for21(){
    let a = +prompt()
    let sum = 0;
    let fct = 1
    for (let i = 1; i <= a; i++){
        fct*=i
        let division = 1/fct
        sum+=division
    }
    alert(sum)
}
// let A = 15
// let B = 4

// while (A >= B) {
//     A -= B
// }

// alert(A)
function wh2(){
    let A = +prompt()
    let B = +prompt()
    let i = 0
    while (A >= B) {
        A -= B
        i++
    }
    alert(i)
}

function wh3(){
    let n = +prompt()
    let k = +prompt()
    let i = 0
    while(n>=k){
        n-=k
        i++
    }
    alert(n)
    alert(i)
}