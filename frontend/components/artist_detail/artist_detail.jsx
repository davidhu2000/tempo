import React from 'react';

class ArtistDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  renderAlbum(album) {
    return (
      <li key={album.id}>
        { album.title }
      </li>
    );
  }

  renderAlbumList() {
    return (
      <ul className='artist-detail-albums'>
        { this.props.albums.map( album => this.renderAlbum(album) ) }
      </ul>
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

        <div className='artist-detail-album-list'>
          { this.renderAlbumList() }
        </div>
      </div>
    );
  }
}

export default ArtistDetail;
