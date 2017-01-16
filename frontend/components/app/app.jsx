import React from 'react';
import { withRouter } from 'react-router';

import Sidebar from './sidebar';
import CurrentSongContainer from '../current_song/current_song_container';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this._redirectUnlessLoggedIn();
  }

  componentDidUpdate() {
    this._redirectUnlessLoggedIn();
  }

  _redirectUnlessLoggedIn() {
    if(!this.props.loggedIn) {
      this.props.router.replace('/login');
    }
  }

  renderCurrentSong() {
    return (
      <div className='current-song'>
        <CurrentSongContainer />
      </div>
    );
  }

  render() {
    if(this.props.currentUser) {

      return (
        <div className='main'>
          <div className=''>
            <Sidebar
              logout={ this.props.logout }
              currentUser={this.props.currentUser} />
          </div>
          <div className=''>
            { this.props.children }
          </div>
          { this.props.currentSong.song_url ? this.renderCurrentSong() : <div></div> }

        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(App);
