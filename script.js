const screen = document.querySelector('.screen')
const prevScreen = document.querySelector('.previous-screen')
const wrapper = document.querySelector('.wrapper')

let firstNumber
let operator

wrapper.addEventListener('click', (e) => {
    const targetNumber = e.target
    const targetText = targetNumber.innerText

    if (targetNumber.classList.contains('number-btn')) {
        screen.innerText === '0' ? screen.innerText = targetText : screen.innerText += targetText
    }

    if (targetNumber.classList.contains('point-btn')) {
        if (screen.innerText.includes('.')) return
        screen.innerText += targetText
    }

    if (targetNumber.classList.contains('operator-btn')) {
        mathOperator(targetText)
    }

    if (targetNumber.classList.contains('equal-btn')) {
        calculate()
    }

    if (targetNumber.classList.contains('tool-btn')) {
        toolOperation(targetText)
    }
})

function mathOperator(op) {
    if (screen.innerText != '') {
        operator = op

        if (prevScreen.innerText != '') {
            calculate()
        }

        firstNumber = Number(screen.innerText)
        prevScreen.innerText = `${screen.innerText}${op}`
        screen.innerText = ''
    }
}

function calculate() {
    let calculate
    switch(operator) {
        case '+':
            calc = firstNumber + Number(screen.innerText)
            screen.innerText = calc
            prevScreen.innerText = ''
            break

        case '-':
            calc = firstNumber - Number(screen.innerText)
            screen.innerText = calc
            prevScreen.innerText = ''
            break

        case 'x':
            calc = firstNumber * Number(screen.innerText)
            screen.innerText = calc
            prevScreen.innerText = ''
            break

        case '÷':
            calc = firstNumber / Number(screen.innerText)
            screen.innerText = calc
            prevScreen.innerText = ''
            break

        case '%':
            calc = (firstNumber / 100) * Number(screen.innerText)
            screen.innerText = calc
            prevScreen.innerText = ''
            break
    }
}

function toolOperation(tool) {
    switch(tool) {
        case 'AC':
            screen.innerText = 0
            prevScreen.innerText = ''
            firstNumber = ''
            break

        case '⇐':
            screen.innerText.length === 1 ?
            screen.innerText = 0 :
            screen.innerText = screen.innerText.substring(0, screen.innerText.length - 1)
            break

        case '%':
            firstNumber = Number(screen.innerText)
            prevScreen.innerText = `${screen.innerText}%`
            screen.innerText = ''
            operator = '%'
    }
}