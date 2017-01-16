import React from 'react';
import { Link, withRouter } from 'react-router';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllAlbums();
  }

  renderAlbum(album) {
    return (
      <div key={album.id} className='album-index-item'>
        <Link to={`albums/${album.id}`}>
          <img className='album-index-image'
               src={album.image_url} />
        </Link>

        <button className='album-index-play-test' onClick={() => this.props.playFirstSongAndAddAlbumToQueue(album.id) }>
          <i className='fa fa-play'></i>
        </button>
        <button className='album-index-queue' onClick={() => this.props.fetchAlbumToQueue(album.id)}>
          <i className='fa fa-plus'></i>
        </button>

      </div>
    );
  }

  render() {
    return (
      <div className='album-index'>
        { this.props.albums.map( album => this.renderAlbum(album) )}
      </div>
    );
  }
}

export default withRouter(AlbumIndex);
