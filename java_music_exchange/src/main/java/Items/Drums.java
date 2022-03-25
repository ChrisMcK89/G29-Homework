package Items;

public class Drums extends Instrument{

    private int noOfDrums;

    public Drums(String productName, String material, String colour, String typeOfInstrument, double buyPrice, double sellPrice, int noOfDrums) {
        super(productName, material, colour, typeOfInstrument, buyPrice, sellPrice);
        this.noOfDrums = noOfDrums;
    }

    public String play(){
        return "Boom, Boom, Boom, Boom";
    }
}
