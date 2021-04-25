import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Jugador } from '@jugador/shared/model/jugador';
import { Calificacion } from '@jugador/shared/model/calificacion';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  jugador: Jugador;
  private url = `${environment.endpoint}/jugador`;

  constructor(protected http: HttpService) { }


  public consultarJugadores() {
    return this.http.doGet<Jugador[]>(`${this.url}`);  
  }

  public crear(jugador: Jugador) {
    return this.http.doPost<Jugador, boolean>(`${this.url}`, jugador);
  }

  public calificar(calificacion: Calificacion) {
    return this.http.doPatch<Calificacion, boolean>(`${this.url}/calificar`, calificacion);
  }

  public valorar(jugador: Jugador) {
    return this.http.doPut<Jugador, boolean>(`${this.url}/valorar`, jugador);
  }

}
