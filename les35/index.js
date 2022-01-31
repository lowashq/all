// // let mas = []

// // // mas[5] = 0
// // // mas[0] = 4
// // // mas.length = 0
// // // mas.push(12)
// // // mas.unshift(13)
// // for (let i=0; i< 10;i++) {
// //     mas.push(i)
// // }
// // for (let i=0; i< mas.length; i++){
// //     console.log(mas[i])
// // }
// // console.log('-----------------------')
// // for (const iterator of mas) {
// //     console.log(iterator)
// // }

// // console.log(mas)

// let mas = []
// for (let i=0;i<10;i++) {
//     let c = +prompt(`Input ${i} number`)
//     mas.push(c)
// }
// console.log(mas)
// let sum = 0
// for (let item of mas) {
//     sum += item
// }
// console.log(`Sum = ${sum}`)

// let sum2 = 0
// for (let i=0;i < mas.length;i++) {
//     sum2 += mas[i]
// }
// console.log(`Sum2 = ${sum2}`)

// let mas2 = []
// for (let i=0;i<10;i++) {
//     let c = Math.round(Math.random()*10)
//     mas2.push(c)
// }
// console.log(mas2)








// let mas = []
// for (let i=0;i<10;i++) {
//     let c = Math.round(Math.random()*10)
//     mas.push(c)
// }
// console.log(mas)
// let sum = 1
// for (let item of mas) {
//     sum *= item
// }
// console.log(`Sum = ${sum}`)

// let mas = []
// for (let i=0;i<10;i++) {
//     let c = Math.round(Math.random()*10)
//     mas.push(c)
// }
// console.log(mas)
// let sum = 0
// for(let item of mas){
//     sum+=item
// }
// console.log(sum/10)


// let mas = []
// let mas1 = +prompt()
// for (let i=0;i<10;i++) {
//     let c = Math.round(Math.random()*10)
//     mas.push(c)
// }
// console.log(mas)
// let sum = 0
// for(let item of mas){
//     sum+=item
// }
// let sum1 = 1
// for(let item of mas){
//     sum1*=item
// }
// console.log(sum + mas1)
// console.log(sum1*mas1)

// let mas = []

// for (let i=0;i<10;i++) {
//     let c = Math.random()*10|0
//     mas.push(c)
// }
// console.log(mas)
// let sum = 0
// for(let item of mas){
//     sum+=item
// }

// console.log(sum)

// let mas = []
// let mas1 = +prompt()*0
// for (let i=0;i<10;i++) {
//     let c = Math.random()
//     mas.push(c)
// }
// console.log(mas)
// let sum = 1
// for(let item of mas){
//     sum*=item
// }

// console.log(sum*mas1)

// let mas = []
// let num = +prompt()|0
// for (let i=0;i<10;i++) {
//     let c = Math.round(Math.random()*10.0)
//     mas.push(c)
// }
// console.log(mas)
// let sum = 0
// for(let item of mas){
//     sum+=item
// }

// console.log(sum+num)
let mas = []
for (let i=0;i<10;i++) {
    let c = Math.random()*10
    if(c%2==0){
        mas.push(c)
    }
}
console.log(mas)