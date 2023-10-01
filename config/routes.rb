Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :code, only: [:index, :show, :edit, :destroy]
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "root#index"
  
  # Defines the root path route ("/")
  get '*path', to: 'root#index', via: :all
end
