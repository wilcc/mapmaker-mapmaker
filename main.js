function doubleAll(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++){
    newArray.push(array[i]*2) 
  } return newArray
}

function absoluteValues(array) {
  let absolute = []
  for (let i = 0; i < array.length; i++){
    absolute.push(Math.abs(array[i]))
} return absolute
}

function yelledGreetings(array) {
  let yell = []
  for (let i = 0; i < array.length; i++){
    yell.push(array[i] + '!')
}return yell
}
function changeToInitials(array) {
  let initial = []
  for (let i = 0; i < array.length; i++){
    initial.push(array[i][0] + array[i][array[i].indexOf(' ')+1])
  }return initial
}

function doubleOdd(num) {
  let odd = []
  for (let i = 0; i < num.length; i++){
  if (Math.floor(num[i]) % 2 !== 0){
    odd.push(num[i] * 2)
  }else odd.push(num[i])
}return odd
}
function upperCaseFirstLetters(name) {
  let newName = []
  for (let i = 0; i < name.length; i++){
    let sepName = name[i]
    
    newName.push(name[i][0].toUpperCase()+ sepName.substring(1).toLowerCase())
    
  }return newName
}

function add1ToLeft(number) {
  let result = []
  for (let i = 0; i < number.length; i++){
  
    let singleNumber=number[i].toString()
    if (singleNumber[0] === '-'){
      // let newNumber = singleNumber.splice(0,1)
    let newNumber = -1 + singleNumber.slice(1)
    result.push(Number(newNumber))
  }else {
  let singleNumber=number[i].toString()
  let newNumber = 1 + singleNumber
  
  result.push(Number(newNumber))}
}return result

}
module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}