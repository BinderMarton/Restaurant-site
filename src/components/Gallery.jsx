import React, { Component } from 'react';
import './Gallery.css';
import GalleryModal from './Gallery_modal';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: null
        }
    }
    
  

    renderImageContent = (src, index) => {
        return (
          <div onClick={(e) => this.openModal(e, index)}>
            <img src={src} alt="pic" key={src} />
          </div>
        ) 
      }
      openModal = (e, index) => {
        this.setState ({ currentIndex: index });
      }
      closeModal = (e) => {
        if (e !== undefined) {
          e.preventDefault();
        }
        this.setState ({ currentIndex: null });
      }
      findPrev = (e) => {
        if (e !== undefined) {
          e.preventDefault();
        }
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex -1
        }));
      }
      findNext = (e) => {
        if (e !== undefined) {
          e.preventDefault();
        }
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1
        }));
      }

    render() {
        const imageURL = [
            'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        ]
        return (
            <div className="gallery">
                 <div className="gallery-grid">
          {imageURL.map(this.renderImageContent)}
        </div>
        <GalleryModal 
          closeModal={this.closeModal} 
          findPrev={this.findPrev} 
          findNext={this.findNext} 
          hasPrev={this.state.currentIndex > 0} 
          hasNext={this.state.currentIndex + 1 < imageURL.length} 
          src={imageURL[this.state.currentIndex]} 
        />
            </div>
        );
    }
}

export default Gallery;