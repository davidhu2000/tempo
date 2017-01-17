import React from 'react';
import PlaylistForm from '../playlist_form/playlist_form';

class PlaylistDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    };
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
  }

  renderButtons() {
    if(this.props.currentUserId === this.props.playlist.user_id) {
      return (
        <div>
          <button
            onClick={ () => this.props.deletePlaylist(this.props.playlistId)}
            className='playlist-button' >
            Delete Playlist
          </button>
          <button className='playlist-button'>Create a Playlist</button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderForm() {

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
            <span>{ this.props.playlist.title }</span>
            { this.renderButtons() }

          </div>
        </div>

        <div className='playlist-detail-song-list'>
          { this.renderSongList() }
        </div>


      </div>
    );
  }
}

export default PlaylistDetail;
