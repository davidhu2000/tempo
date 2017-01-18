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

  renderImage(song) {
    if(this.props.showImage) {
      return <img className='song-index-image' src={ song.image_url } />;
    }
  }

  renderSong(song) {
    return (
      <div key={song.id} className='song-index-item'>

        <div className='song-index-item-info'>
          <button className='song-index-play' onClick={() => this.props.fetchCurrentSong(song.id)}>
            <span>Play</span>
            <i className='fa fa-play'></i>
          </button>

          <button className='song-index-queue' onClick={() => this.props.addToQueue(song)}>
            <span>Add To Queue</span>
            <i className='fa fa-plus'></i>
          </button>
          { this.renderImage(song) }
          <p>{ song.title }</p>
        </div>

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
