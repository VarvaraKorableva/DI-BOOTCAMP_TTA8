const btn = document.getElementById('btn')
const firstSelect = document.getElementById('fromInput')
const secondSelect = document.getElementById('toInput')

const getСurrencyData = async(e) => {
    e.preventDefault()
    try {
        const res = await fetch('https://v6.exchangerate-api.com/v6/ef12f9aed455c11e3da86a32/codes')
        const data = await res.json()
        addOptionInHtml(data.supported_codes)
    }
    catch (error){
        console.log(error)
    }
}
 
const getResultData = async(e) => {
    e.preventDefault()
    const dataFromInputs = handleSelect()
    const { firstSelect, secondSelect, amountInput } = dataFromInputs

    const firstSelectData = firstSelect.split(',')[0]
    const secondSelectData = secondSelect.split(',')[0]
    const amountInputData = parseInt(amountInput)

    try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/ef12f9aed455c11e3da86a32/pair/${firstSelectData}/${secondSelectData}/${amountInputData}`)
        const data = await res.json()

        const result = document.getElementById('result')
        result.textContent = data.conversion_result
    }
    catch (error){
        console.log(error)
    }
}

function addOptionInHtml(data) {
    const selectToInput = document.getElementById('toInput')
    const selectFromInput = document.getElementById('fromInput')

    for(code of data) {
        const optionTo = document.createElement('option')
        optionTo.value = code
        optionTo.textContent = code

        const optionFrom = document.createElement('option')
        optionFrom.value = code
        optionFrom.textContent = code

        selectToInput.appendChild(optionTo)
        selectFromInput.appendChild(optionFrom)
    } 

}

function handleSelect() {
    const firstSelect = document.getElementById('fromInput').value
    const secondSelect = document.getElementById('toInput').value
    const amountInput = document.getElementById('amount').value
    
    return {firstSelect, secondSelect, amountInput}
}

window.addEventListener('DOMContentLoaded', getСurrencyData)
//firstSelect.addEventListener('change', handleSelect)
//secondSelect.addEventListener('change', handleSelect)
btn.addEventListener('click', getResultData)