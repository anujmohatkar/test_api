class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :input
      t.string :output

      t.timestamps
    end
  end
end

