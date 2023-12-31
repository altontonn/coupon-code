class Users::SessionsController < Devise::SessionsController
  def create
    @user = User.find_by(email: params[:user][:email])
    if @user&.valid_password?(params[:user][:password])
      sign_in @user
      render json: @user
    else
      render json: { error: 'Invalid email or password' }, status: :unprocessable_entity
    end
  end

  def destroy
    sign_out current_user
    cookies.delete('remember user token')
    render json: { message: 'Signed out successfully' }
  end
end
