import React from "react";
import Header from "../../common/header/Header";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "../../home/Home";
import About from "../About/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";




const Pages =()=>{
    return(
        <>
        <Router>
            <Header/>
            <Switch>
                 <Route exact path='/' component={Home}/>
                 <Route exact path='/About' component={About}/>
                 <Route exact path='/Services' component={Services}/>
                 <Route exact path='/Contact' component={Contact}/>
            </Switch>
            
        </Router>
        </>
    )
}
    
export default Pages