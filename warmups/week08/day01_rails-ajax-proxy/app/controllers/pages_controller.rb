class PagesController < ApplicationController

  def ajax_proxy
    # render plain: 'hello!'

    headers['Access-Control-Allow-Origin'] = '*'

    if params[:password] == 'chicken'
      page_content = HTTParty.get params[:url]
      # render json: { data: page_content.body, status: 'ok' }
      render plain: page_content.body
    else
      render json: { error: 'Bad password' }
    end

  end



end
