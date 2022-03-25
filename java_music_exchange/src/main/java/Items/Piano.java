package Items;

public class Piano extends Instrument{

    private PianoSubTypes pianoSubType;

    public Piano(String productName, String material, String colour, String typeOfInstrument, double buyPrice, double sellPrice, PianoSubTypes pianoSubType) {
        super(productName, material, colour, typeOfInstrument, buyPrice, sellPrice);
        this.pianoSubType = pianoSubType;
    }

    public PianoSubTypes getPianoSubType() {
        return pianoSubType;
    }

    public String play(){
        return "Tinkle, Tinkle!";
    }
}
