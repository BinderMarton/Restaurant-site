import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutMe from './components/About_me';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Soup from './components/Soup';
import MainCourse from './components/Main_course';
import Appetizer from './components/Appetizer';
import Pizza from './components/Pizza';
import SideDish from './components/Side_dish';
import Dessert from './components/Dessert';
import Navbar from './components/Navbar';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/bemutatkozas" component={AboutMe} />
            <Route path="/elerhetoseg" component={Contact} />
            <Route path="/galeria" component={Gallery} />
            <Route path="/etlap" component={Menu} />
            <Route path="/levesek" component={Soup} />
            <Route path="/foetelek" component={MainCourse} />
            <Route path="/eloetelek" component={Appetizer} />
            <Route path="/pizzak" component={Pizza} />
            <Route path="/koretek" component={SideDish} />
            <Route path="/desszertek" component={Dessert} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
