class AddResponseToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :result, :string
    add_column :products, :chart_type, :string
  end
end
