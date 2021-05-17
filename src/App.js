import "./index.scss"
import Header from './components/header'
import Home from "./pages/home/Home"
import Facilities from './pages/facilities/facilities'
import Rooms from './pages/rate/rooms'
import Contact from './pages/contact/contact'
import {Route, Switch} from 'react-router-dom'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <Header className="header"/>
        <Switch>
        <Route exact path = "/" component ={Home}/>
        <Route  path = "/facilities" component ={Facilities}/>
        <Route  path = "/rooms" component ={Rooms}/>
        <Route  path = "/contact" component ={Contact}/>
        </Switch>
     
     
      <Footer id = "#footer"/>
    </>
  );
}

export default App;
