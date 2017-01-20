Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session,            only: [:create, :destroy]
    resources :search,            only: [:index]
    resources :users,             only: [:create, :show, :update, :destroy]
    resources :songs,             only: [:show, :index]
    resources :albums,            only: [:show, :index]
    resources :artists,           only: [:show, :index]
    resources :playlists,         except: [:new, :edit]
    resources :playlist_songs,    only: [:create]
    delete '/playlist_follows',   to: 'playlist_follows#destroy'
    resources :playlist_follows,  only: [:create]
    delete '/playlist_songs',     to: 'playlist_songs#destroy'
  end

end
