

import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';

export class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Header/>
        <Main />
        <Footer />
      </div>
    );
  }
}





// import './App.css';
// import {Todos} from './components/Todos';




// function App() {
//   return (
//     <div className="App">
//       <Todos />   
//     </div>
//   );
// }

// export default App;