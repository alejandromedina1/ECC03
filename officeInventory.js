class OfficeInventory {
    constructor(vehicles) {
        this.vehicles = vehicles;
    }
    showInventory() {
        console.log('Vehicles available: ' + this.vehicles);
    }
    showAllBrands() {
        console.log('Brands available' + this.vehicles.brand);
    }
    getCheapest() {
        let cheapest = this.vehicles[0];
        for (let i = 0; i < this.vehicles.length; i++) {
            if (cheapest.price > this.vehicles[i].price) {
                cheapest.price = this.vehicles[i].price;
            }
        }
        console.log(cheapest.model);
    }
}