import React from 'react';
import './App.css';
import { Header } from './components/header/Header';  
import  Footer  from './components/footer/Footer';
import store from './react-redux-store/store/configureStore';
import  Card1  from './components/card1/card1';
import { Posts } from './components/post/Posts';
import {Provider} from 'react-redux';



export class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <div className="App">
        <Header />
        <Card1 />
        <Footer />
      </div>
      </Provider>
    );
  }
}



