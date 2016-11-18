class RenameWebsiteContentsTableToContentsTable < ActiveRecord::Migration[5.0]
  def change
    rename_table :website_contents, :contents
  end
end
