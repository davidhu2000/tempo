import React from 'react';
import { withRouter } from 'react-router';

import MusicPlayer from '../music_player';

class CurrentSong extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='current-song'>
        <MusicPlayer />
      </div>
    );
  }
}

export default withRouter(CurrentSong);
