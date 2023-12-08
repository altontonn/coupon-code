class User < ApplicationRecord
  has_many :codes
  validates :name, presence: true
end