package Items;

import Behaviours.IPlay;

public abstract class Instrument implements IPlay {

    private String productName;
    private String material;
    private String colour;
    private String typeOfInstrument;
    private double buyPrice;
    private double sellPrice;

    public Instrument(String productName, String material, String colour, String typeOfInstrument, double buyPrice, double sellPrice) {
        this.productName = productName;
        this.material = material;
        this.colour = colour;
        this.typeOfInstrument = typeOfInstrument;
        this.buyPrice = buyPrice;
        this.sellPrice = sellPrice;
    }


    }

