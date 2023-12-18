class Api::V1::CodeController < ApplicationController
  def index
    @users = User.all
    render json: JSON.pretty_generate({ users: @users.as_json }), status: :ok
  end
end
