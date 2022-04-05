import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Introducing} from "./Components/Introducing/Introducing";
import {MySkills} from "./Components/MySkills/MySkills";
import {MyProjects} from "./Components/MyProjects/MyProjects";
import "./App.css";

function App() {
  return (
    <div className="App">
     <Header/>
     <Introducing/>
     <MySkills/>
     <MyProjects/>
      <div>Block4(remote work)</div>
      <div>Block5(Contacts)</div>
      <div>Footer</div>
    </div>
  );
}

export default App;
