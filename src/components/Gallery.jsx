import React, { Component } from 'react';
import './Gallery.css';
import GalleryModal from './Gallery_modal';
// import PropTypes from "prop-types";

// function imagesLoaded(parentNode) {
//   const imgElements = [...parentNode.querySelectorAll("img")];
//   for (let i = 0; i < imgElements.length; i += 1) {
//     const img = imgElements[i];
//     if (!img.complete) {
//       return false;
//     }
//   }
//   return true;
// }

const imageURL = [
  'https://firebasestorage.googleapis.com/v0/b/restaurantsite-e5621.appspot.com/o/gallery%2Fmenu-restaurant-vintage-table.jpg?alt=media&token=a2609215-ae2d-4d43-bd47-ee8e89391c83',
  'https://firebasestorage.googleapis.com/v0/b/restaurantsite-e5621.appspot.com/o/gallery%2Fpexels-photo-1036857.jpeg?alt=media&token=f9c1e003-c1a3-4fc9-8f1a-33fdf50930a8',
  'https://firebasestorage.googleapis.com/v0/b/restaurantsite-e5621.appspot.com/o/gallery%2Fpexels-photo-1267320.jpeg?alt=media&token=391587bc-c5db-4f5f-b2a0-c6fa1d6e4e43',
  'https://firebasestorage.googleapis.com/v0/b/restaurantsite-e5621.appspot.com/o/gallery%2Fpexels-photo-262978.jpeg?alt=media&token=3b39cedb-d0f0-417f-89a8-3a7abf450df9',
  'https://firebasestorage.googleapis.com/v0/b/restaurantsite-e5621.appspot.com/o/gallery%2Fpexels-photo-370984.jpeg?alt=media&token=b6b7a264-6791-4eb5-bf05-62a56a8aab7b',
  'https://firebasestorage.googleapis.com/v0/b/restaurantsite-e5621.appspot.com/o/gallery%2Fpexels-photo-724216.jpeg?alt=media&token=1332411d-3c87-4277-98fd-590c93b9a3a1',
  'https://firebasestorage.googleapis.com/v0/b/restaurantsite-e5621.appspot.com/o/gallery%2Fpexels-photo-776538.jpeg?alt=media&token=9d69e8aa-abaf-405f-95db-f6c9abb1e12a'
]

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: null,
      loading: true
    }
  }

  imagesLoaded = (parentNode) => {
    const imgElements = parentNode.querySelectorAll("img");
    for (let i = 0; i < imgElements.length; i += 1) {
      const img = imgElements[i];
      if (!img.complete) {
        return false;
      }
    }
    return true;
  }

  handleImageChange = () => {
    this.setState({
      loading: !this.imagesLoaded(this.galleryElement)
    });
  };

  renderSpinner = () => {
    if (!this.state.loading) {
      return null;
    }
    return <span className="spinner" />;
  }


  renderImageContent = (src, index) => {
    return (
      <div key={index} onClick={(e) => this.openModal(e, index)}>
        <img src={src} alt="pic" onLoad={this.handleImageChange}
          onError={this.handleImageChange} />
      </div>
    )
  }
  openModal = (e, index) => {
    this.setState({ currentIndex: index });
  }
  closeModal = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }
  findPrev = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
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

    const images = imageURL.map(this.renderImageContent)

    if (this.state.loading) {
      return (
        <div  ref={element => this.galleryElement = element}>
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          <div style={{display: 'none'}}>{images}</div>
        </div>
      )
    } else {
      return (
        <div className="width-container">
          <div className="gallery" ref={element => {
            this.galleryElement = element;
          }}>
            {this.renderSpinner()}
            <div className="gallery-grid">
              {images}
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
        </div>

      );
    }
  }
}

// Gallery.propTypes = {
//   imageURL: PropTypes.arrayOf(PropTypes.string).isRequired
// };

export default Gallery;