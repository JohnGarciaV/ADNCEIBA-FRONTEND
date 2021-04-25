import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { JugadorService } from "@jugador/shared/service/jugador.service";
import { Jugador } from '@jugador/shared/model/jugador';

@Component({
  selector: 'app-grid-jugadores',
  templateUrl: './grid-jugadores.component.html',
  styleUrls: ['./grid-jugadores.component.css']
})
export class GridJugadoresComponent implements OnInit {

  public jugadores: Observable<Jugador[]>;
  
  constructor(protected jugadorService: JugadorService,
    private router: Router) { }

  ngOnInit(): void {
    this.jugadores = this.jugadorService.consultarJugadores();
    console.log(this.jugadores);
  }

  crearJugador(){
    this.router.navigate(["/jugadores/crear"]);
  }

  verDetalles(jugador: Jugador){
    this.jugadorService.jugador = jugador;
    this.router.navigate(["/jugadores/detalles"]);
  }

}
