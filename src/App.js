import React from'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import ImageCarousel from './components/imageCarousel'
import AppBar from '@mui/material/AppBar';
import ActionAreaCard from "./components/card"
import Royal from "./assets/royal.jpg"
import Navbar from "./components/Navbar"
class App extends React.Component{

  render(){
    let testCard =  {
      image:Royal,
      price:"$220",
      title:"Jordan 1 Royal",
      date:"10/05/2022",
      availability:"In Stock"
    }
      return(
        <div>

        <div>
          <Navbar />
          <ImageCarousel />
        </div>
        <div>



        </div>
        <AppBar class="recommended" position="static"  style={{backgroundColor:"#BF5700",width:"95%", margin: "auto"}}>

          <ActionAreaCard class="card"item={testCard}/>
          <ActionAreaCard class="card"item={testCard}/>
          <ActionAreaCard class="card"item={testCard}/>
          <ActionAreaCard class="card"item={testCard}/>
        </AppBar>

        </div>

      );
  }
}


export default App;