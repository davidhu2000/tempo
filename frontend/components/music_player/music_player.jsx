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
    this.formatTimeToMilliseconds = this.formatTimeToMilliseconds.bind(this);

    this.state = {
      track: { song_url: '', title: '', image_url: '' },
      playStatus: Sound.status.PLAYING,
      elapsed: '00:00',
      total: '00:00',
      position: 0,
      playFromPosition: 0,
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

  formatTimeToMilliseconds(elapsed) {
    let timeArr = elapsed.split(':').reverse();
    let secondsArr = [1, 60, 3600];

    let milliseconds = 0;

    timeArr.forEach( (el, idx) => {
      milliseconds += parseInt(el) * secondsArr[idx];
    });

    return milliseconds * 1000;
  }

  // TODO: update playFromPosition for forward and backward
  handleSongPlaying(audio) {
    // console.log(audio.position);
    // console.log(this.formatMilliseconds(audio.position));
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
    console.log('hit forward');
    console.log(this.state.elapsed);
    console.log(this.formatTimeToMilliseconds(this.state.elapsed));
    console.log(this.formatTimeToMilliseconds(this.state.elapsed) + 1000*10);
    this.setState({
      playFromPosition: 100000
    });
  }

  backward() {
    this.setState({
      playFromPosition: this.state.playFromPosition -= 1000*10
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
