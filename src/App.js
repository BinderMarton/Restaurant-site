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
import SideDrawer from './components/SideDrawer';
import BackDrop from './components/Back_drop';


class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      language: 'Hun',
      sideDrawerOpen: false
    }
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  changeLanguage = (language) => {
    this.setState({ language })
  }

  render() {
      let sideDrawer;
      let backdrop;

      if(this.state.sideDrawerOpen) {
        sideDrawer = <SideDrawer click={this.backdropClickHandler}  language={this.state.language} />;
        backdrop =  <BackDrop click={this.backdropClickHandler} />
      }

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar drawerClickHandle={this.drawerToggleClickHandler} language={this.state.language} />
          {sideDrawer}
          {backdrop}
          <Switch>
            <Route exact path="/" render={(props) => <Home changeLanguage={this.changeLanguage} language={this.state.language} {...props}/>} />
            <Route path="/bemutatkozas" render={(props) => <AboutMe  language={this.state.language} {...props}/>} />
            <Route path="/elerhetoseg" render={(props) => <Contact  language={this.state.language} {...props}/>} />
            <Route path="/galeria" component={Gallery} language={this.state.language} />
            <Route path="/etlap" render={(props) => <Menu  language={this.state.language} {...props}/>} />
            <Route path="/levesek" render={(props) => <Soup  language={this.state.language} {...props}/>} />
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
