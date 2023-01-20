//Creacion de la clase objeto Champion formato JSON con su constructor

export class Champion {
    public name: String;
    public rol: String;
    public tier: String;
    public winRate: Number;
    public pickRate: String;
    public banRate: String;

    constructor (name: String, rol: String, tier: String, winRate: String, pickRate: String, banRate: String){

        this.name = name;
        this.rol = rol;
        this.tier = tier;
        this.winRate = Number(winRate);
        this.pickRate = pickRate;
        this.banRate = banRate;
    }
}
