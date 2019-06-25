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

  //this fetches the list, 
  //for now it's hardcoded to return only five
  sendFetch(){
    return fetch(`${API_BASE_URL}${this.state.query}&limit=5`)
      .then(function(response){
        return response.json();
      })
  }

  //this sets any change in the search box to state
  handleChange(e) {
    this.setState({query: e.target.value});
  }

  //on submit, changes state.display to true to show
  //display box, calls fetch, and sets results to state 
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
    // building array on DOM
    this.state.returnedGifs.forEach(function(element){
      gifs.push(<div key={element.id}>
          <p>{element.title}</p>
          <a href={element.url}>
            <img 
              src={element.images.original.url}
              alt={element.title}/>
          </a>
        </div>
      )
    })

    //display block is conditional,
    //depending on state.display
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