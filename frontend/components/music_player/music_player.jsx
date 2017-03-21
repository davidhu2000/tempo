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
    this.formatMilliseconds = this.formatMilliseconds.bind(this);

    this.state = {
      track: { song_url: '', title: '', image_url: '' },
      playStatus: Sound.status.PLAYING,
      elapsed: '00:00',
      total: '00:00',
      position: 0,
      playFromPosition: 0,
      positionInMilliseconds: 0,
      playerShow: 'player-popup'
    };
  }

  formatMilliseconds(milliseconds) {
    let hours = Math.floor(milliseconds / 3600000);
    milliseconds = milliseconds % 3600000;

    let minutes = Math.floor(milliseconds / 60000);
    milliseconds = milliseconds % 60000;

    let seconds = Math.floor(milliseconds / 1000);

    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  handleSongPlaying(audio) {
    this.setState({
      elapsed: this.formatMilliseconds(audio.position),
      total: this.formatMilliseconds(audio.duration),
      position: audio.position / audio.duration,
      positionInMilliseconds: audio.position
    });
  }

  handleSongFinished() {
    if(this.props.queue.length === 0) {
      this.props.clearCurrentSong();
    } else {
      this.props.receiveCurrentSong(this.props.queue[0]);
      this.props.removeFirstSong();
    }
  }

  togglePlay() {
    if(this.state.playStatus === Sound.status.PLAYING) {
      this.setState({ playStatus: Sound.status.PAUSED });
    } else {
      this.setState({ playStatus: Sound.status.PLAYING });
    }
  }

  forward() {
    this.setState({
      playFromPosition: this.state.positionInMilliseconds + 10000
    });
  }

  backward() {
    this.setState({
      playFromPosition: this.state.positionInMilliseconds - 10000
    });
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({ playerShow: 'player-popdown' });
    }, 3000);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.currentSong.song_url !== this.props.currentSong.song_url) {
      this.setState({
        playerShow: 'player-popup',
        playStatus: Sound.status.PLAYING
       });
      setTimeout( () => {
        this.setState({ playerShow: 'player-popdown' });
      }, 3000);
    }
  }

  render() {
    return (
      <div className='music-player' id={this.state.playerShow}>

        <Progress
          position={this.state.position}
          elapsed={this.state.elapsed}
          total={this.state.total} />

        <Player
          togglePlay={this.togglePlay}
          playStatus={this.state.playStatus}
          forward={this.forward}
          backward={this.backward}
          shuffleQueue={this.props.shuffleQueue}
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
