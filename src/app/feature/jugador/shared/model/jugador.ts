export class Jugador {
    idJugador: number;
    nombre: string;
    numeroIdentificacion: number;    
    edad: number;
    valorizacion: string;
    calificacion: number;
    fechaInicioTemporada: string;
    fechaFinTemporada: string;
    fechaValorizacion: string;
    equipoFutbol: string;
    minutosJugados: number;
    torneoGanados: number;
    goles: number;
  
    constructor(
        idJugador: number,
        nombre: string,
        numeroIdentificacion: number,    
        edad: number,
        valorizacion: string,
        calificacion: number,
        fechaInicioTemporada: string,
        fechaFinTemporada: string,
        fechaValorizacion: string,
        equipoFutbol: string,
        minutosJugados: number,
        torneoGanados: number,
        goles: number
    ) {
      this.idJugador = idJugador;
      this.nombre = nombre;
      this.numeroIdentificacion= numeroIdentificacion;   
      this.edad= edad;
      this.valorizacion= valorizacion;
      this.calificacion= calificacion;
      this.fechaInicioTemporada= fechaInicioTemporada;
      this.fechaFinTemporada= fechaFinTemporada;
      this.fechaValorizacion= fechaValorizacion;
      this.equipoFutbol= equipoFutbol;
      this.minutosJugados= minutosJugados;
      this.torneoGanados= torneoGanados;
      this.goles= goles;
    }
  }
  