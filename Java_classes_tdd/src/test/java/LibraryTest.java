import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class LibraryTest {

    private Library library;
    private Book book;
    private Borrower borrower;

    @Before
    public void before(){
        library = new Library(3);
        book = new Book("Lord of the Rings", "JRR Tolkein", "fantasy");
        borrower = new Borrower();

    }

    @Test
    public void checkBooksInLibrary(){
        assertEquals(0, library.countBooks());
    }

    @Test
    public void checkAddBook(){
        library.addBook(book);
        library.addBook(book);
        library.addBook(book);
        library.addBook(book);

        assertEquals(3, library.countBooks());
    }

    @Test
    public void borrowerCanTakeBook(){
        library.addBook(book);
        library.addBook(book);
        library.addBook(book);
//        library.rentedBook();
//        borrower.borrowedBook(book);
        borrower.rentBook(library, book);
        borrower.rentBook(library, book);
        assertEquals(1, library.countBooks());
        assertEquals(2, borrower.countBorrowersBooks());
    }



}
