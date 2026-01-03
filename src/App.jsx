//import './App.css';
import WeatherApp from "./WeatherApp";

function App() {
  console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);
console.log("VITE_API_KEY:", import.meta.env.VITE_API_KEY);

  return (
    <>
      <WeatherApp />
    </>
  )
}

export default App;
