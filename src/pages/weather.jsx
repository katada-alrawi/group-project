import { useState,useEffect } from "react"

export default function Weather() {
   
    const [weatherInfo,setWeatherInfo]=useState(null)
     const [city,setCity]=useState("Berlin")
      // function getweather(){
    //     const apiKey = "1788751349c887dce75bcd7d2fbe310a"
    //     const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    //     fetch(url)
    //     .then((response)=> response.json())
    //     .then((data)=>{
    //         // console.log(data)
    //         let MT = Math.round(data.main.temp)
    //         let FL = Math.round(data.main.feels_like)
    //         const weather ={
    //             location: `Weather in ${data.name}`,
    //             temperature:`Temperature: ${MT} C`,
    //             feelsLike: `Feels Like: ${FL}`,
    //             humidity: `Humidity:${data.main.humidity} %`,
    //             wind: `Wind:${data.main.speed} km/h`,
    //             condition: `weather condition: ${data.weather[0].description}`,
    //         }
    //         setWeatherInfo(weather)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // }
    useEffect(() => {
        const fetchWeather = async () => {
            const apiKey = "1788751349c887dce75bcd7d2fbe310a";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                
                let MT = Math.round(data.main.temp);
                let FL = Math.round(data.main.feels_like);
                const weather = {
                    location: `Weather in ${data.name}`,
                    temperature: `Temperature: ${MT}°C`,
                    feelsLike: `Feels Like: ${FL}°C`,
                    humidity: `Humidity: ${data.main.humidity}%`,
                    wind: `Wind: ${data.wind.speed} km/h`,
                    condition: `Weather condition: ${data.weather[0].description}`,
                    iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`, 

                };

                setWeatherInfo(weather);
            } catch (error) {
                console.error(error);
            }
        };

        fetchWeather();
    }, [city])
  
  return (
<div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 mt-4 md:mt-8">
<h1 className="text-4xl md:text-6xl lg:text-8xl text-purple-600 font-indie-flower">The Weather Today</h1>
<input
    type="text"
    value={city}
    placeholder="City"
    onChange={(e) => setCity(e.target.value)}
    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
/>
    {weatherInfo && (
        <div className="mt-5 bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-xl font-semibold">{weatherInfo.location}</h3>

            <img src={weatherInfo.iconUrl} alt="Weather Icon" className="mx-auto" /> 

            <p className="mt-2 text-gray-600">{weatherInfo.temperature}</p>
            <p className="text-gray-600">{weatherInfo.feelsLike}</p>
            <p className="text-gray-600">{weatherInfo.humidity}</p>
            <p className="text-gray-600">{weatherInfo.wind}</p>
            <p className="text-gray-600">{weatherInfo.condition}</p>
        </div>
    )}
</div>

  )
}
