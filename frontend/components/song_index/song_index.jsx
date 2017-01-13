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
      <li key={song.id}>
        { song.title }
        <button onClick={() => this.props.fetchCurrentSong(song.id)}>
          <i className='fa fa-play'></i>
        </button>
      </li>
    );
  }

  render() {
    return (
      <div className='song-index'>
        <ul>
          { this.props.songs.map( song => this.renderSong(song)) }
        </ul>
      </div>
    );
  }
}

export default Songs;
