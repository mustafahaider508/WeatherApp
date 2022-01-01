import React from 'react';
import { Grid,Box} from '@material-ui/core';
import "./WeatherComp.css";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import VisibilityIcon from '@material-ui/icons/Visibility';
import WavesIcon from '@material-ui/icons/Waves';
import TimelineIcon from '@material-ui/icons/Timeline';
import SortIcon from '@material-ui/icons/Sort';


export default function WeatherComp({sunrise,sunset,visibility,feels_like,humidity,pressure,speed,weathermood}) {
  
  
    return (
        <div>
            
            <Grid container >  
             <Grid item  md={4} xs={6}>
                    
                    <div className="main_div" >
                    <Box className="paper_div">
                            <div className="header">
                            <WbSunnyIcon className="Sun_icon"/>
                            <p className="Sunrise">Sunrise</p>
                            </div>
                            <p className="time">{sunrise} AM </p>
                            <div className="divider1" />
                            <p className="sunset">Sunset: {sunset}</p>
                     </Box>       
                        
                    </div>
                 </Grid>

                 <Grid item  md={4} xs={6}>
                    
                    <div className="main_div" >
                    <Box className="paper_div">
                            <div className="header">
                            <VisibilityIcon className="icon"/>
                            <p className="Sunrise">VISIBILITY</p>
                            </div>
                            <p className="time">{visibility} KM </p>
                            
                            <p className="sunset">light haze is affecting visibility</p>
                     </Box>       
                        
                    </div>
                 </Grid>

                 <Grid item  md={4} xs={6}>
                    
                    <div className="main_div" >
                    <Box className="paper_div">
                            <div className="header">
                            <VisibilityIcon className="icon"/>
                            <p className="Sunrise">FEELS LIKE</p>
                            </div>
                            <p className="time">{feels_like}&deg;</p>
                            
                            <p className="sunset">light haze is affecting visibility</p>
                     </Box>       
                        
                    </div>
                 </Grid>

                 <Grid item  md={4} xs={6}>
                    
                    <div className="main_div" >
                    <Box className="paper_div">
                            <div className="header">
                            <WavesIcon className="icon"/>
                            <p className="Sunrise">HUMIDITY</p>
                            </div>
                            <p className="time">{humidity}%</p>
                            
                            <p className="sunset">The dew point is 1&deg; right now.</p>
                     </Box>       
                        
                    </div>
                 </Grid>

                 <Grid item  md={4} xs={6}>
                    
                    <div className="main_div" >
                    <Box className="paper_div">
                            <div className="header">
                            <TimelineIcon className="icon"/>
                            <p className="Sunrise">PRESSURE</p>
                            </div>
                            <p className="time">{pressure} hPa</p>
                            
                            <p className="sunset">The dew point is 100 hPa right now.</p>
                     </Box>       
                        
                    </div>
                 </Grid>


                 <Grid item  md={4} xs={6}>
                    
                    <div className="main_div" >
                    <Box className="paper_div">
                            <div className="header">
                            <SortIcon  className="icon"/>
                            <p className="Sunrise">SPEED</p>
                            </div>
                            <p className="time">{speed} km/h</p>
                            
                            <p className="sunset">The dew point is 1 km/h right now.</p>
                     </Box>       
                        
                    </div>
                 </Grid>
                 
                    
                
                
                
           </Grid>
          
        </div>
        
    )
}
