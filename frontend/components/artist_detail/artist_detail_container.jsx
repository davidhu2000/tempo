import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import ArtistDetail from './artist_detail.jsx';

import { fetchArtist } from '../../actions/artists_actions';
import { fetchCurrentSong } from '../../actions/songs_actions';
import { addToQueue} from '../../actions/queue_actions';

const mapStateToProps = ({ artists }, ownProps) => ({
  artist: artists.detail,
  artistId: ownProps.params.artistId,
  albums: artists.detail.albums || []
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: id => dispatch(fetchArtist(id)),
  fetchCurrentSong: id => dispatch(fetchCurrentSong(id)),
  addToQueue: song => dispatch(addToQueue(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistDetail);
