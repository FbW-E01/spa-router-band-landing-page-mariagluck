import { Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import Heading from './components/Heading';
import Home from './pages/Home';
import Vocals from './pages/Vocals';
import Bass from './pages/Bass';
import Drums from './pages/Drums';
import Guitar from './pages/Guitar';
import Keyboard from './pages/Keyboard';
import './App.css';


export default function App() {
    return (
        <div>
            <Heading />
            <Navigation />
            <Switch>
                <Route exact path="/">
                <Home />
                </Route>
                <Route path="/vocals">
                    <Vocals />
                </Route>
                <Route path="/guitar">
                   <Guitar />
                </Route> 
                <Route path="/bass">
                   <Bass />
                </Route> 
                <Route path="/keyboard">
                   <Keyboard />
                </Route> 
                <Route path="/drums">
                   <Drums />
                </Route> 
            </Switch>
        </div>
    );
}
