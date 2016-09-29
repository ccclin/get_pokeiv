class Api::PokesController < ApplicationController
  def index
    pokes = $redis.get("#{session['session_id']}")
    @pokes = JSON.parse(pokes).sort{ |a, b| a['pid'] <=> b['pid'] }
  end
end
