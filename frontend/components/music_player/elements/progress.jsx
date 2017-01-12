import React from 'react';

class Progress extends React.Component {

  render() {
    return (
      <div className="progress">
        <span className="time-elapsed">
          { this.props.elapsed }
        </span>

        <progress value={this.props.position} max='1'></progress>

        <span className='time-total'>
          { this.props.total }
        </span>
      </div>
    );
  }
}

export default Progress;
