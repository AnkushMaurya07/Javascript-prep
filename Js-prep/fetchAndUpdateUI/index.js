
const inputCity = document.getElementById("city-value")
const searchButton = document.getElementById("search-button")
const cityLocation = document.getElementById("city-location")
const cityTemp = document.getElementById("city-temp")

async function data(inputCity) {

    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=82f9c6b9ac934d1a80c135305241603&q=${inputCity}&aqi=yes`)
    // .then((data) => {
    //     return data.json()
    // })
    return data.json()

}

searchButton.addEventListener('click', async () => {
    const inputValue = inputCity.value
    const cityCall = await data(inputValue)
    console.log(cityCall);

    cityLocation.innerText = `${cityCall.location.name} ${cityCall.location.region} ${cityCall.location.country}`
    cityTemp.innerText = `Wind Speed:${cityCall.current.wind_kph}`

})