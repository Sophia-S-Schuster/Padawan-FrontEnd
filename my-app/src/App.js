import './App.css';
import React, { Component } from 'react';
import {p1,p2,p3,p4,p5} from './Users';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      index:0,
      people:[
        p1,p2,p3,p4,p5,
      ],
      indexImg: 0,
      img:[0,1,2],
    }
  }
  handleClick(step,imgBool){
    const {index} = this.state;
    const {indexImg} = this.state;
    if (imgBool===1) {
      var a = indexImg;
      a= a + step;
      this.setState({indexImg:a})
    }
    else{
      var a = index;
      a = a + step;
      this.setState({index:a});
    }
  }
  checkDisabled(step,imgBool){
    const {index, people} = this.state;
    const {img,indexImg} = this.state
    var lenght=0;
    var ind =0;
    if (imgBool===0){lenght=people.length; ind=index;} 
    else {lenght=3;ind=indexImg;}
    if(step > 0){
      if(ind >= lenght-1){
        return true;
      } else return false;
    } 
    if(step < 0){
      if(ind <= 0){
        return true;
      } else return false;
    }
  }
  render(){
    const {index, people} = this.state;
    const {indexImg}= this.state;
    return (
      <div className="App">
        <h1>
        About me
        </h1>
        <button onClick= {()=> this.handleClick(-1,0)} disabled = {this.checkDisabled(-1,0)}>Previous Person</button>
        <button onClick= {()=> this.handleClick(1,0)} disabled = {this.checkDisabled(1,0)}>Next Person</button>   
        <button onClick= {()=> this.handleClick(-1,1)} disabled = {this.checkDisabled(-1,1)}>Previous Image</button>
        <button onClick= {()=> this.handleClick(1,1)} disabled = {this.checkDisabled(1,1)}>Next Image</button>       
        <div className="container">
          <div className="container-text">
            <div className="text">
              <h2>
                Hello! My name is {people[index].name}. 
              </h2>
              <p>
                {people[index].text}
              </p>
            </div>
          </div>
          <img src ={people[index].img[indexImg]}/>
        </div>
      </div>
    );
  }
}

export default App;
