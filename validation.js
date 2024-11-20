document.getElementById('submit-form').addEventListener('submit',function (e){
    e.preventDefault();

    const name = documet.getElementById('Name').value.trim()
    const email = document.getElementById('Email').value.trim()
    const number = document.getElementById('Number').value.trim()
    const country = document.getElementById('Country').value.trim()
    const state = document.getElementById('State').value.trim()
    const feedback =document.getElementById('comment').value.trim()
    const error = document.getElementById('errorElement')

    error.textContent = ''

    if(name === '' || email === '' || number === '' || country === '' || state === '' || feedback === ''){
        error.textContent = 'Please fill all the fields'
        return
    }

})