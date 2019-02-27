import React, { Component } from 'react';
import './App.css';
import CardOne from './Components/CardOne';
import CardTwo from './Components/CardTwo';
import CardThree from './Components/CardThree';
import Footer from './Components/Footer';

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
            <h1 className="bg-primary text-white">Hello World!</h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <CardOne
                cOneName="Name" cOneTitle="Title" cOneDepartment="Department" cOneOffice="Office" />
            </div>
            <div className="col-md-4">
              <CardTwo
                cTwoName="Another Name" cTwoTitle="Another Title" cTwoDepartment="Another Department" cTwoOffice="Another Office" />
            </div>
            <div className="col-md-4">
              <CardThree
                cThreeName="Yet Again, a Name" cThreeTitle="Yet Again, a Title" cThreeDepartment="Yet Again, a Department" cThreeOffice="Yet Again, a Office" />
            </div>
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
