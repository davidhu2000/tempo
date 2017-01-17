import React from 'react';
import { Link, withRouter } from 'react-router';

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPlaylists(this.props.filter);
  }

  renderPlaylist(playlist) {
    return (
      <div key={playlist.id} className='playlist-index-item'>

        <button className='playlist-index-play' onClick={() => this.props.playFirstSongAndAddPlaylistToQueue(playlist.id) }>
          <i className='fa fa-play'></i>
        </button>

        <button className='playlist-index-queue' onClick={() => this.props.fetchPlaylistToQueue(playlist.id)}>
          <i className='fa fa-plus'></i>
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

  render() {
    return (
      <div className='playlist-index'>
        { this.props.playlists.map( playlist => this.renderPlaylist(playlist) )}
      </div>
    );
  }
}

export default withRouter(PlaylistIndex);
