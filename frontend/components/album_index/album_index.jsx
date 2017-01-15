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
