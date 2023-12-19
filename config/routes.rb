Rails.application.routes.draw do
  devise_for :users, path: '', path_names: {
    sign_in: 'signin',
    sign_out: 'logout',
    registration: 'signup'
  }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "root#index"
  
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :new, :create]
      resources :code, only: [:index, :show, :new, :create]
    end
  end
  
  # Defines the root path route ("/")
  get '*path', to: 'root#index', via: :all
end
