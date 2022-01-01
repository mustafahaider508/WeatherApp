import React,{useEffect,useState} from 'react';
import "./WeatherApp.css";
import WeatherType from './WeatherType';
import WeatherCard from './WeatherCard';
import WeatherComp from "./WeatherComp"


function WeatherApp(props) {
    const[weatherForcast,setweatherForcast] = useState();
    const [input,setinput] = useState("Peshawar");
    const [tempInfo, setTempInfo] = useState({});

    
    
    

    const WeatherInfo_Forcast = async() => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/onecall?lat=34.025917&lon=71.560135&exclude=hourly,minutely&appid=fc4f7b08db5ab23438b8c846324420d6`
            let res = await fetch(url);
            let data = await res.json();
            console.log(data)
            // console.log(daysofWeek[new Date(data.daily[1].dt).getDay()]); 

            const min = parseFloat(data.daily[0].temp.min - 273.15).toFixed(0);
            const max = parseFloat(data.daily[0].temp.max - 273.15).toFixed(0);
            const icon = data.daily[0].weather[0].icon;
            const min1 = parseFloat(data.daily[1].temp.min - 273.15).toFixed(0);
            const max1 = parseFloat(data.daily[1].temp.max - 273.15).toFixed(0);
            const icon1 = data.daily[1].weather[0].icon;
            const min2 = parseFloat(data.daily[2].temp.min - 273.15).toFixed(0);
            const max2 = parseFloat(data.daily[2].temp.max - 273.15).toFixed(0);
            const icon2 = data.daily[2].weather[0].icon;
            const min3 = parseFloat(data.daily[3].temp.min - 273.15).toFixed(0);
            const max3 = parseFloat(data.daily[3].temp.max - 273.15).toFixed(0);
            const icon3 = data.daily[3].weather[0].icon;
            const min4 = parseFloat(data.daily[4].temp.min - 273.15).toFixed(0);
            const max4 = parseFloat(data.daily[4].temp.max - 273.15).toFixed(0);
            const icon4 = data.daily[4].weather[0].icon;
            const min5 = parseFloat(data.daily[5].temp.min - 273.15).toFixed(0);
            const max5 = parseFloat(data.daily[5].temp.max - 273.15).toFixed(0);
            const icon5 = data.daily[5].weather[0].icon;
            const min6 = parseFloat(data.daily[6].temp.min - 273.15).toFixed(0);
            const max6 = parseFloat(data.daily[6].temp.max - 273.15).toFixed(0);
            const icon6 = data.daily[6].weather[0].icon;

       
            const newData = {
               min,max,min1,max1,min2,max2,min3,max3,min4,max4,min5,max5,min6,max6,
               icon,icon1,icon2,icon3,icon4,icon5,icon6
            }
            setweatherForcast(newData);          
        } catch (error) {
            
        }


         

        
    }

// Search by  city Api
const WeatherInfo = async() => {
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=dccc147924a249b664ad69142ad0396b`
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);

        const temp = parseFloat(data.main.temp).toFixed(0);
        const min = parseFloat(data.main.temp_min).toFixed(0);
        const max = parseFloat(data.main.temp_max).toFixed(0);
        const feels_like = parseFloat(data.main.feels_like).toFixed(0);
        const {pressure,humidity} = data.main;
        const { main} = data.weather[0];
        const { name } = data;
        const { speed } = data.wind;
        const { country } = data.sys;
        const sunrise = new Date(data.sys.sunrise * 1000 ).toLocaleTimeString();
        const sunset = new Date(data.sys.sunset * 1000 ).toLocaleTimeString();
        const visibility = data.visibility / 1000;
    
       
            switch (main) {
              case "Clouds":
                document.getElementById("wraper-img").style.backgroundImage =
                "url('clouds.gif')";
                break;
              case "Haze":
                document.getElementById("wraper-img").style.backgroundImage =
                "url('clouds.gif')";
                break;
              case "Clear":
                document.getElementById("wraper-img").style.backgroundImage =
                "url('clear.gif')";
                break;
              case "snow":
                document.getElementById("wraper-img").style.backgroundImage =
                "url('snow.gif')";
                break;
                case "rain":
                document.getElementById("wraper-img").style.backgroundImage =
                "url('rain.gif')";
                break;
      
              default:
                document.getElementById("wraper-img").style.backgroundImage =
                "url('clear.gif')";
                break;
            }
          
        
            
        const newData1 = {
            country,temp,pressure,humidity,main,name,speed,sunset,min,max,sunrise,feels_like,visibility

        }
        setTempInfo(newData1);
       console.log(main);
        
    } catch (error) {
        
    }
    


}



    useEffect(() => {
        WeatherInfo_Forcast();  
        
               
    }, [])


  
    return (
        <>
          <div id="wraper-img">
           <div className="hearder">
           <div className="search-bar">
          
           <input
            type="search"
            placeholder="  search..."
            autoFocus
            id="search"
            className="search"
            value={input}
            onChange={(e) => setinput(e.target.value)}
         />  
               </div> 
               <div className="button-div">
               <button  onClick={WeatherInfo} className="button" >Search</button>
               </div>
               </div>

               <div>
               
                   <WeatherCard {...tempInfo} />
                   </div>

               <div>
                   <WeatherType  {...weatherForcast}/>
               </div>
    
                  <div>
                      <WeatherComp {...tempInfo} />
                  </div>
                  </div>
         
        </>
    )
}

export default WeatherApp
