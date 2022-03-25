package Items;

public class Guitar extends Instrument{

    private int noOfStrings;

    public Guitar(String productName, String material, String colour, String typeOfInstrument, double buyPrice, double sellPrice, int noOfStrings) {
        super(productName, material, colour, typeOfInstrument, buyPrice, sellPrice);
        this.noOfStrings = noOfStrings;
    }

    public String play(){
        return "Bwwaaap, Bwwaap!";
    }


}
