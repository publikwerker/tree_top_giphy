import React from 'react';
import {API_BASE_URL} from './config'

export default class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      display: false,
      returnedGifs: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendFetch(){
    return fetch(`${API_BASE_URL}${this.state.query}&limit=5`)
      .then(function(response){
        return response.json();
      })
  }

  setData(array){
    console.log(array);
    this.setState({returnedGifs: array})
  }

  handleChange(e) {
    this.setState({query: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let array = [];
    this.setState({display:true});
    this.sendFetch()
      .then(res=>{
        console.log(res.data);
        res.data.forEach(function(gif){
          array.push(gif)
        });
        console.log(array);
        this.setState({returnedGifs: array});
    })
  }

  render(){
    let displayBlock;
    let gifs =[];
    this.state.returnedGifs.forEach(function(element){
      gifs.push(<p>{element.slug}</p>)
    })
    if (this.state.display){
      displayBlock=<div>
          <h2>wow!</h2>
          {gifs}
        </div>
    } else {
      displayBlock=<h2>what will we find?</h2>
    }
    return(
      <div>
        <form
          onSubmit={this.handleSubmit}>
          <label>
            Search the Giphy-verse!<br />
            <input 
              type="text"
              name="query"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="submit"
            value="GO!"
            />
        </form>
        {displayBlock}
      </div>
    )
  }
}