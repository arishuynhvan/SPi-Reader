Rails.application.routes.draw do
  resources :articles do
    member do
      get 'run'
    end
  end
  root 'articles#new'
end
