import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { JugadorService } from "@jugador/shared/service/jugador.service";
import { Jugador } from '@jugador/shared/model/jugador';
import { Calificacion } from '@jugador/shared/model/calificacion';
import { HttpResponse } from '@angular/common/http';

describe('JugadorService', () => {
  let httpMock: HttpTestingController;
  let service: JugadorService;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JugadorService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(JugadorService);
  });

  it('should be created', () => {
    const jugadorService: JugadorService = TestBed.inject(JugadorService);
    expect(jugadorService).toBeTruthy();
  });

  it('deberia obtener una lista de jugadores', () => {
    const dummyJugadores = [
      new Jugador(1, 'Juan', 1116247957, 21, "100000000.00", 0.0, "2021-01-28 00:00:00.0", "2021-06-30 00:00:00.0", "2021-03-13 00:00:00.0", "Liverpool", 500,  2,  5),
      new Jugador(2, 'Camilo', 1116745412, 21, "80000000.00", 0.0, "2021-01-28 00:00:00.0", "2021-06-30 00:00:00.0", "2021-03-01 00:00:00.0", "America de cali", 100,  2,  5),
      new Jugador(3, 'Andres', 1112745412, 21, "70000000.00", 0.0, "2021-01-28 00:00:00.0", "2021-06-30 00:00:00.0", "2021-03-01 00:00:00.0", "Cali", 100,  2,  5),
      new Jugador(4, 'Roberto', 1114745812, 21, "45000000.00", 0.0, "2021-01-28 00:00:00.0", "2021-06-30 00:00:00.0", "2021-03-01 00:00:00.0", "Nacional", 100,  2,  5),
      new Jugador(5, 'Cristian', 1116788995, 21, "20000000.00", 0.0, "2021-01-28 00:00:00.0", "2021-06-30 00:00:00.0", "2021-03-01 00:00:00.0", "Millonarios", 100,  2,  5),
      new Jugador(6, 'Argemiro', 1116788852, 21, "35000000.00", 5.0, "2021-01-28 00:00:00.0", "2021-06-30 00:00:00.0", "2021-03-01 00:00:00.0", "Pereira", 100,  2,  5),
      new Jugador(7, 'john', 1116675842, 21, "50000000.00", 0.0, "2021-01-28 00:00:00.0", "2021-06-30 00:00:00.0", "2021-03-01 00:00:00.0", "Cortulua", 100,  2,  5)      
    ];
  
    service.consultarJugadores().subscribe(jugadores => {
      expect(jugadores.length).toBe(7);
      expect(jugadores).toEqual(dummyJugadores);
    });
    const req = httpMock.expectOne(`${environment.endpoint}/jugador`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyJugadores);
  });

  it('deberia obtener un id del registro de jugador insertado', () => {
    const jugador =  new Jugador(0, 'Raul', 1116587, 20, "50000000.00", 0.0, "2021-01-28 00:00:00.0", "2021-06-30 00:00:00.0", "2021-04-01 00:00:00.0", "Cortulua", 0,  0,  0);
    const responseInsert = {
      valor: 8
    }
    service.crear(jugador).subscribe( () => {
      expect(responseInsert).toEqual(jasmine.objectContaining({
        valor: 8
      }));
    });
    const req = httpMock.expectOne(`${environment.endpoint}/jugador`);
    expect(req.request.method).toBe('POST');
    req.flush(jugador);
  });

  it('deberia obtener un id del registro de historial insertado', () => {
    const calificacion = new Calificacion(1116745412,90, 1,3);
    const responseInsert = {
      valor: 4
    }
    service.calificar(calificacion).subscribe(() => {
      expect(responseInsert).toEqual(jasmine.objectContaining({
        valor: 4
      }));
    });
    const req = httpMock.expectOne(`${environment.endpoint}/jugador/calificar`);
    expect(req.request.method).toBe('PATCH');
    req.flush(calificacion);
  });

  it('deberia obtener un boolean', () => {
    const jugador = new Jugador(1, 'Juan', 1116247957, 21, "500000.00", 0.0, "2021-01-28 00:00:00.0", "2021-06-30 00:00:00.0", "2021-03-13 00:00:00.0", "Liverpool", 500,  2,  5);

    service.valorar(jugador).subscribe( (response) => {
      expect(response).toEqual(true);
    });
    const req = httpMock.expectOne(`${environment.endpoint}/jugador/valorar`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body: true}));
  });

});
