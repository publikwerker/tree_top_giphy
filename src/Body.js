import React from 'react';
import {API_BASE_URL} from './config'

export default class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      display: false,
      data: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendFetch(){
    return fetch(`${API_BASE_URL}${this.state.query}`)
      .then(function(response){
        return response.json();
      })
      .then(function(myJson){
        let list = JSON.stringify(myJson);
        return list;
      })
  }

  handleChange(e) {
    this.setState({query: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({display:true});
    this.sendFetch()
      .then(res=>{
        let {data} = res;
        console.log(res);
        console.log(data);
   })
  }

  render(){
    return(
      <div>
        <form
          onSubmit={this.handleSubmit}>
          <label>
            Search the Giphy-verse!
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
      </div>
    )
  }
}