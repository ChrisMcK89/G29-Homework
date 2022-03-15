import java.util.ArrayList;

public class Borrower {

    private ArrayList<Book> books;

    public Borrower(){
        this.books = new ArrayList<>();
    }

//    public void borrowedBook(Book book){
//        this.books.add(book);
//
//    }

    public int countBorrowersBooks(){
        return this.books.size();
    }

    public void rentBook(Library library, Book book){
        library.rentedBook();
        this.books.add(book);
    }
}
