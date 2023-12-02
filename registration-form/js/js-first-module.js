console.log('-- js-first-module   I S   C O N N E C T E D')

export default (function () {

  const formReg = document.querySelector('#form-reg')
  const btnCheck = document.querySelector('.btn-check')
  const outputElement = document.querySelector('#output-element')

  btnCheck.addEventListener('click', function () {
    const formData = new FormData(formReg)
    outputElement.innerText = ''

    for (const pair of formData) {
      console.log(pair)
      outputElement.innerText += `${pair[0]}: ${pair[1]}\n`
    }

    formReg.reset()
  })

})()
