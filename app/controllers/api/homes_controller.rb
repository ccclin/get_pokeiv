class Api::HomesController < ApplicationController
  def index
    @google_url = 'https://accounts.google.com/o/oauth2/auth'
    @get_params = {
      client_id: '848232511240-73ri3t7plvk96pj4f85uj8otdat2alem.apps.googleusercontent.com',
      redirect_uri: 'urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob',
      response_type: 'code',
      scope: 'openid%20email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email'
    }
  end
end
