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


  constructor(props) {
    super(props)
    this.state = {
      language: 'Hun'
    }
  }

  changeLanguage = (language) => {
    this.setState({ language })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" render={(props) => <Home changeLanguage={this.changeLanguage} language={this.state.language} {...props}/>} />
            <Route path="/bemutatkozas" component={AboutMe} language={this.state.language} />
            <Route path="/elerhetoseg" component={Contact} language={this.state.language} />
            <Route path="/galeria" component={Gallery} language={this.state.language} />
            <Route path="/etlap" component={Menu} language={this.state.language} />
            <Route path="/levesek" component={Soup} language={this.state.language} />
            <Route path="/foetelek" component={MainCourse} language={this.state.language} />
            <Route path="/eloetelek" component={Appetizer} language={this.state.language} />
            <Route path="/pizzak" component={Pizza} language={this.state.language} />
            <Route path="/koretek" component={SideDish} language={this.state.language} />
            <Route path="/desszertek" component={Dessert} language={this.state.language} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
