import React, { Component } from 'react';


class GalleryModal extends Component {

    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnMount() {
        document.body.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown = (e) => {
        if (e.keyCode === 27)
            this.props.closeModal();
        if (e.keyCode === 37 && this.props.hasPrev)
            this.props.findPrev();
        if (e.keyCode === 39 && this.props.hasNext)
            this.props.findNext();
    }
    render() {
        const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
        if (!src) {
            return null;
        }
        return (
            <div>
                <div className="modal-overlay" onClick={closeModal}></div>
                <div className="modal">
                    <div className='modal-body'>
                        <a href="#close" className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
                        {hasPrev && <a href="#prev" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
                        {hasNext && <a href="#next" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
                        <img src={src} alt={'Pic'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default GalleryModal;