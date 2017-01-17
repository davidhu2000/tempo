import React from 'react';
import PlaylistIndexContainer from '../playlist_index/playlist_index_container';
import PlaylistForm from '../playlist_form/playlist_form';

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
        <PlaylistForm formType='new' createPlaylist={this.props.createPlaylist}/>
      );
    }
  }

  // TODO: provide random song
  render() {
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
          <PlaylistIndexContainer filter={ {ownerId: this.props.currentUser.id} }/>
        </div>

        { this.renderForm() }
      </div>
    );
  }
}

export default CurrentUserDetail;
