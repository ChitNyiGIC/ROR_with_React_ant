Rails.application.routes.draw do
  root "home#index"
  resources :fruits, only: [:index, :create, :destroy, :update]
end
