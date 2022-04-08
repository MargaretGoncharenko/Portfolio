import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Introducing} from "./Components/Introducing/Introducing";
import {MySkills} from "./Components/MySkills/MySkills";
import {MyProjects} from "./Components/MyProjects/MyProjects";
import "./App.css";
import {RemoteWork} from "./Components/RemoteWork/RemoteWork";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
     <Header/>
     <Introducing/>
     <MySkills/>
     <MyProjects/>
      <RemoteWork/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
