import { useState } from 'react'
import clear from './assets/clear.png'
import cloud from './assets/cloud.png'
import drizzle from './assets/drizzle.png'
import humidity from './assets/humidity.png'
import rain from './assets/rain.png'
import snow from './assets/snow.png'
import wind from './assets/wind.png'
import searchIcon from './assets/search.png'

function App() {

  const [icon, setIcon] = useState(cloud)

  const search = async () => {

    const apiKey = "b731cd7748452d2aecd1bd2cc0f69874"
    const element = document.getElementsByClassName('input')

    if (element[0].value == " ") {
      return 0
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${apiKey}`

    let response = await fetch(url)
    let data = await response.json()

    const humidity = document.getElementsByClassName('humidity')
    const wind = document.getElementsByClassName('wind')
    const temperature = document.getElementsByClassName('temperature')
    const location = document.getElementsByClassName('location')

    humidity[0].innerHTML = data.main.humidity + "%"
    wind[0].innerHTML = data.wind.speed + "km /h"
    temperature[0].innerHTML = data.main.temp + "°c"
    location[0].innerHTML = data.name

    if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
      setIcon(clear)
    }

    else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
      setIcon(cloud)
    }

    else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
      setIcon(drizzle)
    }

    else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
      setIcon(drizzle)
    }

    else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
      setIcon(rain)
    }

    else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n') {
      setIcon(rain)
    }

    else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
      setIcon(snow)
    }

   else {
    setIcon(clear)
   }
   
  }

  return (

    <div className="container">

      <div className="search">
        <input className="input"
         type="text"
         placeholder='search' />
        <button onClick={search} type='submit'><img src={searchIcon} /> </button>
      </div>

      <div className="info">
       <img src={icon}/>
        <div className="temperature">15ºc</div>
        <div className="location">London</div>
      </div>

      <div className="dataContainer">

        <div className="element">

          <img src={humidity}/>

          <div className="data">

            <div className="humidity">87%</div>
            <div className="text">humidity</div>

          </div>

        </div>

        <div className="element">

          <img src={wind}/>

          <div className="data">

            <div className="wind">5.14 km/h</div>
            <div className="text">wind Speed</div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App
