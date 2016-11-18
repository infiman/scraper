class WebsitePage < ApplicationRecord
  has_many :contents, dependent: :destroy

  validates :url, presence: true, uniqueness: true
end
