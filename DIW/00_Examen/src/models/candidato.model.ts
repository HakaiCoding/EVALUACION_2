export class Candidato {
    private static idStatic: number = 0;
    public codCandidato: number;
    public nombre: string;
    public telefono: number;
    public edad: number;
    public especialidad: string;
    public codNivel: number;
    public experiencia: number


    constructor (nombre: string, telefono: number, edad: number, especialidad: string, codNivel: number, experiencia: number){
        this.codCandidato = Candidato.idStatic++;
        this.nombre = nombre;
        this.telefono = telefono;
        this.edad = edad;
        this.especialidad = especialidad;
        this.codNivel = codNivel;
        this.experiencia = experiencia;
    }
}
