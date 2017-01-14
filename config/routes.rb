Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update, :destroy]

    resources :songs, only: [:show, :index]
    resources :albums, only: [:show, :index]

  end
end
