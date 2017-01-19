import React from 'react';
import Autocomplete from 'react-autocomplete';
import { Link } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };

    this.handleChange = this.handleChange.bind(this);
    this.showSongs = this.showSongs.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
    if(e.target.value.length > 0) {
      this.props.fetchSearchSongs(e.target.value);
      this.props.fetchSearchAlbums(e.target.value);
      this.props.fetchSearchArtists(e.target.value);
      this.props.fetchSearchPlaylists(e.target.value);
    } else {
      this.props.clearSearch();
    }
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

  showAlbums() {
    if(this.props.albums[0]) {
      return (
        <div className='search-list'>
          <h2>Albums</h2>
          { this.props.albums.map( album => <Link to={ `/albums/${album.id}` } key={Math.random()}>{ album.title }</Link> )}
        </div>
      );
    }
  }

  showArtists() {
    if(this.props.artists[0]) {
      return (
        <div className='search-list'>
          <h2>Artists</h2>
          { this.props.artists.map( artist => <Link to={ `/artists/${artist.id}` } key={Math.random()}>{ artist.name }</Link> )}
        </div>
      );
    }
  }

  showPlaylists() {
    if(this.props.playlists[0]) {
      return (
        <div className='search-list'>
          <h2>Playlists</h2>
          { this.props.playlists.map( playlist => <Link to={ `/playlists/${playlist.id}` } key={Math.random()}>{ playlist.title }</Link> )}
        </div>
      );
    }
  }

  render() {
    return (
      <div className='search'>
        <div className='search-input'>
          <input
            type='text'
            onChange={ this.handleChange }
            value={ this.state.query }></input>
        </div>

        { this.showSongs() }
        { this.showAlbums() }
        { this.showArtists() }
        { this.showPlaylists() }
      </div>
    );
  }
}

export default Search;
