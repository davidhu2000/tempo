import React from 'react';
import { withRouter } from 'react-router';

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
        <img className='artist-index-image'
             src={artist.image_url} />
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
