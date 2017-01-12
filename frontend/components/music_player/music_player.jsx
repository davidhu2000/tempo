import React from 'react';
import Sound from 'react-sound';

import Player from './elements/player';
import Progress from './elements/progress';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSongPlaying = this.handleSongPlaying.bind(this);
    this.handleSongFinished = this.handleSongFinished.bind(this);

    this.state = {
      track: { url: '', title: '', image_url: '' },
      playStatus: Sound.status.STOPPED
    };
  }

  handleSongPlaying() {

  }

  handleSongFinished() {

  }

  render() {
    return (
      <div className='music-player'>
        <Player />
        <Progress position={'0.3'} elapsed={'0:00'} total={'0:40'} />
        <Sound
          url={'https://res.cloudinary.com/davidhu2000/video/upload/v1484244565/Broke_For_Free_-_01_-_Night_Owl_ktzlla.mp3'}
          playStatus={this.state.playStatus}
          onPlaying={this.handleSongPlaying}
          playFromPosition={this.state.playFromPosition}
          onFinishedPlaying={this.handleSongFinished} />
      </div>
    );
  }
}

export default MusicPlayer;
