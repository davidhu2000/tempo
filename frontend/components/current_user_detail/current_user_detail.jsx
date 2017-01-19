import React from 'react';
import PlaylistIndex from '../playlist_index/playlist_index';
import PlaylistForm from '../playlist_form/playlist_form';
import { values } from 'lodash';

class CurrentUserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  displayUserName() {
    let user = this.props.currentUser;
    if(user.first_name === '') {
      return user.username;
    } else {
      return user.first_name;
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  renderGreeting() {
    let time = new Date;
    let hour = time.getHours();

    if( hour >= 0 && hour < 12 ) {
      return 'Good morning, ';
    } else if(hour >= 12 && hour < 18) {
      return 'Good afternoon, ';
    } else {
      return 'Good evening, ';
    }
  }

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  renderForm() {
    if(this.state.showForm) {
      return (
        <PlaylistForm
          formType='new'
          toggleForm={ this.toggleForm }
          createPlaylist={this.props.createPlaylist}/>
      );
    }
  }

  // TODO: provide random song
  render() {
    // console.log(this.props);
    return (
      <div className='current-user-profile' id='current-user-profile'>
        <div className='current-user-info'>
          <div className='current-user-image'>
            <img src={ this.props.currentUser.image_url} />
          </div>
          <div className='current-user-greeting'>
            { this.renderGreeting() }
            { this.displayUserName() }
          </div>

          <button className='form-button' onClick={ this.toggleForm }>Create a playlist</button>
        </div>
        <div className='current-user-playlists'>
          <PlaylistIndex
            header={'Here are your playlists'}
            playlists={ values(this.props.user.ownPlaylists) }
            playFirstSongAndAddPlaylistToQueue={ this.props.playFirstSongAndAddPlaylistToQueue}
            fetchPlaylistToQueue={ this.props.fetchPlaylistToQueue }
            followType={'Follow'}
            playlistFollowAction={ this.props.addFollowerToPlaylist } />

        </div>

        <div className='current-user-playlists'>
          <PlaylistIndex
            header={'Here are the playlists you follow'}
            playlists={ values(this.props.user.followedPlaylists) }
            playFirstSongAndAddPlaylistToQueue={ this.props.playFirstSongAndAddPlaylistToQueue}
            fetchPlaylistToQueue={ this.props.fetchPlaylistToQueue }
            followType={'Remove'}
            playlistFollowAction={ this.props.removeFollowerFromPlaylist } />
        </div>

        { this.renderForm() }
      </div>
    );
  }
}

export default CurrentUserDetail;
