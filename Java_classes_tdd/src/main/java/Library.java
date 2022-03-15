import java.util.ArrayList;

public class Library {

    private Library library;

    private ArrayList<Book> books;
    private Integer capacity;

    public Library(Integer capacity){
        this.books = new ArrayList<>();
        this.capacity = capacity;
    }

    public int countBooks(){
        return this.books.size();
    }

    public void addBook(Book book) {
        if (this.capacity > this.books.size()) {
            this.books.add(book);
        }
    }

    public Book rentedBook(){
        return this.books.remove(0);

    }

}
