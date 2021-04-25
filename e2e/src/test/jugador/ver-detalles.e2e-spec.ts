import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { GridJugadores } from "../../page/grid-jugadores/grid-jugadores.po";
import { VerDetalles } from "../../page/ver-detalles/ver-detalles.po";


describe("Ver detalles", () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let gridJugadores: GridJugadores;
    let verDetalles: VerDetalles;
    const VALORACION_EXISTOSA = "El jugador ha sido valorado.";
    const CALIFICACION_EXISTOSA = "El jugador ha sido calificado.";

  beforeEach(() => {
      page = new AppPage();
      navBar = new NavbarPage();
      gridJugadores = new GridJugadores();
      verDetalles = new VerDetalles();
    });

  it("Deberia valorar Jugador", () => {
    //arrange
    const VALORIZACION = 5000000;
   
    page.navigateTo();
    navBar.clickBotonNavBarJugadores();
    gridJugadores.clickVerDetalleJugador();
    browser.sleep(500);

    verDetalles.clickBotonAbrirModalValorizar();
    browser.sleep(500);    
    verDetalles.clickInputValorizacion();
    verDetalles.setInputValorizacion(VALORIZACION);
    browser.sleep(500);
    //act   
    verDetalles.clickBotonRegistrarValorizacion();
    browser.sleep(500);
    //assert
    const mensaje = verDetalles.getTextoSwal();
    expect(mensaje).toEqual(VALORACION_EXISTOSA);
    browser.sleep(300);
  });

  it("Deberia calificar Jugador", () => {
    //arrange
    const MINUTOSJUGADOS = 0;
    const TORNEOSGANADOS = 0;
    const GOLES = 0;

    page.navigateTo();
    navBar.clickBotonNavBarJugadores();
    gridJugadores.clickVerDetalleJugador();
    browser.sleep(500);
    verDetalles.clickBotonAbrirModalCalificar()
    browser.sleep(500);

    verDetalles.clickInputMinutosJugados();
    verDetalles.setInputMinutosJugados(MINUTOSJUGADOS);
    browser.sleep(500);
    verDetalles.clickInputTorneoGanados();
    verDetalles.setInputTorneoGanados(TORNEOSGANADOS);
    browser.sleep(500);
    verDetalles.clickInputGoles()
    verDetalles.setInputGoles(GOLES);
    browser.sleep(500);
    //act   
    verDetalles.clickBotonRegistrarCalificar();
    browser.sleep(500);

    const mensaje = verDetalles.getTextoSwal();
    expect(mensaje).toEqual(CALIFICACION_EXISTOSA);
    browser.sleep(300);

    });
      
});
