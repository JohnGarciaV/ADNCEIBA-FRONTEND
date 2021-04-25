import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { JugadorService } from "@jugador/shared/service/jugador.service";
import { ErroresService } from "@core/services/errores.service";
import { SwalService } from "@core/services/swal.service";
import { ERROR, EXITO } from "@shared/constantes/constantes";
import { Icon } from "@core/icon.enum";

const EL_JUGADOR_HA_SIDO_CREADO = "El jugador ha sido creado.";

@Component({
  selector: 'app-crear-jugador',
  templateUrl: './crear-jugador.component.html',
  styleUrls: ['./crear-jugador.component.css']
})
export class CrearJugadorComponent implements OnInit {

  jugadorForm: FormGroup;

  constructor( protected jugadorService: JugadorService,
    private router: Router,
    protected swalService: SwalService,
    public erroresService: ErroresService) { }

  ngOnInit(): void {
    this.construirFormularioJugador();
  }

  private construirFormularioJugador() {
    this.jugadorForm = new FormGroup({     
      nombre: new FormControl(null, Validators.required),
      numeroIdentificacion: new FormControl(null, Validators.required),
      edad: new FormControl(null, Validators.required),
      valorizacion: new FormControl(null, Validators.required),
      calificacion: new FormControl(null, Validators.required),
      fechaInicioTemporada: new FormControl(null, Validators.required),
      fechaFinTemporada: new FormControl(null, Validators.required),
      fechaValorizacion: new FormControl(null, Validators.required),
      equipoFutbol: new FormControl(null, Validators.required),
      minutosJugados: new FormControl(null, Validators.required),
      torneoGanados: new FormControl(null, Validators.required),
      goles: new FormControl(null, Validators.required),
    });
  }

  crearJugador() {
    if(this.jugadorForm.valid){
      this.jugadorService.crear(this.jugadorForm.value).subscribe(
        () => {
          this.swalService.alert(
            EXITO,
            EL_JUGADOR_HA_SIDO_CREADO,
            Icon.SUCCESS
          );
          this.regresar();
        },
        (error) => {
          this.swalService.alert(ERROR, error.error.mensaje, Icon.ERROR);
        }
      );
    } 
  }

  regresar(): void {
    this.jugadorService.jugador =  null;
    this.router.navigate(["/jugadores"]);
  }


}
