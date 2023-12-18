class Ability
  include CanCan::Ability

  def initialize(user)
    if user.role == 'admin'
      can %i[read create], Code, user_id: user.id
    else
      can :read, Code, user_id: user.id
    end
  end
end
