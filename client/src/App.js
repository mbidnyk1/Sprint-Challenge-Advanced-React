import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PlayerCard from './components/PlayerCard'
import CountryInput from './components/CountryInput'


class  App extends Component {
    constructor(){
      super()
      this.state = {
        playerData: [],
        filteredData: [],
        countryValue:''
      }
    }
    fetchPlayerData = () => {
      axios.get('http://localhost:5000/api/players')
        .then(result => {
          this.setState({playerData: result.data})
        })
        .catch(error => {
          console.log('error:', error)
        })
    }
    componentDidMount() {
      this.fetchPlayerData()
    }
  
    handleChanges = e => {
      this.setState({[e.target.name]:e.target.value})
    }

    filterByCountry = e => {
      e.preventDefault()
      console.log([this.state.countryValue])
      this.setState({
        playerData: this.state.playerData.filter(player => player.country === this.state.countryValue)
      })
    }
  render() {
    return (
      <>
      <CountryInput 
      handleChanges= {this.handleChanges} 
      countryValue={this.state.countryValue}
      playerData={this.state.playerData}
      
      />
      <button onClick={this.filterByCountry}>submit</button>

    <div className= 'cards'>{this.state.playerData.map((player,index) => (
      <PlayerCard 
        key={index}
        name={player.name} 
        country={player.country} 
        searches={player.searches}
        />
    ))}
    </div>
    </>  
    )
  }
}

export default App;
