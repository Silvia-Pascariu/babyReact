import React from 'react';
import NavBar from "./components/navbar/NavBar";
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Homepage from "./components/homepage/Homepage";
import Tracking from "./components/tracking/Tracking";
import Growth from "./components/tracking/Growth";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar></NavBar>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/tracking" component={Tracking} />
                    <Route path = "/growth" component={Growth} />
                </Switch>
            </header>
        </div>
    );
}

export default App;
