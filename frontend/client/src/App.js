import React, { Component } from 'react'
import axios from "axios"
import Card from 'react-bootstrap/Card'


export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       weatherData:[]
    }
  }

  // handleMap = async(cityName) => {
  //   const API = `http://localhost:3000/weather?cityName=${cityName}&format=json`;
  //   const res = await axios.get(API);
  //   try{
  //     this.handleWeather('')
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  handleWeather = async() =>{
    //? means incoming parameters
    const API = `http://localhost:3000/weather?cityName=Seattle&format=json`
    const res = await axios.get(API) //how we access our backend
    this.setState({weatherData: res.data}) //changing state
    console.log('Frontend PING')
    // console.log(res.day)
  }

  render() {
    return (
      <div>This is where our weather data will appear
       {/* request that sends to our server
      axios
      server's localhost (3001) - how we talk to our backend */}
      <Card>
      {this.state.weatherData.map((day, idx)=> {
        return(
        <div key = {idx}>
        <h1>{day.date}</h1>
        <h2>{day.description}</h2>
        </div>
        
        )
      })}
      </Card>
      
      <button onClick = {this.handleWeather}>Get Weather</button>
      </div>
    )
  }
}
