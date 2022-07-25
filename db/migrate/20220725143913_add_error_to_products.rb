class AddErrorToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :error, :string
  end
end
