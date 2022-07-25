class AddChartDataToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :chart_data, :text,  array: true
  end
end
