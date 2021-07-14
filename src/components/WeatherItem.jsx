import "../assets/styles/weather-items.css";

export default function WheatherItem({weekDay, temp, imgURL}) {
    return (
        <div className="item">
            <h2>{weekDay}</h2>
            <img src={imgURL} alt="weather icon"/>
            <p>{temp}</p>
        </div>
    )
}