export class Cake {
    public name: String;
    public flavor: String;
    public intolerance: String;
    public calRation: String;
    public price: String;
    public numPortion: String;

    constructor (name: String, flavor: String, intolerance: String, calRation: String, price: String, numPortion: String){
        this.name = name;
        this.flavor = flavor;
        this.intolerance = intolerance;
        this.calRation = calRation;
        this.price = price;
        this.numPortion = numPortion
    }
}
