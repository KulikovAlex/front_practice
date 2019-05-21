import React from 'react';
import './App.css';
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "f4a50c1ca69fd0290afc20285bda4d4f";

class App extends React.Component {

  gettingWeater = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
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