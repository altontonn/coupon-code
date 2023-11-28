class Api::V1::CodeController < ApplicationController
  def index
    @code = Code.all
    render json: @code.to_json
  end

  def new
    Code.new
  end
end
