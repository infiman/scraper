class AddScrapedWebsiteIdToWebsiteContent < ActiveRecord::Migration[5.0]
  def change
    add_column :website_contents, :scraped_website_id, :string
  end
end
