import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { RouterModule } from '@angular/router';
//import { Router } from "@angular/router";
//import { Jugador } from '@jugador/shared/model/jugador';
import { GridJugadoresComponent } from './grid-jugadores.component';
import { CrearJugadorComponent } from '../crear-jugador/crear-jugador.component';
import { JugadorService} from '../../shared/service/jugador.service';

describe('GridJugadoresComponent', () => {
  let component: GridJugadoresComponent;
  let fixture: ComponentFixture<GridJugadoresComponent>;  
  //let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridJugadoresComponent, CrearJugadorComponent ],
      providers: [ JugadorService, HttpService, HttpClient ],
      imports: [ CommonModule,
        HttpClientModule,      
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridJugadoresComponent);
    //router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería obtener la lista de jugadores', () => {

    component.ngOnInit();
    (done: DoneFn) => {
      component.jugadores[0].getObservableValue().subscribe(value => {
        expect(value.nombre).toBe('Juan');
        done();
      });
    }
  });

  it('Debería navegar a crear jugadores', () => {
    component.crearJugador();
  });

 /* it('Debería navegar a crear jugadores', () => {
    spyOn(router, 'navigate');    
    component.crearJugador();
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/jugadores/crear']);

  });*/

 /* it('Debería navegar a ver detalles de jugador', () => {
    const jugador = new Jugador(1, 'Juan', 1116247957, 21, "100000000.00", 0.0, "2021-01-28 00:00:00.0", "2021-06-30 00:00:00.0", "2021-03-13 00:00:00.0", "Liverpool", 500,  2,  5);
    spyOn(router, 'navigate');
    component.verDetalles(jugador);
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/jugadores/detalles']);
  });*/


});
