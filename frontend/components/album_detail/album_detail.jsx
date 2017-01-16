import React from 'react';

class AlbumDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId);
  }

  renderSong(song) {
    return (
      <li key={song.id}>
        <button className='album-detail-play' onClick={() => this.props.fetchCurrentSong(song.id)}>
          <i className='fa fa-play'></i>
        </button>
        <button className='album-detail-queue' onClick={() => this.props.addToQueue(song)}>
          <i className='fa fa-plus'></i>
        </button>
        { song.title }
      </li>
    );
  }

  renderSongList() {
    return (
      <ul className='album-detail-songs'>
        { this.props.songs.map( song => this.renderSong(song) ) }
      </ul>
    );
  }

  // TODO: Add artist image and name
  render() {
    return (
      <div className='album-detail'>

        <div className='album-detail-info'>
          <div className='album-detail-image'>
            <img src={ this.props.album.image_url } />
          </div>
          <div className='album-detail-title'>
            <span>{ this.props.album.title }</span>
          </div>
        </div>

        <div className='album-detail-song-list'>
          { this.renderSongList() }
        </div>
      </div>
    );
  }
}

export default AlbumDetail;
