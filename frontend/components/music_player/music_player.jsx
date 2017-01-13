import React from 'react';
import Sound from 'react-sound';

import Player from './elements/player';
import Progress from './elements/progress';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSongPlaying = this.handleSongPlaying.bind(this);
    this.handleSongFinished = this.handleSongFinished.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);

    this.state = {
      track: { url: '', title: '', image_url: '' },
      playStatus: Sound.status.STOPPED,
      elpased: '00:00',
      total: '00:00',
      position: 0,
      playFromPosition: 0
    };
  }

  formatMilliseconds(milliseconds) {
    let hours = Math.floor(milliseconds / 3600000);
    milliseconds = milliseconds % 3600000;

    let minutes = Math.floor(milliseconds / 60000);
    milliseconds = milliseconds % 60000;

    let seconds = Math.floor(milliseconds / 1000);

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  // TODO: update playFromPosition for forward and backward
  handleSongPlaying(audio) {
    this.setState({
      elapsed: this.formatMilliseconds(audio.position),
      total: this.formatMilliseconds(audio.duration),
      position: audio.position / audio.duration
    });
  }

  handleSongFinished() {
    // TODO: find next song in queue or hide music player if no song in queue
  }

  togglePlay() {
    if(this.state.playStatus === Sound.status.PLAYING) {
      this.setState({ playStatus: Sound.status.PAUSED });
    } else {
      this.setState({ playStatus: Sound.status.PLAYING });
    }
  }

  // TODO: Fix forward and backward
  forward() {
    this.setState({
      playFromPosition: this.state.position + 1000*10
    });
  }

  backward() {
    this.setState({
      playFromPosition: this.state.position - 1000*10
    });
  }

  render() {
    return (
      <div className='music-player'>

        <Progress
          position={this.state.position}
          elapsed={this.state.elapsed}
          total={this.state.total} />

        <Player
          togglePlay={this.togglePlay}
          playStatus={this.state.playStatus}
          forward={this.forward}
          backward={this.backward}
          currentSong={this.props.currentSong} />

        <Sound
          url={this.props.currentSong.song_url}
          playStatus={this.state.playStatus}
          onPlaying={this.handleSongPlaying}
          playFromPosition={this.state.playFromPosition}
          onFinishedPlaying={this.handleSongFinished} />

      </div>
    );
  }
}

export default MusicPlayer;
