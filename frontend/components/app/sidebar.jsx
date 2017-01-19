import React from 'react';
import { Link, hashHistory } from 'react-router';

class Sidebar extends React.Component {
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

  render() {
    return (
      <div className='sidebar'>
        <div className='sidebar-logo'>
          <Link to='/'>
            <img className='sidebar-logo-icon' src="https://res.cloudinary.com/davidhu2000/image/upload/v1484198898/logo_hrwwkv.png" />
          </Link>
        </div>

        <div className='sidebar-browse'>
          <Link to={hashHistory.pathname} onClick={this.props.toggleSearch}>
            <img src='http://res.cloudinary.com/davidhu2000/image/upload/v1484176608/search_icon_czswj4.svg'/>
            <span>Search</span>
          </Link>

          <Link to='/artists'>
            <img src='http://res.cloudinary.com/davidhu2000/image/upload/v1484176608/browse_icon_b1vtyu.svg'/>
            <span>Browse</span>
          </Link>
        </div>

        <div className='sidebar-menu'>
          <div className='sidebar-profile'>
            <Link to='/profile'>
              <img src={ this.props.currentUser.image_url }/>
              <span>{ this.displayUserName() }</span>
            </Link>
            <button className='sidebar-logout' onClick={ this.props.logout }>Logout</button>
          </div>

        </div>


      </div>
    );
  }
}

export default Sidebar;
