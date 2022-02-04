function setName(){
    let name = prompt('Input your name')
    localStorage.setItem('my name',name)
}

let getName = function() {
    let name = localStorage.getItem('my name')
    alert(`Hello,${name}!`)
}

// function sign(x) {
//     if (x < 0) {
//         return -1
//     } else if (x > 0) {
//         return 1
//     } else {
//         return 0 
//     }
// }
// function func16_1(){
//     let a = prompt('Input a:')
//     let res = sign(a)
//     alert(res)
// }

// let sign = function(x){
    // if (x < 0) {
    //     return -1
    // } else if (x > 0) {
    //     return 1
    // } else {
    //     return 0 
    // }
// };
// let func16 = function(){
    // let a = prompt('Input a:')
    // let res = sign(a)
    // alert(res)
// };
let sign = x =>{
    if (x < 0) {
        return -1
    } else if (x > 0) {
        return 1
    } else {
        return 0 
    }
}
let func16 = () =>{
    let a = prompt('Input a:')
    let res = sign(a)
    alert(res)
}

// function rootcount(a,b,c){
    // D = b**2 - 4*a*c
    // if (D>0){
    //     return '2 корня'
    // }
    // else{
    //     return 'нет корней'
    // }
    
// }
// function func17(){
    // let a= prompt("a:")
    // let b= prompt("b:")
    // let c= prompt("c:")
    // let D= rootcount(a,b,c)
    // alert(D)
// }

// let rootcount = function(a,b,c){
    // D = b**2 - 4*a*c
    // if (D>0){
    //     return '2 корня'
    // }
    // else{
    //     return 'нет корней'
    // }
// }
// let func17 = function(){
    // let a= prompt("a:")
    // let b= prompt("b:")
    // let c= prompt("c:")
    // let D= rootcount(a,b,c)
    // alert(D)
// }

let rootcount = (a,b,c) =>{
    D = b**2 - 4*a*c
    if (D>0){
        return '2 корня'
    }
    else{
        return 'нет корней'
    }
}
let func17 = () =>{
    let a= prompt("a:")
    let b= prompt("b:")
    let c= prompt("c:")
    let D= rootcount(a,b,c)
    alert(D)
}

// function circle(r){
//     S = r**2 *3.14
//     return S
//  }
//  function func18(){
//      let r = prompt("input radius")
//      let S = circle(r)
//      alert(S)
//  }

// let circle = function(r){
//     S = r**2 *3.14
//     return S
// }
// let func18 = function(){
//     let r = prompt("input radius")
//      let S = circle(r)
//      alert(S)
// }

let circle = r =>{
    S = r**2 *3.14
    return S
}
let func18 = () =>{
    let r = prompt("input radius")
    let S = circle(r)
    alert(S)
}

// function ring(r1,r2){
//     if(r1>r2){
//         S1 = circle(r1)
//         S2 = circle(r2)
//         S3 = S1-S2
//         return S3
//     }
//     else{
//         return -1
//     }
// }
// function func19(){
//     let r1 = prompt('input radius1')
//     let r2 = prompt('input radius2')
//     let S = ring(r1,r2)
//     if(S<0){
//         alert('error')
//     }
//     else{
//         alert(S)
//     }
    
// }
// let ring = function(r1,r2){
//     if(r1>r2){
//         S1 = circle(r1)
//         S2 = circle(r2)
//         S3 = S1-S2
//         return S3
//     }
//     else{
//         return -1
//     }
// }
// let func19 = function(){
//     let r1 = prompt('input radius1')
//     let r2 = prompt('input radius2')
//     let S = ring(r1,r2)
//     if(S<0){
//         alert('error')
//     }
//     else{
//         alert(S)
//     }
// }

let ring = (r2,r2) =>{
    if(r1>r2){
        S1 = circle(r1)
        S2 = circle(r2)
        S3 = S1-S2
        return S3
    }
    else{
        return -1
    }
}
let func19 = () =>{
    let r1 = prompt('input radius1')
    let r2 = prompt('input radius2')
    let S = ring(r1,r2)
    if(S<0){
        alert('error')
    }
    else{
        alert(S)
    }
}

// function triangle(a,h){
//     b= Math.sqrt((a/2)**2 + h**2)
//     P = a+b*2
//     return P
// }
// function func20(){
//     let a = prompt("основа треугольника:")
//     let h = prompt('высота:')
//     let P = triangle(a,h)
//     alert(P)
// }

// let triangle = function(a,h){
//     b= Math.sqrt((a/2)**2 + h**2)
//     P = a+b*2
//     return P
// }
// let func20 = function(){
//     let a = prompt("основа треугольника:")
//     let h = prompt('высота:')
//     let P = triangle(a,h)
//     alert(P)
// }

let triangle = (a,b) =>{
    b= Math.sqrt((a/2)**2 + h**2)
    P = a+b*2
    return P
}
let func20 = () =>{
    let a = prompt("основа треугольника:")
    let h = prompt('высота:')
    let P = triangle(a,h)
    alert(P)
}

// function quarter(x,y){
//     if(x>0){
//         if(y<0){
//             return 4
//         }
//         if(y>0){
//             return 2
//         }
//         else{
//             return 'error'
//         }
//     }
//     if(x<0){
//         if (y>0){
//             return 1
//         }
//         if(y<0){
//             return 3
//         }
//         else{
//             return 'error'
//         }
//     }
//     else{
//         return 'error'
//     }
// }
// function func23(){
//     let x = prompt()
//     let y = prompt()
//     let qrt = quarter(x,y)
//     alert(qrt)
// }

let quarter = function(x,y){
    if(x>0){
        if(y<0){
            return 4
        }
        if(y>0){
            return 2
        }
        else{
            return 'error'
        }
    }
    if(x<0){
        if (y>0){
            return 1
        }
        if(y<0){
            return 3
        }
        else{
            return 'error'
        }
    }
    else{
        return 'error'
    }
}
let func23 = function(){
    let x = prompt()
    let y = prompt()
    let qrt = quarter(x,y)
    alert(qrt)
}

let ispower5 = k =>{
    
}