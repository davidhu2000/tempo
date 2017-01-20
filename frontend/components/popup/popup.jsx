import React from 'react';

class Popup extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.removePopup();
    }, 3000);
  }

  render() {
    return (
      <div className='popup'>
        { this.props.popup.message }
      </div>
    );
  }
}

export default Popup;
