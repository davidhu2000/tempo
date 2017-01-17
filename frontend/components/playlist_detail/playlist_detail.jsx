import React from 'react';
import PlaylistModal from '../playlist_modal/playlist_modal';

class PlaylistDetail extends React.Component {
  constructor(props) {
    super(props);
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
          <PlaylistModal
            playlist={ this.props.playlist }
            formType='edit'
            updatePlaylist={ this.props.updatePlaylist }/>
        </div>
      );
    } else {
      return <div></div>;
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
