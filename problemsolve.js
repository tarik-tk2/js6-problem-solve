//p1 an arrow function take three perameter then give a result
const arrowFunction = (num1, num2, num3) => { 
    const result = num1 + num2 + num3;
    return result;
}
const result = arrowFunction(22, 3, 4)
//console.log(result)

//p2 using template string to create multiple line 
const useTemplate = `I am a Web Developer
I love coding 
I eat biriyani `
// console.log(useTemplate)

//p3 arrow function one will be argument another will default
const defultArrow = (num, res=3) => {
     return num+res
}
const getResult = defultArrow(3)
//console.log(getResult)


// p4 an array of friend
// find the even length friends and put in an new array
const friends = ['Mahim khan', "Tarik khan", "Golam  Rabby", "rased miya", "tanvir khan", "shihub uddin"]
let newFriends = [];
// friends.map((friend) => {
//     if (friend.length % 2 ==!0) {
//         newFriends.push(friend)
//     }
// })
// console.log(newFriends)

friends.forEach(friend => {
    if (friend.length % 2 == !0) {
    newFriends.push(friend)
    }
});
//console.log(newFriends)
// p5 squre each array element then calcute sum of them after find the average resulr of them
const numbers = [1, 2, 5, 6]
let sum = 0;
let average;
numbers.forEach(num => { 
    const squre = Math.pow(num,2)
    sum += squre;
    
     average = sum / numbers.length
   
})
// console.log(sum);
//   console.log(average);
// p6  combine 2 array find  maximum
const array1 = [33, 44, 22, 4, 66, 00, 333]
const array2 = [22, 4, 5, 7, 77, 999]
const newArray = [...array1, ...array2]

const findMax = Math.max(...newArray)
// console.log(findMax)
//p7 odd array given make it even
const oddNumber = [1, 3, 5, 7, 9, 11, 13]
let evenResult = [];
 oddNumber.map((num) => {
    num = num + 1
    evenResult.push(num);
})
//console.log(evenResult)
//p8 given array whis is diasble by 10
const arrayGiven = [11, 20, 33, 44, 55, 60, 40]
const diviedBy10 = arrayGiven.filter(num => num % 10 === 0)
// console.log(diviedBy10)
//p9 using p8 in find method
const findDivideBy10 = arrayGiven.find(num => num % 10 === 0)
// console.log(findDivideBy10)
//  solve  p10  probem using reduce and find total
const reduceResult = arrayGiven.reduce((prev,curr)=> {return prev+curr}, 0) 
// console.log(reduceResult)
//p11 find the total price from object 

const products = [
    { id: 1, name: "laptop", price: 40000},
    { id: 2, name: "mobile", price: 10000},
    { id: 3, name: "tab", price: 17000}
]
const totalPrce = products.map(product => product.price).reduce((prev, curr) => { 
    return prev+curr
},0)
console.log(totalPrce)