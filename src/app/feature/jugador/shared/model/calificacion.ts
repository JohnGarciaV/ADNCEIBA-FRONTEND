export class Calificacion {
    numeroIdentificacion: number;
    minutosJugados: number;
    torneoGanados: number;
    goles: number;
  
    constructor(
        numeroIdentificacion: number,
        minutosJugados: number,
        torneoGanados: number,
        goles: number
    ) {     
      this.numeroIdentificacion= numeroIdentificacion; 
      this.minutosJugados= minutosJugados;
      this.torneoGanados= torneoGanados;
      this.goles= goles;
    }
}