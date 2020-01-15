Rails.application.routes.draw do
  resources :authors
  resources :sections
  resources :articles, only: [:index, :show]
  resources :magazines

  namespace :edit do
    resources :articles
    resources :sections
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end