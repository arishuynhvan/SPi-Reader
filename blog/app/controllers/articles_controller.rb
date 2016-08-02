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
	command = "sonic_pi " + @article.text
	puts command
	system("./app/controllers/SPi.sh")
  end

  private
  def article_params
    params.require(:article).permit(:text)
  end
end
