class Product < ApplicationRecord
	serialize :jsonarray, Array
	serialize :input, Array
	serialize :output, Array
	serialize :rows, Array
	serialize :columns, Array
	serialize :columns, Array
end
