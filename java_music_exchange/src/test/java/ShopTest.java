import Items.*;
import org.junit.Before;

public class ShopTest {

    Piano piano;
    Amp amp;
    Sheetmusic sheetmusic;
    Trumpet trumpet;
    Drumsticks drumsticks;

    @Before
    public void Before(){
        piano = new Piano("Yamaha B1", "Ebony", "Black", "Percussion", 2500.00, 3100, PianoSubTypes.Upright);
        amp = new Amp("Marshall 100 Watt", 150.00, 200);
        sheetmusic = new Sheetmusic("Mozart", 5.00, 12.99);
        trumpet = new Trumpet("Bach Stradivarius", "Brass", "Silver", "Brass", 600.00, 980.00, TrumpetSubTypes.Bugle);
        drumsticks = new Drumsticks("Wooden Drumsticks", 12.00, 25.00);
    }

    

}
