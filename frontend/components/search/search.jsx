import React from 'react';
import Autocomplete from 'react-autocomplete';
import { Link } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.showSongs = this.showSongs.bind(this);
  }

  handleChange(e) {
    this.props.fetchSearchSongs(e.target.value);
  }

  showSongs() {
    if(this.props.songs[0]) {
      return (
        <div className='search-list'>
          <h2>Songs</h2>
          { this.props.songs.map( song => <Link to={ `/albums/${song.album_id}` } key={Math.random()}>{ song.title }</Link> )}
        </div>
      );
    }
  }

  render() {
    return (
      <div className='search'>
        <input
          type='text'
          onChange={ this.handleChange } ></input>
        <i className='fa fa-search'></i>

        { this.showSongs() }
      </div>
    );
  }
}

export default Search;
