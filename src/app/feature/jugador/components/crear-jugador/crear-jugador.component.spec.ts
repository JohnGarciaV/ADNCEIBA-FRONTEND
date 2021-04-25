import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';

import { CrearJugadorComponent } from './crear-jugador.component';
import { JugadorService} from '../../shared/service/jugador.service';

describe('CrearJugadorComponent', () => {
  let component: CrearJugadorComponent;
  let fixture: ComponentFixture<CrearJugadorComponent>;
  let jugadorService: JugadorService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearJugadorComponent ],
      providers: [ JugadorService, HttpService, HttpClient ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearJugadorComponent);
    jugadorService = TestBed.inject(JugadorService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería ser invalido el formulario si esta vacio', () => {
    expect(component.jugadorForm.valid).toBeFalsy();
  });

  it('Debería crear jugador', () => {
    // Arrange
    component.jugadorForm.controls.nombre.setValue('Raul');
    component.jugadorForm.controls.numeroIdentificacion.setValue(1116587);
    component.jugadorForm.controls.edad.setValue(20);
    component.jugadorForm.controls.valorizacion.setValue('50000000.00');
    component.jugadorForm.controls.calificacion.setValue(0.0);
    component.jugadorForm.controls.fechaInicioTemporada.setValue('2021-01-28 00:00:00.0');
    component.jugadorForm.controls.fechaFinTemporada.setValue('2021-06-30 00:00:00.0');
    component.jugadorForm.controls.fechaValorizacion.setValue('2021-04-01 00:00:00.0');
    component.jugadorForm.controls.equipoFutbol.setValue('Cortulua');
    component.jugadorForm.controls.minutosJugados.setValue(0);
    component.jugadorForm.controls.torneoGanados.setValue(0);
    component.jugadorForm.controls.goles.setValue(0);

    const spy = spyOn(jugadorService, 'crear').and.returnValue(
      of(true)
    );
    // Act
    component.crearJugador();
    // Assert
    expect(spy).toHaveBeenCalled();
  });
  

});
