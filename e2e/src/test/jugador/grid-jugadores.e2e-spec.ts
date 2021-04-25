import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { GridJugadores } from "../../page/grid-jugadores/grid-jugadores.po";

describe("Listar jugadores", () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let gridJugadores: GridJugadores;

  beforeEach(() => {
      page = new AppPage();
      navBar = new NavbarPage();
      gridJugadores = new GridJugadores();
    });

  it("Deberia listar Jugador", () => {
    //arrange   
    page.navigateTo();
    navBar.clickBotonNavBarJugadores();
    gridJugadores.clickBotonCrearJugador();
    browser.sleep(500);   
    //act    

    //assert
    expect(1).toBe(gridJugadores.contarJugadores());
    browser.sleep(300);
  }); 

});