import React from 'react';
import { Link, withRouter } from 'react-router';
import ClassNames from 'classnames';
import PickPlaylistFormContainer from '../pick_playlist_form/pick_playlist_form_container';

class Songs extends React.Component {
  constructor(props) {
    super(props);
    this.renderSong = this.renderSong.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.renderForm = this.renderForm.bind(this);

    this.state = {
      showForm: false,
      songId: null
    };
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

  toggleForm(id) {
    return e => {
      this.setState({
        songId: id,
        showForm: !this.state.showForm
      });
    };
  }

  renderForm() {
    if(this.state.showForm) {
      return (
        <PickPlaylistFormContainer
          formType='new'
          toggleForm={ this.toggleForm(this.state.songId) }
          songId={ this.state.songId } />
      );
    }
  }

  renderSong(song) {
    return (
      <div key={song.id} className='song-index-item'>

        <div className='song-index-item-info'>
          <button className='song-index-play' onClick={() => this.props.fetchCurrentSong(song.id)}>
            <span>Play Song</span>
            <i className='fa fa-play'></i>
          </button>

          <button className='song-index-queue' onClick={() => this.props.addToQueue(song)}>
            <span>Add To Queue</span>
            <i className='fa fa-plus'></i>
          </button>

          <button className='song-index-playlist' onClick={ this.toggleForm(song.id) }>
            <span>Add to playlist</span>
            <i className="fa fa-sign-in"></i>
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
        { this.renderForm() }
      </div>
    );
  }
}

export default withRouter(Songs);
