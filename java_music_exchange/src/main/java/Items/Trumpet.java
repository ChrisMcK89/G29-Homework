package Items;

public class Trumpet extends Instrument{

    private TrumpetSubTypes trumpetSubType;

    public Trumpet(String productName, String material, String colour, String typeOfInstrument, double buyPrice, double sellPrice, TrumpetSubTypes trumpetSubType) {
        super(productName, material, colour, typeOfInstrument, buyPrice, sellPrice);
        this.trumpetSubType = trumpetSubType;
    }

    public String play(){
        return "brapp, brapp, brapp, brapp!!";
    }
}
