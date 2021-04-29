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
    crearJugador.clickInputNombre();
    crearJugador.setInputNombre(NOMBRE);
    crearJugador.clickInputNumeroIdentificacion();
    crearJugador.setInputNumeroIdentificacion(NUMEROIDENTIFICACION);
    crearJugador.clickInputEdad();
    crearJugador.setInputEdad(EDAD);
    crearJugador.clickInputValorizacion();
    crearJugador.setInputValorizacion(VALORIZACION);
    crearJugador.clickInputCalificacion();
    crearJugador.setInputCalificacion(CALIFICACION);
    crearJugador.clickInputFechaInicioTemporada();
    crearJugador.setInputFechaInicioTemporada(FECHAINICIOTEMPORADA);
    crearJugador.clickInputFechaFinTemporada();
    crearJugador.setInputFechaFinTemporada(FECHAFINTEMPORADA);
    crearJugador.clickInputFechaValorizacion();
    crearJugador.setInputFechaValorizacion(FECHAVALORIZACION);
    crearJugador.clickInputEquipoFutbol();
    crearJugador.setInputEquipoFutbol(EQUIPOFUTBOL);
    crearJugador.clickInputMinutosJugados();
    crearJugador.setInputMinutosJugados(MINUTOSJUGADOS);
    crearJugador.clickInputTorneoGanados();
    crearJugador.setInputTorneoGanados(TORNEOSGANADOS);
    crearJugador.clickInputGoles()
    crearJugador.setInputGoles(GOLES);
    //act    
    crearJugador.clickBotonRegistrarJugador();
   
    //assert
    const mensaje = crearJugador.getTextoSwal();
    expect(mensaje).toEqual(EL_JUGADOR_HA_SIDO_CREADO);
  });
      
});
