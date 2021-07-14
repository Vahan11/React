import Sunny from "./icons/01.svg";
import Cloudy from "./icons/05.svg";
import Rainy from "./icons/17.svg";
import Stormy from "./icons/09.svg";

// eslint-disable-next-line import/no-anonymous-default-export
const WeatherData = [
  {
    weekDay: "Monday",
    imgURL: Sunny,
    temp: "36C",
  },
  {
    weekDay: "Tuesday",
    imgURL: Cloudy,
    temp: "32C",
  },
  {
    weekDay: "Wednesday",
    imgURL: Cloudy,
    temp: "35C",
  },
  {
    weekDay: "Thursday",
    imgURL: Rainy,
    temp: "45C",
  },
  {
    weekDay: "Friday",
    imgURL: Rainy,
    temp: "36C",
  },
  {
    weekDay: "Saturday",
    imgURL: Stormy,
    temp: "37C",
  },
  {
    weekDay: "Sunday",
    imgURL: Sunny,
    temp: "39C",
  },
];

export default WeatherData;
