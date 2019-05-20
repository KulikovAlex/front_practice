import React from 'react';
import './App.css';
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "b6907d289e10d714a6e88b30761fae22";

class App extends React.Component {

  gettingWeater = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await
    fetch(`https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, {mode:"no-cors"});
    const data = await api_url.status;
    console.log(data);
  }

  render() {
    return(
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeater} />
        <Weather />
      </div>
    );
  }

}

export default App;