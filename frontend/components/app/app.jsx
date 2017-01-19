import React from 'react';
import { withRouter } from 'react-router';

import Sidebar from './sidebar';
import SearchContainer from '../search/search_container';
import CurrentSongContainer from '../current_song/current_song_container';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showSearch: false
    };

    this.toggleSearch = this.toggleSearch.bind(this);
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

  toggleSearch(e) {
    e.preventDefault();
    this.setState({
      showSearch: !this.state.showSearch
    });
  }

  renderSearch() {
    if(this.state.showSearch) {
      return (
        <div className='search-form'>
          <SearchContainer
            toggleSearch={ this.toggleSearch }/>
        </div>
      );
    }
  }

  render() {
    if(this.props.currentUser) {

      return (
        <div className='main'>
          { this.renderSearch() }
          <div className=''>
            <Sidebar
              logout={ this.props.logout }
              toggleSearch={ this.toggleSearch }
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
