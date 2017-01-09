# API Endpoints

## HTML API

#### Root
- `GET /`
  - initial request for html

## JSON API

#### Session
- `POST   /api/session`
  - login
- `DELETE /api/session`
  - logout

#### Users

- `GET    /api/users/:userId`
  - view profile of a user
- `POST   /api/users`
  - create user
- `PATCH  /api/users/:userId`
  - update profile
- `DELETE /api/users`
  - delete account

#### Songs
- `GET    /api/songs`
  - view list of all songs, limit number showing until user requests more
- `GET    /api/songs/:songId`
  - show detail page of one song

#### Artists
- `GET    /api/artists`
  - view list of all artists, limit number showing until user requests more
- `GET    /api/artists/:artistId`
  - show detail page of one artist.

#### Albums
- `GET    /api/albums`
  - view list of all albums, limit number showing until user requests more
- `GET    /api/albums/:albumId`
  - view detail page of one album

#### Playlists
- `GET    /api/playlists/:playlistId`
  - view detail page of one playlist
- `POST   /api/playlists`
  - create new playlist
- `PATCH  /api/playlists/:playlistId`
  - update a playlist
- `DELETE /api/playlists/:playlistId`
  - delete a playlist

#### Search
- `GET    /api/search`
  - return song, album, artist, and playlist that match the query. 
