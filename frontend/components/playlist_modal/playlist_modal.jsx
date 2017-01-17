import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class PlaylistModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      title: '',
      description: '',
      image_url: ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    // e.preventDefault();
    let newState = {};
    newState['title'] = this.state.title;
    newState['description'] = this.state.description;
    this.closeModal();
    this.props.createPlaylist(newState);
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
    this.handleSubmit();
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Create a Playlist</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Playlist Modal" >

          <h2 className='modal-title'>Let's create a playlist.</h2>
          <button onClick={this.closeModal}>close</button>

          <form onSubmit={() => { this.props.createPlaylist(this.state); this.closeModal();} } className='modal-form'>
            <label htmlFor='title' className='form-label'>
              { "Title" }
            </label>

            <input
              name='title'
              value={ this.state.title }
              onChange={ this.update('title') }
              className='form-input'></input>

            <label htmlFor='description' className='form-label'>
              { "Description" }
            </label>

            <input
              name='description'
              value={ this.state.description }
              onChange={ this.update('description') }
              className='form-input'></input>

            <label htmlFor='image_url' className='form-label'>
              { "Image URL" }
            </label>

            <input
              name='image_url'
              value={ this.state.image_url }
              onChange={ this.update('image_url') }
              className='form-input'></input>

            <input type='submit' value='Create Playlist' className='form-button' ></input>

          </form>
        </Modal>
      </div>
    );
  }
}

export default PlaylistModal;
