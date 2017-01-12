import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='sidebar'>
        <div className='sidebar-logo'>
          <Link to='/'>Logo</Link>
        </div>

        <div className='sidebar-browse'>
          <Link to='/search'>
            <img src='http://res.cloudinary.com/davidhu2000/image/upload/v1484176608/search_icon_czswj4.svg'/>
            <span>Search</span>
          </Link>

          <Link to='/browse'>
            <img src='http://res.cloudinary.com/davidhu2000/image/upload/v1484176608/browse_icon_b1vtyu.svg'/>
            <span>Browse</span>
          </Link>
        </div>

        <div className='sidebar-menu'>
          <div className='sidebar-profile'>
            <Link to='/'>
              <img src='https://image.shutterstock.com/display_pic_with_logo/1142849/149083895/stock-vector-male-avatar-profile-picture-vector-149083895.jpg'/>
              <span>Username</span>
            </Link>
            <button className='sidebar-logout' onClick={ this.props.logout }>Logout</button>
          </div>

        </div>


      </div>
    );
  }
}

export default Sidebar;
