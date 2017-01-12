import React from 'react';

import CurrentSongContainer from '../current_song/current_song_container';

class Browse extends React.Component {

  render() {
    return (
      <div className="browse">
        <h1>Browse</h1>
        <CurrentSongContainer />
      </div>
    );
  }
}

export default Browse;
