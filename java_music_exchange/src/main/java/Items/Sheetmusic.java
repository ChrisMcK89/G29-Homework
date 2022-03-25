package Items;

import Behaviours.ISell;

public class Sheetmusic implements ISell {

    private String description;
    private double buyPrice;
    private double sellPrice;

    public Sheetmusic(String description, double buyPrice, double sellPrice) {
        this.description = description;
        this.buyPrice = buyPrice;
        this.sellPrice = sellPrice;
    }

    public double calculateMarkup() {
        return getSellPrice() - getBuyPrice();
    }

    public String getDescription() {
        return description;
    }

    public double getBuyPrice() {
        return buyPrice;
    }

    public double getSellPrice() {
        return sellPrice;
    }
}
