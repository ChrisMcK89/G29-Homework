import Items.Amp;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class AmpTest {

    Amp amp;

    @Before
    public void Before(){
        amp = new Amp("Marshall 100 Watt", 150.00, 200);
    }

    @Test
    public void canGetBuyPrice(){
        assertEquals(150.00, amp.getBuyPrice(), 0.00);
    }

    @Test
    public void canCalculateMarkup(){
        assertEquals(50, amp.calculateMarkup(), 0.00);
    }

}
