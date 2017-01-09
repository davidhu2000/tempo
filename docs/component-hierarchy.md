# Component Hierarchy

### SplashContainer
- Splash
  - Navbar

### SessionFormContainer
- SessionForm
  - render login / signup based on route

### SidebarContainer
- Sidebar

### BrowseContainer
- Browse
  - SongIndexContainer
  - AlbumIndexContainer
  - ArtistIndexContainer
  - PlaylistIndexContainer

### QueueContainer
- Queue
  - CurrentSong
  - QueuedSongs

### UserViewContainer
- UserView

### AlbumViewContainer
- AlbumView

### AlbumIndexContainer
- AlbumIndex
  - AlbumIndexItem

### SongViewContainer
- SongView

### SongIndexContainer
- SongIndex
  - SongIndexItem

### PlaylistViewContainer
- PlaylistView

### PlaylistIndexContainer
- PlaylistIndex
  - PlaylistItem

Path	                    | Component
--------------------------|-----------------------------
`/` (not logged in)       | `SplashContainer`
`/` (logged in)           | `BrowseContainer`
`/login`                  | `SessionFormContainer`
`/signup`                 | `SessionFormContainer`
`/albums`                 | `AlbumIndexContainer`
`/album/:albumId`         | `AlbumViewContainer`
`/artists`                | `ArtistIndexContainer`
`/artists/:artistId`      | `ArtistViewContainer`
`/playlists`              | `PlaylistIndexContainer`
`/playlists/:playlistId`  | `PlaylistViewContainer`
`/songs`                  | `SongIndexContainer`
`/songs/:songId`          | `SongViewContainer`
`/profile`                | `UserViewContainer`
