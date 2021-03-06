Rails.application.routes.draw do
  resources :sources, only: [:index, :show]
  resources :users do
    resources :stories
    resources :user_categories
  end
  resources :stories
  resources :categories
  resources :user_stories
  resources :user_categories

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
