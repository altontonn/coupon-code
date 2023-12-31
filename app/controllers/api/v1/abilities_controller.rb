class Api::V1::AbilitiesController < ApplicationController
  def index
    if current_user
      abilities = current_ability
      render json: abilities
    else
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
end
