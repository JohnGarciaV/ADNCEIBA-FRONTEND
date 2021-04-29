import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Icon } from "@core/icon.enum";
import { JugadorService } from "@jugador/shared/service/jugador.service";
import { ErroresService } from "@core/services/errores.service";
import { SwalService } from "@core/services/swal.service";
import { ERROR, EXITO } from "@shared/constantes/constantes";
import { Jugador } from '@jugador/shared/model/jugador';

const CALIFICACION_EXISTOSA = "El jugador ha sido calificado.";
const VALORACION_EXISTOSA = "El jugador ha sido valorado.";

@Component({
  selector: 'app-ver-detalles',
  templateUrl: './ver-detalles.component.html',
  styleUrls: ['./ver-detalles.component.css']
})
export class VerDetallesComponent implements OnInit {
  jugadorForm: FormGroup;  
  calificarForm: FormGroup;
  jugador: Jugador;

  constructor(protected jugadorService: JugadorService,
              private router: Router,
              protected swalService: SwalService,
              public erroresService: ErroresService) { 
               this.jugador = this.jugadorService.jugador;
             }

  ngOnInit(): void {
    this.construirFormularioCliente();
  }

  public construirFormularioCliente() {
    this.jugadorForm = new FormGroup({
      idJugador: new FormControl(this.jugador?.idJugador, Validators.required),
      nombre: new FormControl(this.jugador?.nombre, Validators.required),
      numeroIdentificacion: new FormControl(this.jugador?.numeroIdentificacion, Validators.required),
      edad: new FormControl(this.jugador?.edad, Validators.required),
      valorizacion: new FormControl(this.jugador?.valorizacion.replace(".00", ""), Validators.required),
      calificacion: new FormControl(this.jugador?.calificacion),
      fechaInicioTemporada: new FormControl(this.jugador?.fechaInicioTemporada.replace(" 00:00:00.0", "")),
      fechaFinTemporada: new FormControl(this.jugador?.fechaFinTemporada.replace(" 00:00:00.0", "")),
      fechaValorizacion: new FormControl(this.jugador?.fechaValorizacion.replace(" 00:00:00.0", "")),
      equipoFutbol: new FormControl(this.jugador?.equipoFutbol),
      minutosJugados: new FormControl(this.jugador?.minutosJugados),
      torneoGanados: new FormControl(this.jugador?.torneoGanados),
      goles: new FormControl(this.jugador?.goles),
    });

    this.calificarForm = new FormGroup({
      numeroIdentificacion: new FormControl(this.jugador?.numeroIdentificacion, Validators.required),
      minutosJugados: new FormControl(null,  Validators.required),
      torneoGanados: new FormControl(null,  Validators.required),
      goles: new FormControl(null,  Validators.required),
    });
  }

  calificarJugador(calificarFormExterno: FormGroup){
    if(this.calificarForm.valid){
      this.jugadorService.calificar(calificarFormExterno.value).subscribe(
        () => {
          this.swalService.alert(
            EXITO,
            CALIFICACION_EXISTOSA,
            Icon.SUCCESS
          );  
        },
        (error) => {
          this.swalService.alert(ERROR, error.error.mensaje, Icon.ERROR);
        }
      );
    }else{
      this.swalService.alert(ERROR, 'Debe diligenciar todos los campos', Icon.ERROR);
    } 
  }

  valorizarJugador(valorarFormExterno: FormGroup){
      this.jugadorService.valorar(valorarFormExterno.value).subscribe(
        () => {
          this.swalService.alert(
            EXITO,
            VALORACION_EXISTOSA,
            Icon.SUCCESS
          ); 
          let todayDate = new Date().toISOString().slice(0, 10);
          this.jugadorForm.patchValue({
            fechaValorizacion: todayDate
          });
        },
        (error) => {
          this.swalService.alert(ERROR, error.error.mensaje, Icon.ERROR);
        }
      );
  }

  regresar(): void {
    this.jugadorService.jugador =  null;
    this.router.navigate(["/jugadores"]);
  }

}
