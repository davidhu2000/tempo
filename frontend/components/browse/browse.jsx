import React from 'react';

class Browse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="browse">
        <h1>Artists</h1>
        <h1>Albums</h1>
        <h1>Songs</h1>
        <h1>Playlists</h1>
      </div>
    );
  }
}

export default Browse;
