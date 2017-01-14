import React from 'react';
import { Link } from 'react-router';

class Songs extends React.Component {
  constructor(props) {
    super(props);
    this.renderSong = this.renderSong.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllSongs();
  }

  renderSong(song) {
    return (
      <div key={song.id} className='song-index-item'>
        <img className='song-index-image' src={song.image_url} />
        <button className='song-index-play' onClick={() => this.props.fetchCurrentSong(song.id)}>
          <i className='fa fa-play'></i>
        </button>
        <h4 className='song-index-title'>{ song.title }</h4>
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

export default Songs;
