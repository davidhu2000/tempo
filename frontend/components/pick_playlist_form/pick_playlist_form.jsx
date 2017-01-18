import React from 'react';

class PickPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song_id: props.songId,
      playlist_id: '',
      showForm: true
    };

    this.renderSelection = this.renderSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPlaylists({ ownerId: this.props.ownerId });
  }

  renderSelection() {
    if(this.props.playlists) {
      let playlists = this.props.playlists;

      return (
        <select onChange={ this.handleChange }>
          <option value='--select a playlist--' disabled selected>{'--select a playlist--'}</option>
          { playlists.map( (pl, idx) => <option key={idx} value={pl.id}>{pl.title}</option> )}
        </select>
      );
    }
  }

  handleChange(e) {
    this.setState({
      playlist_id: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      showForm: false
    });

    this.props.addSongToPlaylist(this.state);
  }

  render() {
    // debugger;
    if(this.state.showForm) {
      return (
        <div>
          <form onSubmit={ this.handleSubmit } className='playlist-form'>
            { this.renderSelection() }

            <input type='submit' value={ this.buttonVal } className='form-button' ></input>

          </form>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default PickPlaylistForm;
