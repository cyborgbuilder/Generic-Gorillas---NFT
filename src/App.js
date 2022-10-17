import { Component } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Home from './components/Home'
import Roadmap from './components/Roadmap'
import Team from './components/Team';
import ImageSlider from './components/ImageSlider'

function App() {
  return (
    <div className="App">
      <Home />
      {/* <ImageSlider /> */}
      <Roadmap />
      <Accordion />
      <Team />
    </div>
  );
}

export default App;
