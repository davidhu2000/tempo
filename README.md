# Tempo

[Heroku link](https://tempo.herokuapp.com/)

[Trello link](https://trello.com/b/qC1AQZq5/tempo)

## Minimum Viable Product

Tempo is a music streaming web application inspired by Spotify and is built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [x] New account creation, login, and guest login
- [ ] Song playing while browsing
- [ ] Maintain song queue
- [ ] Subscribe to playlists
- [ ] CRUD playlist
- [ ] Hosting on Heroku
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs

- [View Wireframes](docs/wireframes)
- [React Components](docs/component-hierarchy.md)
- [API endpoints](docs/api-endpoints.md)
- [DB schema](docs/schema.md)
- [Sample State](docs/sample-state.md)

## Implementation Timeline

### Phase 1: Backend setup and Front End Authentication (2 days)

**Tasks:**
- [x] Set up database,
- [x] Create seed data
- [x] User creation and deletion
- [x] Back-end authentication
- [x] Front-end authentication
- [x] Add styling to form
- [x] Create Splash page

&#10004; Objective: Functioning rails project with front-end Authentication

### Phase 2: Song component (2 days)

**Tasks:**
- [ ] Set up song model and controller
- [ ] Set up song component, reducer, and actions
- [ ] Add styling song component

Objective: A song can be played while the user is browsing.

### Phase 3: Allow songs to be added to queue (2 days)

**Tasks:**
- [ ] create queue front-end
- [ ] add ability to add songs, albums, and playlists into queue.

Objective: User can add songs into queue to be played after current song.

### Phase 4: Playlist CRUD (2 days)

**Tasks:**
- [ ] Set up playlist backend
- [ ] Set up playlist component, reducer, and actions
- [ ] Add styling to playlist index and show page

Objective: User can create, view, update, and delete custom playlists

### Phase 5: Playlist follow (1 day)
**Tasks:**
- [ ] Set up user-playlist many to many association
- [ ] Create actions to allow toggle follow

Objective: User can follow different playlists and can view the playlists they are subscribed to.

## Bonus Features (TBD)
- Search for songs, albums, artists, playlists, and users
- Create radio option to play random songs
- Create discovery page to showcase certain songs and/or artists
- Add genre to songs, and allow for search by genre
- Add recommendations to user page based on previous listens.
- Add auto lyrics scrolling to sync up with the song.
