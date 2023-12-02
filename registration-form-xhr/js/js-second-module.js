console.log('-- js-second-module   I S   C O N N E C T E D')

export default (function () {

  const formReg = document.querySelector('#form-reg')
  const btnSubmitXhr = document.querySelector('.btn-submit-xhr')

  btnSubmitXhr.addEventListener('click', function () {
    const xhrFormData = new FormData(formReg)
    xhrFormData.append('added field', 'This field was added before shipping')

    const req = new XMLHttpRequest()

    req.open('post', '')
    req.send(xhrFormData)
  })

})()
