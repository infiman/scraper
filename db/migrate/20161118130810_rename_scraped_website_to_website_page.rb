class RenameScrapedWebsiteToWebsitePage < ActiveRecord::Migration[5.0]
  def change
    rename_table :scraped_websites, :website_pages
  end
end
