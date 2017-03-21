import React from 'react';
import ReactDOM from 'react-dom';

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
    this.clickForm = this.clickForm.bind(this);
  }

  clickForm(e) {
    let component = ReactDOM.findDOMNode(this.refs.component);

    if (e.target === component || $(component).has(e.target).length) {
        // Inside of the component.
    } else {
      this.props.toggleForm();
    }
  }

  componentWillUnmount() {
      $(document).unbind('click', this.clickForm);
  }


  componentDidMount() {
    this.props.fetchAllPlaylists({ ownerId: this.props.ownerId });
    $(document).bind('click', this.clickForm);
  }

  renderSelection() {
    if(this.props.playlists) {
      let playlists = this.props.playlists;

      return (
        <select onChange={ this.handleChange } defaultValue='initial'>
          <option value='initial' disabled>{'--select a playlist--'}</option>
          { playlists.map( (pl, idx) => <option key={`pl${idx}`} value={pl.id}>{pl.title}</option> )}
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
    if(this.state.showForm) {
      return (
        <div className='pick-playlist-parent' ref='component'>
          <form onSubmit={ this.handleSubmit } className='playlist-form pick-playlist'>
            { this.renderSelection() }

            <input type='submit' value={ this.buttonVal } className='pick-playlist-button' ></input>

          </form>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default PickPlaylistForm;
