import React from 'react';
import { Link } from 'react-router';

import ArtistIndexContainer from '../artist_index/artist_index_container';
import SongIndexContainer from '../song_index/song_index_container';
import AlbumIndexContainer from '../album_index/album_index_container';
import PlaylistIndexContainer from '../playlist_index/playlist_index_container';

class Browse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='browse'>
        <nav className='browse-navbar'>
          <Link to='/artists'>Artists</Link>
          <Link to='/albums'>Albums</Link>
          <Link to='/playlists'>Playlists</Link>
        </nav>

        <div className='browse-main'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Browse;
