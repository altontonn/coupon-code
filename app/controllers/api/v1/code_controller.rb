class Api::V1::CodeController < ApplicationController
  def index
    @code = Code.all
    render json: @code.to_json
  end

  def show
    render json: @code, serializer: CodeSerializer, status: :ok
  end

  def new
    Code.new
  end

  def create
    code = Code.new(code_params)

    if code.save
      render json: { message: 'Code created successfully' }, status: :created
    else
      render json: { errors: code.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def code_params
    params.require(:code).permit(:passcode, :user_id)
  end
end
