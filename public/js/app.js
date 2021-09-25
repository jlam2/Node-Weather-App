
const message = document.querySelector('#message')

const searchInput = document.querySelector('input')
const searchForm = document.querySelector('form')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    locationUrl = `/weather?address=${searchInput.value}` 
    message.textContent = 'Fetching.....'
    fetch(locationUrl).then((res) => {
        res.json().then((data) => {
            if(data.error){
                message.textContent = data.error
            }else{
                message.innerHTML = `Location: ${data.location}<br>Forecast: ${data.forecast}`
            }
        })
    })
    console.log('form submitted')
})