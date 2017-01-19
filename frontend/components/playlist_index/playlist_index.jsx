import React from 'react';
import { Link, withRouter } from 'react-router';

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.fetchAllPlaylists) {
      this.props.fetchAllPlaylists(this.props.filter);
    }
  }

  renderPlaylist(playlist) {
    return (
      <div key={`${playlist.id}${Math.random()}`} className='playlist-index-item'>

        <button className='playlist-index-play' onClick={() => this.props.playFirstSongAndAddPlaylistToQueue(playlist.id) }>
          <span>Play Playlist</span>
          <i className='fa fa-play'></i>
        </button>

        <button className='playlist-index-queue' onClick={() => this.props.fetchPlaylistToQueue(playlist.id)}>
          <span>Add to Queue</span>
          <i className='fa fa-plus'></i>
        </button>

        <button className='playlist-index-follow' onClick={() => this.props.addFollowerToPlaylist(playlist.id)}>
          <span>Follow Playlist</span>
          <i className='fa fa-share'></i>
        </button>

        <Link to={`playlists/${playlist.id}`}>
          <img className='playlist-index-image'
               src={playlist.image_url} />
        </Link>
        <Link to={`playlists/${playlist.id}`}>
          <h4>{ playlist.title }</h4>
        </Link>
      </div>
    );
  }

  renderHeader() {
    if (this.props.header) {
      return (
        <h1>{this.props.header}</h1>
      );
    }
  }

  render() {
    return (
      <div className='playlist-index'>
        { this.renderHeader() }
        { this.props.playlists.map( playlist => this.renderPlaylist(playlist) )}
      </div>
    );
  }
}

export default withRouter(PlaylistIndex);
