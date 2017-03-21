import React from 'react';
import { Link } from 'react-router';

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
