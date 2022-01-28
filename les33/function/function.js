

// 1
function circle(r){
   S = r**2 *3.14
   return S
}
function func18(){
    let r = prompt("input radius")
    let S = circle(r)
    alert(S)
}

// 2
function ring(r1,r2){
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
function func19(){
    let r1 = prompt('input radius1')
    let r2 = prompt('input radius2')
    let S = ring(r1,r2)
    if(S==-1){
        alert('error')
    }
    else{
        alert(S)
    }
    
}

// 3
function triangle(a,h){
    b= Math.sqrt((a/2)**2 + h**2)
    P = a+b*2
    return P
}
function func20(){
    let a = prompt("основа треугольника:")
    let h = prompt('высота:')
    let P = triangle(a,h)
    alert(P)
}

// 4
function rootcount(a,b,c){
    D = b**2 - 4*a*c
    if (D>0){
        return '2 корня'
    }
    else{
        return 'нет корней'
    }
    
}
function func17(){
    let a= prompt("a:")
    let b= prompt("b:")
    let c= prompt("c:")
    let D= rootcount(a,b,c)
    alert(D)
}

// 5
function quarter(x,y){
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
function func23(){
    let x = prompt()
    let y = prompt()
    let qrt = quarter(x,y)
    alert(qrt)
}

// 6
function even(k){
    if((k%2)==0){
        return true
    }
    else{
        return false
    }
}
function func24(){
    let k = prompt()
    let ev = even(k)
    alert(ev)
}


