import React from 'react';
import { withRouter } from 'react-router';

import MusicPlayer from '../music_player/music_player';

class CurrentSong extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='current-song'>
        <h1>Song Name</h1>
        <MusicPlayer />
      </div>
    );
  }
}

export default withRouter(CurrentSong);
