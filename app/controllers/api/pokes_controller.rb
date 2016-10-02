class Api::PokesController < ApplicationController
  def index
    @pokes = sort_pokes
    @sort = order_sort
  end

  private

  def get_pokes
    $redis.get("#{session['session_id']}")
  end

  def sort_pokes
    if order_sort == 'ASC'
      JSON.parse(get_pokes).sort{ |a, b| a[order_type] <=> b[order_type] }
    else
      JSON.parse(get_pokes).sort{ |a, b| b[order_type] <=> a[order_type] }
    end
  end

  def order_type
    params[:type].blank? ? 'pid' : params[:type].to_s
  end

  def order_sort
    params[:sort].to_s == 'ASC' ? 'DESC' : 'ASC'
  end
end
