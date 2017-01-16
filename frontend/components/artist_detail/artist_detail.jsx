import React from 'react';

class ArtistDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  renderSong(song) {
    return (
      <div key={song.id} className='artist-detail-album-song'>
        <button className='album-detail-play' onClick={() => this.props.fetchCurrentSong(song.id)}>
          <i className='fa fa-play'></i>
        </button>
        <button className='album-detail-queue' onClick={() => this.props.addToQueue(song)}>
          <i className='fa fa-plus'></i>
        </button>
        { song.title }
      </div>
    );
  }

  renderAlbum(album) {
    return (
      <div className='artist-detail-album' key={album.id}>

        <div className='artist-detail-album-info'>
          <div className='artist-detail-album-image'>
            <img src={ album.image_url } />
          </div>
          <div className='artist-detail-album-title'>
            { album.title }
          </div>
        </div>

        <div className='artist-detail-album-songs'>
          { album.songs.map( song => this.renderSong(song) ) }
        </div>
      </div>
    );
  }

  renderAlbumList() {
    return (
      <div className='artist-detail-album-list'>
        { this.props.albums.map( album => this.renderAlbum(album) ) }
      </div>
    );
  }

  render() {
    return (
      <div className='artist-detail'>
        <div className='artist-detail-info'>
          <div className='artist-detail-image'>
            <img src={ this.props.artist.image_url } />
          </div>
          <div className='artist-detail-name'>
            <span>{ this.props.artist.name }</span>
          </div>
        </div>

        { this.renderAlbumList() }
      </div>
    );
  }
}

export default ArtistDetail;
