// mengambil element HTML di code JavaScript
const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector('.calculator-screen')

// membuat variable untuk membantu penghitungan
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

// menampilkan angka di kalkulator
const updateScreen = (number) => {
    calculatorScreen.value = number
}

// menginput angka
const inputNumber = (number) => {
    // apabila input angkanya 0, maka tidak bisa menginput angka tambahan
    if (currentNumber === '0') {
      currentNumber = number
    // apabila tidak diawali angka 0, maka adpat melanjutkan input angka lain
    } else {
      currentNumber += number
    }
}

// menginput operasi
const inputOperator = (operator) => {
    if(calculationOperator === '') {
      prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

// untuk menambah angka di kalkulator
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.innerText)
        updateScreen(currentNumber)
    })
})

// operator =
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

// kalkulasi denga beberapa operator
const calculate = () => {
  // variable result didefinisikan kosong sementara
  let result = ''
  switch(calculationOperator) {
    // operasi penambahan
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      break
    // operasi pengurangan
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber)
      break
    // operasi perkalian
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber)
      break
    // operasi pembagian
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber)
      break
    default:
      return
  }
  // variable currentNumber di update menjadi result
  currentNumber = result
  // calculationOperator di update menjadi kosong
  calculationOperator = ''
}

// AC digunakan untuk mereset seluruh kalkulasi dan mengulang dari awal
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll() // menghapus prevNumber, calculationOperator, dan currentNumber menjadi 0
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

// menghitung angka desimal
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

// menghitung persen
const percentage = document.querySelector('.percentage')

percentage.addEventListener('click', () => {
    currentNumber = currentNumber * 0.01
    updateScreen(currentNumber)
})