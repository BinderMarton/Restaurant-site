import React, { Component} from 'react';
import FacebookProvider, { Page } from 'react-facebook';
 
class FacebookPage extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Page href="https://www.facebook.com" tabs="timeline" />
      </FacebookProvider>    
    );
  }
}

export default FacebookPage;
