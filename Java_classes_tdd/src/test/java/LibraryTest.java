import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class LibraryTest {

    private Library library;
    private Book book1;
    private Book book2;
    private Book book3;
    private Borrower borrower;

    @Before
    public void before(){
        library = new Library(3);
        book1 = new Book("Lord of the Rings", "JRR Tolkein", "fantasy");
        book2 = new Book("Catch 22", "Joseph Heller", "fiction");
        book3 = new Book("Of Mice and Men", "John Steinbeck", "fiction");

        borrower = new Borrower();

    }

    @Test
    public void checkBooksInLibrary(){
        assertEquals(0, library.countBooks());
    }

    @Test
    public void checkAddBook(){
        library.addBook(book1);
        library.addBook(book2);
        library.addBook(book3);


        assertEquals(3, library.countBooks());
    }

    @Test
    public void borrowerCanTakeBook(){
        library.addBook(book1);
        library.addBook(book2);
        library.addBook(book3);
//        library.rentedBook();
//        borrower.borrowedBook(book);
        borrower.rentBook(library, book3);
        borrower.rentBook(library, book2);
        assertEquals(1, library.countBooks());
        assertEquals(2, borrower.countBorrowersBooks());
    }

    @Test
    public void checkCountBooksByGenre(){

    }



}
