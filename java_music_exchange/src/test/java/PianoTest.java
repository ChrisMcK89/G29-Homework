import Items.Piano;
import Items.PianoSubTypes;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PianoTest {

    Piano piano;

    @Before
    public void before(){
        piano = new Piano("Yamaha B1", "Ebony", "Black", "Percussion", 2500.00, 3100, PianoSubTypes.Upright);
    }

    @Test
    public void checkEnumsWorks(){
        assertEquals(PianoSubTypes.Upright, piano.getPianoSubType());
    }

    @Test
    public void canPlayPiano(){
        assertEquals("Tinkle, Tinkle!", piano.play());
    }
}
