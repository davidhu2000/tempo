import React from 'react';
import PlaylistForm from '../playlist_form/playlist_form';
import SongIndex from '../song_index/song_index';

class PlaylistDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
  }

  componentWillReceiveProps(newProps){
    if(this.props.playlistId !== newProps.playlistId) {
      newProps.fetchPlaylist(newProps.playlistId);
    }
  }

  renderButtons() {
    if(this.props.currentUserId === this.props.playlist.user_id) {
      return (
        <div className='playlist-detail-buttons'>
          <button
            onClick={ () => this.props.deletePlaylist(this.props.playlistId)}
            className='playlist-detail-button' >
            Delete Playlist
          </button>
          <button className='playlist-detail-button' onClick={this.toggleForm}>Edit Playlist</button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  renderForm() {
    if(this.state.showForm) {
      return (
        <PlaylistForm
          formType='edit'
          toggleForm={ this.toggleForm }
          playlist={this.props.playlist}
          updatePlaylist={this.props.updatePlaylist} />
      );
    }
  }

  renderSong(song) {
    return (
      <li key={song.id}>
        <button className='playlist-detail-play' onClick={() => this.props.fetchCurrentSong(song.id)}>
          <i className='fa fa-play'></i>
        </button>
        <button className='playlist-detail-queue' onClick={() => this.props.addToQueue(song)}>
          <i className='fa fa-plus'></i>
        </button>
        { song.title }
      </li>
    );
  }

  renderSongList() {
    return (
      <ul className='playlist-detail-songs'>
        { this.props.songs.map( song => this.renderSong(song) ) }
      </ul>
    );
  }

  render() {
    return (
      <div className='playlist-detail'>

        <div className='playlist-detail-info'>
          <div className='playlist-detail-image'>
            <img src={ this.props.playlist.image_url } />
          </div>
          <div className='playlist-detail-title'>
            <div>
              <span>{ this.props.playlist.title }</span>
              { this.renderButtons() }
            </div>
            <button className='playlist-detail-play-playlist-button' onClick={() => this.props.playFirstSongAndAddPlaylistToQueue(this.props.playlistId)}>
              Play Playlist
            </button>
          </div>

        </div>





        <div className='playlist-detail-song-list'>
          <SongIndex
            showImage={ false }
            songs={ this.props.songs }
            addToQueue={ this.props.addToQueue }
            fetchCurrentSong={ this.props.fetchCurrentSong } />
        </div>

        { this.renderForm() }
      </div>
    );
  }
}

export default PlaylistDetail;
