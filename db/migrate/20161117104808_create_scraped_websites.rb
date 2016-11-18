class CreateScrapedWebsites < ActiveRecord::Migration[5.0]
  def change
    create_table :scraped_websites do |t|
      t.string :url

      t.timestamps
    end
  end
end
