Rails.application.routes.draw do
  root 'public#index'

  scope '/api' do
    post '/scrape_website', to: 'scraper#create'

    get '/websites/:count', to: 'scraper#index'
    get '/website/:id', to: 'scraper#show'
  end
end
