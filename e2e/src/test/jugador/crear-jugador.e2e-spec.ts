import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { FormularioJugador } from "../../page/crear-jugador/formulario-jugador.po";
import { GridJugadores } from "../../page/grid-jugadores/grid-jugadores.po";

describe("Crear jugador", () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let crearJugador: FormularioJugador;
    let gridJugadores: GridJugadores;
    const EL_JUGADOR_HA_SIDO_CREADO = "El jugador ha sido creado.";

  beforeEach(() => {
      page = new AppPage();
      navBar = new NavbarPage();
      crearJugador = new FormularioJugador();
      gridJugadores = new GridJugadores();
    });

  it("Deberia crear Jugador", () => {
    //arrange
    const NOMBRE = "Raul";
    const NUMEROIDENTIFICACION = 1116789;
    const EDAD = 20;
    const VALORIZACION = 5000000;
    const CALIFICACION = 0.0;
    const FECHAINICIOTEMPORADA = "02/28/2021"; //2021-01-28
    const FECHAFINTEMPORADA = "07/30/2021";  //2021-06-30
    const FECHAVALORIZACION = "13/04/2021";  //2021-04-13
    const EQUIPOFUTBOL = "Cortulua";
    const MINUTOSJUGADOS = 0;
    const TORNEOSGANADOS = 0;
    const GOLES = 0;
   
    page.navigateTo();
    navBar.clickBotonNavBarJugadores();
    gridJugadores.clickBotonCrearJugador();
    browser.sleep(500);

    crearJugador.clickInputNombre();
    crearJugador.setInputNombre(NOMBRE);
    browser.sleep(500);
    crearJugador.clickInputNumeroIdentificacion();
    crearJugador.setInputNumeroIdentificacion(NUMEROIDENTIFICACION);
    browser.sleep(500);
    crearJugador.clickInputEdad();
    crearJugador.setInputEdad(EDAD);
    browser.sleep(500);
    crearJugador.clickInputValorizacion();
    crearJugador.setInputValorizacion(VALORIZACION);
    browser.sleep(500);
    crearJugador.clickInputCalificacion();
    crearJugador.setInputCalificacion(CALIFICACION);
    browser.sleep(500);
    crearJugador.clickInputFechaInicioTemporada();
    crearJugador.setInputFechaInicioTemporada(FECHAINICIOTEMPORADA);
    browser.sleep(500);
    crearJugador.clickInputFechaFinTemporada();
    crearJugador.setInputFechaFinTemporada(FECHAFINTEMPORADA);
    browser.sleep(500);
    crearJugador.clickInputFechaValorizacion();
    crearJugador.setInputFechaValorizacion(FECHAVALORIZACION);
    browser.sleep(500);
    crearJugador.clickInputEquipoFutbol();
    crearJugador.setInputEquipoFutbol(EQUIPOFUTBOL);
    browser.sleep(500);
    crearJugador.clickInputMinutosJugados();
    crearJugador.setInputMinutosJugados(MINUTOSJUGADOS);
    browser.sleep(500);
    crearJugador.clickInputTorneoGanados();
    crearJugador.setInputTorneoGanados(TORNEOSGANADOS);
    browser.sleep(500);
    crearJugador.clickInputGoles()
    crearJugador.setInputGoles(GOLES);
    browser.sleep(500);
    //act    
    crearJugador.clickBotonRegistrarJugador()
    browser.sleep(500);
    //assert
    const mensaje = crearJugador.getTextoSwal();
    expect(mensaje).toEqual(EL_JUGADOR_HA_SIDO_CREADO);
    browser.sleep(300);
  });
      
});
