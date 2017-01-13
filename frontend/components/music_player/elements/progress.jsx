import React from 'react';

class Progress extends React.Component {

  getPercent() {
    return `${this.props.position * 100}%`;
  }

  render() {
    return (
      <div className="progress">
        <div className='progressbar'>
          <div className='current-position' style={{width: this.getPercent()}}>

          </div>
        </div>


      </div>
    );
  }
}

export default Progress;

// <progress value={this.props.position} max='1'></progress>


// <span className='progress-label'>
//   { this.props.total }
// </span>
//
// <span className="progress-label">
//   { this.props.elapsed }
// </span>
