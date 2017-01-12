import React from 'react';

class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='artist-index'>
        <div className='artist'>
          <img src='http://vignette1.wikia.nocookie.net/p__/images/2/28/200px-Orville_Simpson.png/revision/latest?cb=20141026105607&path-prefix=protagonist' />
          <span>Artist Name</span>
        </div>
        <div className='artist'>
          <img src='http://vignette4.wikia.nocookie.net/simpsons/images/0/01/200px-Langdon_Alger.png/revision/latest?cb=20120815160236'/>
          <span>Artist Name</span>
        </div>
        <div className='artist'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/7/72/Wikipedia_logo_gold-200px.png' />
          <span>Artist Name</span>
        </div>
      </div>
    );
  }
}

export default ArtistIndex;
