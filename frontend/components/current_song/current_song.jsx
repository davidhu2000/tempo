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
        <MusicPlayer currentSong={ this.props.currentSong } />
      </div>
    );
  }
}

export default withRouter(CurrentSong);
