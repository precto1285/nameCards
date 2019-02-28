import React, { Component } from 'react';
import './App.css';
import CardOne from './Components/CardOne';
import CardTwo from './Components/CardTwo';
import CardThree from './Components/CardThree';
import Footer from './Components/Footer';
import Form from './Components/Form';
class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      cOne: [
        {
          name: "Philippe Recto",
          title: "Lead Developer",
          department: "Production",
          office: "Carlsbad"
        }
      ],
      cTwo: [
        {
          name: "Paul Davidson",
          title: "Chief UX Designer",
          department: "Design",
          office: "Richmond"
        }
      ],
      cThree: [
        {
          name: "Wendy Cheng",
          title: "Database Manager",
          department: "Database Management",
          office: "San Jose"
        }
      ]
    }
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="Jumbotron m-1 my-5">
            <h1 className="bg-primary text-white p-5">Cards with Names</h1>
          </div>
          <div className="row">
            <div className="col-md-4 my-1 px-1">
              <CardOne
                cOneName={this.state.cOne[0].name}
                cOneTitle={this.state.cOne[0].title}
                cOneDepartment={this.state.cOne[0].department}
                cOneOffice={this.state.cOne[0].office} />
            </div>
            <div className="col-md-4 my-1 px-1">
              <CardTwo
                cTwoName={this.state.cTwo[0].name}
                cTwoTitle={this.state.cTwo[0].title}
                cTwoDepartment={this.state.cTwo[0].department}
                cTwoOffice={this.state.cTwo[0].office} />
            </div>
            <div className="col-md-4 my-1 px-1">
              <CardThree
                cThreeName={this.state.cThree[0].name}
                cThreeTitle={this.state.cThree[0].title}
                cThreeDepartment={this.state.cThree[0].department}
                cThreeOffice={this.state.cThree[0].office} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Form onSubmit="Hello World!" />
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
