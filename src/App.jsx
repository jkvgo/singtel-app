// import all necessary components/libraries
import React, {Component} from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.url = "http://pb-api.herokuapp.com/bars"; //endpoint url

    //set important states
    this.state = {
      buttons: [],
      bars: [],
      limit: 0
    };

    //get data from singtel endpoint immediately
    this.getData();

    //create callback functions for changes in child components
    this.changeValue = this.changeValue.bind(this);
    this.changeSelection = this.changeSelection.bind(this);
  }
  
  //function that executes the HTTP call that gets the data from singtel endpoint 
  //and updates the states from the response received
  getData(){
    axios.get(this.url).then((res) => {
      this.setState({
        buttons: res.data.buttons,
        bars: res.data.bars,
        limit: res.data.limit,
        chosenBar: 0
      });
    }).catch((res) => {
      console.error(res);
    });
  }

  //function that changes the value of a the progress bar chosen
  //with the clicked add/subtract button
  changeValue(e, value){
    const chosenBar = this.state.chosenBar;
    let bars = this.state.bars ? this.state.bars : [];
    if(value.indexOf("-") !== -1 && value.indexOf("+") === -1){ //it is a subtraction
      bars[chosenBar] = bars[chosenBar] - parseInt(value.slice(1));
      if(bars[chosenBar] < 0) bars[chosenBar] = 0;
    }else if(value.indexOf("+") !== -1 && value.indexOf("-") === -1){ //it is an addition
      bars[chosenBar] = bars[chosenBar] + parseInt(value);
    }
    this.setState({
      bars: bars
    });
  }

  //function that sets the current chosen progress bar
  //to the state so it can be accessed by other functions
  changeSelection(e){
    let number = e.target.value.match(/\d+/g).map(Number)[0] - 1;
    this.setState({
      chosenBar: number
    })
  }
    
  render() {
    const limit = this.state.limit ? this.state.limit : 0;

    //creates an array of Bar components
    //if there is no bars yet, set empty array
    const bars = this.state.bars ? this.state.bars.map((bar, key) => {
      return (
        <Bar 
        value={bar} 
        limit={limit} 
        key={key}
        no={key}/>
      );
    }) : [];

    //creates an array of bar options to be used by the select tag
    //if there are no bars yet, to only one option 'None'
    const optionBars = this.state.bars ? this.state.bars.map((bar, key) => {
      return (
        <option key={key}>Progress {key+1}</option>
      )
    }) : <option>None</option>;

    //creates an array of Button components
    //if there are no buttons, set as empty array
    const buttons = this.state.buttons ? this.state.buttons.map((button, key) => {
      let value = button.toString(); //set the value to string because there are - and +

      //if there is no - detected in the value
      //prepend a + since there is none from the endpoint
      //for aesthetic purposes
      if(value.indexOf("-") === -1){
        value = "+" + value;
      }
      return (
        <Button
          key={key}
          value={value}
          onClick={(e) => this.changeValue(e, value)}
        />
      )
    }) : [];
    
    return (
      <div className="App">
        <div className="placeholder">THE LIMIT IS: {limit}</div>
        {bars}
        <select onChange={this.changeSelection}>
          {optionBars}
        </select>
        {buttons}
      </div>
    );
  }
}

//Bar mini-component that contains logic for the
//progress bar design
function Bar(props){
  const value = props.value ? props.value : 0;
  const limit = props.limit ? props.limit : 0;
  let computedVal = Math.ceil((value/limit)*100);
  let color = "#64C0FF";
  if(computedVal >= 100){
    computedVal = 100;
    color = "#FC5D5D";
  }
  return (
    <div className="bar-container">
      <div className="bar-color" style={{width: computedVal+"%", backgroundColor: color}}>
      </div>
      <p className="bar-text">
        {value}
      </p>
    </div>
  )
}

//Button mini-component that generates a button
//for adding/subtracting values to the progress bar
function Button(props){
  const value = props.value ? props.value : "N/A";
  return (
    <a href="#" className="button" onClick={props.onClick}>
      {value}
    </a>
  );
}

export default App;
