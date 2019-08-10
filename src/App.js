import React from 'react';
import './App.css';
import Homepage from "./pages/Home/HomePage";



function App() {
  return (
    <div >
        <Homepage />
    </div>
  );
}


//
// import  { Component } from 'react';
// class App extends Component {
//     state = {
//         text: ''
//     };
//   onChange = e => {
//         this.setState({text: e.target.value});
//   };
//  render() {
//      console.log("App");
//      return (
//    <div>
//        Search
//        <input type='search' onChange={this.onChange} />
//        Text
//        <input type='text' onChange={this.onChange} />
//        <div>
//            State: {this.state.text}
//        </div>
//    </div>
//   );
//  }
// }

export default App;
