Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'homes#index'
  resources :homes, only: [:index]
  resources :pokes, only: [:index, :create]

  namespace :api, defaults: { format: 'json' } do
    resources :homes, only: [:index]
    resources :pokes, only: [:index]
  end
end
