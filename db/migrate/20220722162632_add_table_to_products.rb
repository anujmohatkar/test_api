class AddTableToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :rows, :text, array: true
    add_column :products, :columns, :text, array: true
    add_column :products, :image_url, :text
  end
end
