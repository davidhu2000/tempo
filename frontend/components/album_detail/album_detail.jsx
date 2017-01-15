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
        <i className='fa fa-plus'></i>
        { song.title }
      </li>
    );
  }

  renderSongList() {
    return (
      <ul className='album-detail-songs'>
        { this.props.songs.map( (song, idx) => this.renderSong(song) ) }
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div className='album-detail-title'>{ this.props.album.title }</div>
        <img className='album-detail-image' src={ this.props.album.image_url } />
        { this.renderSongList() }
      </div>
    );
  }
}

export default AlbumDetail;
