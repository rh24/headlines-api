Rails.application.routes.draw do
  resources :sources, only: [:index, :show]
  resources :users
  resources :stories
  resources :categories

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
