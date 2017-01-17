import React from 'react';
import PlaylistIndexContainer from '../playlist_index/playlist_index_container';

class CurrentUserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  displayUserName() {
    let user = this.props.currentUser;
    if(user.first_name === '') {
      return user.username;
    } else {
      return user.first_name;
    }
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

  // renderOnePlaylist(playlist) {
  //   return (
  //     <li key={playlist.id}>
  //       <button className='playlist-index-play' >
  //         <i className='fa fa-play'></i>
  //       </button>
  //       <button className='playlist-index-queue' >
  //         <i className='fa fa-plus'></i>
  //       </button>
  //       { playlist.title }
  //     </li>
  //   );
  // }
  //
  // renderUserPlaylists() {
  //   if(this.props.playlists) {
  //     return (
  //       <div className='current-user-playlist-list'>
  //         <h2 className='current-user-playlist-title'>
  //           Here are the playlists you created:
  //           <ul>
  //             { this.props.playlists.map( playlist => this.renderOnePlaylist(playlist) )}
  //           </ul>
  //         </h2>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div></div>
  //     );
  //   }
  // }

  // TODO: provide random song
  render() {
    return (
      <div className='current-user-profile'>
        <div className='current-user-info'>
          <div className='current-user-image'>
            <img src={ this.props.currentUser.image_url} />
          </div>
          <div className='current-user-greeting'>
            { this.renderGreeting() }
            { this.displayUserName() }
          </div>

          <div className='current-user-actions'>
            <button>Create a playlist</button>
          </div>
        </div>
        <div className='current-user-playlists'>
          <PlaylistIndexContainer filter={ {ownerId: this.props.currentUser.id} }/>
        </div>
      </div>
    );
  }
}

export default CurrentUserDetail;
