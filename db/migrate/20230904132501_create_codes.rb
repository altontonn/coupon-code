class CreateCodes < ActiveRecord::Migration[7.0]
  def change
    create_table :codes do |t|
      t.string :passcode

      t.timestamps
    end
  end
end
