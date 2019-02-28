import React, { Component } from 'react';
import './App.css';
import CardOne from './Components/CardOne';
import CardTwo from './Components/CardTwo';
import CardThree from './Components/CardThree';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Image from './Components/Image';
class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      cOne: [
        {
          name: "Philippe Recto",
          title: "Front-End Web Developer",
          department: "Production",
          office: "Carlsbad"
        }
      ],
      cTwo: [
        {
          name: "Paul Davidson",
          title: "Front-End Web Developer",
          department: "Production",
          office: "Richmond"
        }
      ],
      cThree: [
        {
          name: "Wendy Cheng",
          title: "Back-End Web Developer",
          department: "Production",
          office: "San Jose"
        }
      ]
    }
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="Jumbotron my-5">
            <h1 className="bg-primary text-white p-5">Cards with Names</h1>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Form onSubmit="Hello World!" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 px-5">
              <CardOne
                cOneName={this.state.cOne[0].name}
                cOneTitle={this.state.cOne[0].title}
                cOneDepartment={this.state.cOne[0].department}
                cOneOffice={this.state.cOne[0].office} />
            </div>
            <div className="col-md-4 px-5">
              <CardTwo
                cTwoName={this.state.cTwo[0].name}
                cTwoTitle={this.state.cTwo[0].title}
                cTwoDepartment={this.state.cTwo[0].department}
                cTwoOffice={this.state.cTwo[0].office} />
            </div>
            <div className="col-md-4 px-5">
              <CardThree
                cThreeName={this.state.cThree[0].name}
                cThreeTitle={this.state.cThree[0].title}
                cThreeDepartment={this.state.cThree[0].department}
                cThreeOffice={this.state.cThree[0].office} />
            </div>
          </div>
          <div className="row">
            <Image />
          </div>
          <div className="row my-5">
            <div className="col-md-12">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
