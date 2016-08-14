class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end

  def new
  end

  def create
    @article = Article.new(article_params)

	@article.save
	redirect_to @article
  end

  def destroy
    @article = Article.find(params[:id])
	@article.destroy

	redirect_to articles_path
  end

  def run
    @article = Article.find(params[:id])
	command = @article.text
	puts 'From articles_controller.rb: ' + command
	#system("./app/controllers/SPi.sh " + command)
    system("./app/controllers/bin/SPi-reader.rb " + command) 
  end

  private
  def article_params
    params.require(:article).permit(:text)
  end
end
