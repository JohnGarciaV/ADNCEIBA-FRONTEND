import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpService } from '@core/services/http.service';
import { FormsModule, ReactiveFormsModule,FormBuilder  } from '@angular/forms';
import { Jugador } from '@jugador/shared/model/jugador';
import  Swal  from 'sweetalert2';
import { VerDetallesComponent } from './ver-detalles.component';
import { JugadorService} from '../../shared/service/jugador.service';


describe('VerDetallesComponent', () => {
  let component: VerDetallesComponent;
  let fixture: ComponentFixture<VerDetallesComponent>;
  let jugadorService: JugadorService;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDetallesComponent ],
      providers: [ JugadorService, HttpService, HttpClient, { provide: FormBuilder, useValue: formBuilder }, Swal ],
      imports: [ 
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDetallesComponent);
    jugadorService = TestBed.inject(JugadorService);
    component = fixture.componentInstance;
    component.jugador = new Jugador(1, 'Juan', 1116745412, 21, "100000000.00", 0.0, "2021-01-28 00:00:00.0", "2021-06-30 00:00:00.0", "2021-03-13 00:00:00.0", "Liverpool", 500,  2,  5);
    component.jugadorForm = formBuilder.group({
      idJugador: null,
      nombre: null,
      numeroIdentificacion: null,
      edad: null,
      valorizacion: null,
      calificacion: null,
      fechaInicioTemporada: null,
      fechaFinTemporada: null,
      fechaValorizacion: null,
      equipoFutbol: null,
      minutosJugados: null,
      torneoGanados: null,
      goles: null
    });   

    component.calificarForm = formBuilder.group({
      numeroIdentificacion: null,
      minutosJugados: null,
      torneoGanados: null,
      goles: null
    });   
    fixture.detectChanges();
  });

  it('Debería crearse el componente', () => {
    component.jugador = new Jugador(1, 'Juan', 1116247957, 21, "100000000.00", 0.0, "2021-01-28 00:00:00.0", "2021-06-30 00:00:00.0", "2021-03-13 00:00:00.0", "Liverpool", 500,  2,  5);
    component.jugadorForm = formBuilder.group({
      idJugador: null,
      nombre: null,
      numeroIdentificacion: null,
      edad: null,
      valorizacion: null,
      calificacion: null,
      fechaInicioTemporada: null,
      fechaFinTemporada: null,
      fechaValorizacion: null,
      equipoFutbol: null,
      minutosJugados: null,
      torneoGanados: null,
      goles: null
   });   
   component.calificarForm = formBuilder.group({
    numeroIdentificacion: null,
    minutosJugados: null,
    torneoGanados: null,
    goles: null
  });     

   component.construirFormularioCliente();
    expect(component).toBeTruthy();
  });


  it('Debería calificar jugador', () => {
    // Arrange 
     spyOn(jugadorService, 'calificar');
    // Act    
    component.calificarJugador();
    // Assert
    expect(Swal.isVisible()).toBeTruthy();
    setTimeout(() => {
      expect(component).toHaveBeenCalled()
    })
  });



  /*it('Debería valorizar jugador', () => {
    // Arrange     
    component.jugadorForm.controls.idJugador.setValue(1);
    component.jugadorForm.controls.nombre.setValue('Juan');
    component.jugadorForm.controls.numeroIdentificacion.setValue(1116247957);
    component.jugadorForm.controls.edad.setValue(21);
    component.jugadorForm.controls.valorizacion.setValue('100000000.00');
    component.jugadorForm.controls.calificacion.setValue(0.0);
    component.jugadorForm.controls.fechaInicioTemporada.setValue('2021-01-28');
    component.jugadorForm.controls.fechaFinTemporada.setValue('2021-06-30');
    component.jugadorForm.controls.fechaValorizacion.setValue('2021-03-13');
    component.jugadorForm.controls.equipoFutbol.setValue('Liverpool');
    component.jugadorForm.controls.minutosJugados.setValue(500);
    component.jugadorForm.controls.torneoGanados.setValue(2);
    component.jugadorForm.controls.goles.setValue(5);
     spyOn(jugadorService, 'valorar');
    // Act    
    component.valorizarJugador();
    // Assert
    expect(Swal.isVisible()).toBeTruthy();
    setTimeout(() => {
      expect(component).toHaveBeenCalled()
    })
  });*/

});
