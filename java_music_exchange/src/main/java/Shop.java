import Behaviours.ISell;
import Items.*;

import java.util.ArrayList;

public class Shop implements ISell{

    Amp amp;
    Piano piano;
    Trumpet trumpet;
    Drumsticks drumsticks;
    Sheetmusic sheetmusic;
    private ArrayList<ISell> stock;

    public Shop(Amp amp, Piano piano, Trumpet trumpet, Drumsticks drumsticks, Sheetmusic sheetmusic) {
        this.amp = amp;
        this.piano = piano;
        this.trumpet = trumpet;
        this.drumsticks = drumsticks;
        this.sheetmusic = sheetmusic;
        this.stock = new ArrayList<>();
    }

    @Override
    public double calculateMarkup() {
        return 0;
    }
}
