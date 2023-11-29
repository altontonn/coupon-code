class Code < ApplicationRecord
  validates_uniqueness_of :passcode
  validates :passcode, presence: true, length: { is: 6 }
end
