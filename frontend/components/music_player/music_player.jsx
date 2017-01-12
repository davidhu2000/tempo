import React from 'react';

import Player from './elements/player';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Player />
      </div>
    );
  }
}

export default MusicPlayer;
