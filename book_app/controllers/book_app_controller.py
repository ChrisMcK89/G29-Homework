from flask import Flask, render_template
from flask import Blueprint
from repositories import book_repository
from repositories import author_repository


books_blueprint = Blueprint("books", __name__)

@books_blueprint.route("/")
def home_page():
    books = book_repository.select_all()
    return render_template("/index.html", all_books = books)


@books_blueprint.route("/authors")
def authors():
    authors = author_repository.select_all()
    return render_template("/authors.html", all_authors = authors)



# @books_blueprint.route("/books")
# def tasks():
#     tasks = book_repository.select_all()
#     return render_template("tasks/index.html", all_books = books)


