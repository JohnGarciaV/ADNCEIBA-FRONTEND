import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { GridJugadores } from "../../page/grid-jugadores/grid-jugadores.po";
import { VerDetalles } from "../../page/ver-detalles/ver-detalles.po";
import { Modal } from "../../page/modal.po";

describe("Ver detalles", () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let gridJugadores: GridJugadores;
    let verDetalles: VerDetalles;
    let modal: Modal;
    const VALORACION_EXISTOSA = "El jugador ha sido valorado.";
    const CALIFICACION_EXISTOSA = "El jugador ha sido calificado.";

  beforeEach(() => {
      page = new AppPage();
      navBar = new NavbarPage();
      gridJugadores = new GridJugadores();
      verDetalles = new VerDetalles();
      modal = new Modal();
    });

  it("Deberia valorar Jugador", () => {
    //arrange
    const VALORIZACION = 0;
   
    page.navigateTo();
    gridJugadores.clickVerDetalleJugador();    

    verDetalles.clickBotonAbrirModalValorizar();     
    modal.clickInputValorizacion();
    modal.limpiarValorizacion();
    modal.setInputValorizacion(VALORIZACION);    
    //act   
    modal.clickBotonRegistrarModal();    
    //assert
    const mensaje = verDetalles.getTextoSwal();
    expect(mensaje).toEqual(VALORACION_EXISTOSA);    
  });

  it("Deberia calificar Jugador", () => {
    //arrange
    const MINUTOSJUGADOS = 90;
    const TORNEOSGANADOS = 0;
    const GOLES = 3;

    page.navigateTo();
    navBar.clickBotonNavBarJugadores();
    gridJugadores.clickVerDetalleJugador();    
    verDetalles.clickBotonAbrirModalCalificar();
    modal.clickInputMinutosJugados();
    modal.setInputMinutosJugados(MINUTOSJUGADOS);    
    modal.clickInputTorneoGanados();
    modal.setInputTorneoGanados(TORNEOSGANADOS);    
    modal.clickInputGoles()
    modal.setInputGoles(GOLES);    
    //act   
    modal.clickBotonRegistrarModal();    

    const mensaje = verDetalles.getTextoSwal();
    expect(mensaje).toEqual(CALIFICACION_EXISTOSA);    

    });
      
});
