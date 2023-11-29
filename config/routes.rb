Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "root#index"
  
  namespace :api do
    namespace :v1 do
      resources :code, only: [:index, :show, :new, :create, :edit, :destroy]
    end
  end
  
  # Defines the root path route ("/")
  get '*path', to: 'root#index', via: :all
end
