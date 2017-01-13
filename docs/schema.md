## users
| column name     | data type | details                       |
|-----------------|-----------|-------------------------------|
| id              | integer   | not null, primary key         |
| username        | string    | not null, indexed, unique     |
| email           | string    | not null, indexed, unique     |
| first_name      | string    |                               |
| last_name       | string    |                               |
| image_url       | string    | have default image            |
| password_digest | string    | not null                      |
| session_token   | string    | not null, indexed, unique     |


## songs
| column name     | data type | details                       |
|-----------------|-----------|-------------------------------|
| id              | integer   | not null, primary key         |
| title           | string    | not null, indexed             |
| album_id        | integer   | not null, indexed             |
| order           | integer   | not null
| lyrics          | text      |                               |


## artists
| column name     | data type | details                       |
|-----------------|-----------|-------------------------------|
| id              | integer   | not null, primary key         |
| name            | string    | not null, indexed             |
| image_url       | string    |                               |


## albums
| column name     | data type | details                       |
|-----------------|-----------|-------------------------------|
| id              | integer   | not null, primary key         |
| title           | string    | not null, indexed             |
| image_url       | string    | have default image            |
| description     | text      |                               |


## playlists
| column name     | data type | details                       |
|-----------------|-----------|-------------------------------|
| id              | integer   | not null, primary key         |
| user_id         | integer   | not null, indexed             |
| image_url       | string    | have default image            |
| description     | text      |                               |


## playlist_songs
| column name     | data type | details                       |
|-----------------|-----------|-------------------------------|
| id              | integer   | not null, primary key         |
| song_id         | integer   | not null, indexed             |
| playlist_id     | integer   | not null, indexed             |


## playlist_follows
| column name     | data type | details                       |
|-----------------|-----------|-------------------------------|
| id              | integer   | not null, primary key         |
| user_id         | integer   | not null, indexed             |
| playlist_id     | integer   | not null, indexed             |
