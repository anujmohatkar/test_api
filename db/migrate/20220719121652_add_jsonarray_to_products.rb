class AddJsonarrayToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :jsonarray, :text, array: true
  end
end
