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
    //act    

    //assert
    expect(8).toBe(gridJugadores.contarJugadores());  
  }); 

});