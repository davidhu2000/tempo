import React from 'react';

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

          <div className='current-user-playlist-list'>

          </div>
        </div>

      </div>
    );
  }
}

export default CurrentUserDetail;
