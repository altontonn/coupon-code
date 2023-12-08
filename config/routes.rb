Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "root#index"
  
  namespace :api do
    namespace :v1 do
      resources :code, only: [:index, :show, :new, :create]
    end
  end
  
  # Defines the root path route ("/")
  get '*path', to: 'root#index', via: :all
end
