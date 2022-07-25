require 'json'
class Api::V1::ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @products, status: 200
  end

  def create
    p prod_params[:input].gsub('"', '')
    p prod_params[:output].gsub('"', '')
    @product = Product.new(
      input: [] << prod_params[:input].gsub('"', ''),
      output: [] << prod_params[:output].gsub('"', ''),
      jsonarray: ["title", "length", "rental_rate", "replacement_cost", "rating"],
      rows: [] << prod_params[:input].gsub('"', ''),
      columns: [] << prod_params[:output].gsub('"', ''),
      result: "chart",
      chart_type: 'bubble',
      error: 'some error because you cannot write clean code',
      chart_data: '[{"data":[{"x":117.0,"y":4.99,"name":"Ch","title":"Chamber Italian"},{"x":49.0,"y":4.99,"name":"Gr","title":"Grosse Wonderful"},{"x":54.0,"y":4.99,"name":"Ai","title":"Airport Pollock"},{"x":73.0,"y":4.99,"name":"Br","title":"Bright Encounters"},{"x":86.0,"y":0.99,"name":"Ac","title":"Academy Dinosaur"},{"x":48.0,"y":4.99,"name":"Ac","title":"Ace Goldfinger"},{"x":50.0,"y":2.99,"name":"Ad","title":"Adaptation Holes"},{"x":117.0,"y":2.99,"name":"Af","title":"Affair Prejudice"},{"x":130.0,"y":2.99,"name":"Af","title":"African Egg"},{"x":169.0,"y":2.99,"name":"Ag","title":"Agent Truman"}]},{"type":"line","data":[{"x":117.0,"y":4.99}]},{"type":"line","data":[{"x":49.0,"y":4.99}]},{"type":"line","data":[{"x":54.0,"y":4.99}]},{"type":"line","data":[{"x":73.0,"y":4.99}]},{"type":"line","data":[{"x":86.0,"y":0.99}]},{"type":"line","data":[{"x":48.0,"y":4.99}]},{"type":"line","data":[{"x":50.0,"y":2.99}]},{"type":"line","data":[{"x":117.0,"y":2.99}]},{"type":"line","data":[{"x":130.0,"y":2.99}]},{"type":"line","data":[{"x":169.0,"y":2.99}]}]',
      image_url: 'https://picsum.photos/seed/picsum/200/300'
       )

    if @product.save
      p "here"
      p @product.input.class
      p @product.output.class
      p @product.rows.class
      p @product.columns.class
      p @product.image_url.class
      @product.save
      p "save successful"
      render json: @product, status: 200
    else 
      render json: {error: 'Error creating review.'}
    end
  end

  def show
    @product = Product.find_by(id: params[:id])
    if @product
      render json: @product, status: 200
    else
      render json: {error: 'Product Not found.'}
    end
  end

  private
  
  def prod_params
    params.require(:product).permit([
      :input,
      :output,
      :jsonarray,
      :rows,
      :columns,
      :image_url
    ])
  end
end
