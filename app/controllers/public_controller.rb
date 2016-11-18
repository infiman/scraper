class PublicController < ApplicationController
  def index
    @csrf = {
      csrfToken: request_forgery_protection_token,
      csrfParam: form_authenticity_token
    }
  end
end
