import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import Carousel from 'react-elastic-carousel';
import Card from './components/cards/card'


export class App extends React.Component{

  render(){
    let breakPoints = [
      { width: 500 , itemsToShow : 1},
      { width: 768 , itemsToShow : 2},
      { width: 1200 , itemsToShow : 3},
      { width: 1500 , itemsToShow : 4}
    ];
    return(
      <div className="App">
        <Header/>
        <Carousel breakPoints={breakPoints}> 
          <Card number="1"/>
          <Card number="2"/>
          <Card number="3"/>
          <Card number="4"/>
          <Card number="5"/>
          <Card number="6"/>
          <Card number="7"/>
          <Card number="8"/>
        </Carousel>
        <Footer />
      </div>
    );
  }
}



