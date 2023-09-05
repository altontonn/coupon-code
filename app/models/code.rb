class Code < ApplicationRecord
  validates_uniqueness_of :code
end
