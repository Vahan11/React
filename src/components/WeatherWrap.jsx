import Data from "./WeatherData";
import WheatherItem from "./WeatherItem";

export default function WeatherWrap() {
    return (
        <div className="weather-wrap">
            {Data.map((el) => {
               return (
                <WheatherItem temp={el.temp} weekDay={el.weekDay} imgURL={el.imgURL} />
               ) 
            })}
        </div>
    )
}