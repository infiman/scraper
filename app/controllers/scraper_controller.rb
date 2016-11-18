require 'open-uri'

class ScraperController < ApplicationController
  def index
    websites = WebsitePage.last(params[:count])

    render json: {
      status: :ok,
      error: '',
      entities: websites
    }.to_json, status: :ok
  end

  def show
    contents = WebsitePage.find(params[:id]).contents.all

    render json: {
      status: :ok,
      error: '',
      entities: contents
    }.to_json, status: :ok
  end

  def create
    website = WebsitePage.new website_params

    begin
      if website.valid?
        content = Nokogiri::HTML(open(website_params[:url]))
        result = content.xpath('//*[self::h1/text() or self::h2/text() or self::h3/text() or self::a/@href]')

        result.map do |item|
          website.contents.build({
            content_type: item.name,
            content: item.to_s
          })
        end
      end

      website.save!

      render json: {
        status: :created
      }.to_json, status: :created
    rescue Exception => e
      render json: {
        error: e.message,
        status: :unprocessable_entity
      }.to_json, status: :unprocessable_entity
    end
  end

  private
    def website_params
      params.require(:scraper).permit(:url)
    end
end
