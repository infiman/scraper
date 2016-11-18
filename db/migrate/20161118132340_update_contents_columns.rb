class UpdateContentsColumns < ActiveRecord::Migration[5.0]
  def change
    rename_column :contents, :scraped_website_id, :website_page_id
    change_column :contents, :content, :text
  end
end
