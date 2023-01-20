export class Alumno {
    private static idStatic: number = 0;
    public id: number;
    public nombre: string;
    public diw: number;
    public dwec: number;
    public php: number;
    public media: number;


    constructor (nombre: string, diw: number, dwec: number, php: number, media: number){
        this.id = Alumno.idStatic++;
        this.nombre = nombre;
        this.diw = diw;
        this.dwec = dwec;
        this.php = php;
        this.media = (diw + dwec + php) / 3;
    }

}
