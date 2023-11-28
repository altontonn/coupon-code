class Code < ApplicationRecord
  validates_uniqueness_of :code
  validates :code, presence: true, length: { is: 6}
end
