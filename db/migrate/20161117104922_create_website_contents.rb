class CreateWebsiteContents < ActiveRecord::Migration[5.0]
  def change
    create_table :website_contents do |t|
      t.string :content_type
      t.string :content

      t.timestamps
    end
  end
end
