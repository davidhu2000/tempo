Rails.application.routes.draw do

  namespace :api do
  get 'albums/show'
  end

  namespace :api do
  get 'albums/index'
  end

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update, :destroy]

    resources :songs, only: [:show, :index]
  end
end
