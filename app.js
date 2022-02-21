class App {
    constructor(app) {
        this.app = app;
        this.screen = 1;
        this.menu = this.app.loadImage('Menu.png');
        this.buy = this.app.loadImage('Comprar.png');
        this.choose = this.app.loadImage('Escoger.png');
        this.brands = this.app.loadImage('Marcas.png');
        this.filters = this.app.loadImage('Filtros.png');
        this.owned = this.app.loadImage('Comprados.png');
        this.office = new Office('south');
    }
    application() {
        switch (this.screen) {
            case 1: //Menu
                this.app.image(this.menu, 0, 0, 1400, 900);
                break;
            case 2: //Escoger
                this.app.image(this.choose, 0, 0, 1400, 900);
                break;
            case 3: //Filtro
                this.app.image(this.filters, 0, 0, 1400, 900);
                break;
            case 4: // Marcas
                this.app.image(this.brands, 0, 0, 1400, 900);
                break;
            case 5: // Comprar
                this.app.image(this.buy, 0, 0, 1400, 900);
                break;
            case 6: // Comprados
                this.app.image(this.owned, 0, 0, 1400, 900);
                break;
        }
    }
    interaction() {
        switch (this.screen) {
            case 1: // Menu
                if (98 < mouseX && mouseX < 242 && 699 < mouseY && mouseY < 766) {
                    this.screen = 2;
                }
                if (314 < mouseX && mouseX < 457 && 699 < mouseY && mouseY < 766) {
                    this.screen = 6;
                }
                break;
            case 2: // Escoger
                if (107 < mouseX && mouseX < 429 && 412 < mouseY && mouseY < 518) {
                    this.screen = 3;
                }
                if (539 < mouseX && mouseX < 861 && 412 < mouseY && mouseY < 518) {
                    this.screen = 4;
                }
                if (971 < mouseX && mouseX < 1263 && 412 < mouseY && mouseY < 518) {
                    this.screen = 5;
                }
                break;
            case 3: // Filtros
                if (113 < mouseX && mouseX < 445 && 397 < mouseY && mouseY < 503) {
                    this.screen = 5;
                }
                if (539 < mouseX && mouseX < 861 && 397 < mouseY && mouseY < 503) {
                    this.screen = 5;
                }
                if (965 < mouseX && mouseX < 1287 && 397 < mouseY && mouseY < 503) {
                    this.screen = 5;
                }
                if (323 < mouseX && mouseX < 645 && 592 < mouseY && mouseY < 698) {
                    this.screen = 5;
                }
                if (755 < mouseX && mouseX < 645 && 592 < mouseY && mouseY < 1077) {
                    this.screen = 5;
                }
                break;
            case 4: // Marcas
                if (118 < mouseX && mouseX < 419 && 212 < mouseY && mouseY < 409) {
                    this.screen = 5;
                }
                if (572 < mouseX && mouseX < 779 && 212 < mouseY && mouseY < 409) {
                    this.screen = 5;
                }
                if (933 < mouseX && mouseX < 1218 && 212 < mouseY && mouseY < 409) {
                    this.screen = 5;
                }
                if (215 < mouseX && mouseX < 380 && 554 < mouseY && mouseY < 687) {
                    this.screen = 5;
                }
                if (599 < mouseX && mouseX < 1154 && 554 < mouseY && mouseY < 687) {
                    this.screen = 5;
                }
                break;
            case 5: // Comprar
                if (1067 < mouseX && mouseX < 1211 && 740 < mouseY && mouseY < 808) {
                    this.screen = 6;
                }
                break;
            case 6: // Comprados

                break;
        }
    }
    openMenu(){
        if (key === 'Q' || key === 'q') {
            this.screen = 1;
        }
    }
}