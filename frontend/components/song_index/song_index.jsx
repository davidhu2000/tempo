import React from 'react';
import { Link, withRouter } from 'react-router';
import ClassNames from 'classnames';

class Songs extends React.Component {
  constructor(props) {
    super(props);
    this.renderSong = this.renderSong.bind(this);
  }

  playPauseClass() {
    return ClassNames({
      'fa fa-play': this.props.playStatus === 'PLAYING' ? false : true,
      'fa fa-pause': this.props.playStatus === 'PLAYING' ? true : false
    });
  }


  componentDidMount() {
    if(this.props.router.location.pathname === '/browse') {
      this.props.fetchAllSongs(8);
    } else {
      this.props.fetchAllSongs(-1);
    }
  }

  renderSong(song) {
    return (
      <div key={song.id} className='song-index-item'>
        <img className='song-index-image' src={song.image_url} />
        <button className='song-index-play' onClick={() => this.props.fetchCurrentSong(song.id)}>
          <i className='fa fa-play'></i>
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className='song-index'>
        { this.props.songs.map( song => this.renderSong(song)) }
      </div>
    );
  }
}

export default withRouter(Songs);
