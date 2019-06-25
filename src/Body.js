import React from 'react';

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

  handleChange(e) {
    this.setState({query: e.target.value});
  }

  handleSubmit(e) {
    console.log(`the query: ${this.state.query}`);
    e.preventDefault();
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