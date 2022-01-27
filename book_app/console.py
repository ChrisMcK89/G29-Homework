import pdb
from models.book import Book
from models.author import Author

import repositories.book_repository as book_repository
import repositories.author_repository as author_repository

author1 = Author("Sherlock Holmes")
author_repository.save(author1)
author2 = Author("Stephen King")
author_repository.save(author2)

book1 = Book("A Study In Scarlet", author1)
book_repository.save(book1)
book2 = Book("The Shining", author2)
book_repository.save(book2)



pdb.set_trace()
