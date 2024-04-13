import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Weather />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/Jessbpl">Jessica Bravo</a> and is
        open-sourced on
        <a href="https://github.com/Jessbpl/weather-react">{""} Github</a>
      </footer>
    </div>
  );
}
