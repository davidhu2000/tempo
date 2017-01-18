import React from 'react';
import { Link, withRouter } from 'react-router';

class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllArtists();
  }

  renderArtist(artist) {
    return (
      <div key={artist.id} className='artist-index-item'>
        <Link to={`/artists/${artist.id}`}>
          <img
            className='artist-index-image'
            src={artist.image_url} />
          <span>{artist.name}</span>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className='artist-index'>
        { this.props.artists.map( artist => this.renderArtist(artist) )}
      </div>
    );
  }
}

export default ArtistIndex;
