Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update, :destroy]

    resources :songs, only: [:show, :index] do
      collection do
        get 'search'
      end
    end

    resources :albums, only: [:show, :index] do
      collection do
        get 'search'
      end
    end

    resources :artists, only: [:show, :index] do
      collection do
        get 'search'
      end
    end
    
    resources :playlists, except: [:new, :edit] do
      collection do
        get 'search'
      end
    end


    resources :playlist_songs, only: [:create, :destroy]
    resources :playlist_follows, only: [:create, :destroy]
  end


end
