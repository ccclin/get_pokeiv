require 'poke-api'

class PokesController < ApplicationController
  def index
    redirect_to root_path if $redis.get("#{session['session_id']}").blank?
  end

  def create
    client = Poke::API::Client.new
    client.login({code: params[:google_code].to_s, provider: 'GOOGLE'})
    client.get_inventory
    resp = client.call
    pokes = GetPoke.new(resp).pokes
    $redis.set("#{session['session_id']}", pokes.to_json)
    render :index
  rescue
    @alert = 'invalid code'
    render 'homes/index'
  end
end
