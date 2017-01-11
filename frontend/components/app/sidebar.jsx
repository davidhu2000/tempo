import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='sidebar'>
        <div className='sidebar-logo'>
          <span>Logo</span>
        </div>

        <div className='sidebar-menu'>
          <div className='sidebar-browse'>
            <span>Browse</span>
            <span>Search</span>
          </div>

          <div className='sidebar-profile'>
            <span>User</span>
            <span>Setting</span>
            <a className='sidebar-logout' onClick={ this.props.logout }>Logout</a>
          </div>

        </div>


      </div>
    );
  }
}

export default Sidebar;
