import React from 'react';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);

    if(props.formType === 'edit') {

      this.state = {
        id: props.playlist.id,
        title: props.playlist.title,
        description: props.playlist.description,
        image_url: props.playlist.image_url
      };
      this.buttonVal = 'Update playlist';
      this.formAction = this.props.updatePlaylist;

    } else {

      this.state = {
        title: '',
        description: '',
        image_url: ''
      };
      this.buttonVal = 'Create a playlist';
      this.formAction = this.props.createPlaylist;
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.formAction(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit } className='playlist-form'>
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

          <input type='submit' value={ this.buttonVal } className='form-button' ></input>

        </form>
      </div>
    );
  }
}

export default PlaylistForm;
