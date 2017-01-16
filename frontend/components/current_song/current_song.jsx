import React from 'react';
import { withRouter } from 'react-router';

import MusicPlayerContainer from '../music_player/music_player_container';

class CurrentSong extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='current-song'>
        <MusicPlayerContainer />
      </div>
    );
  }
}

export default withRouter(CurrentSong);
