class OwnedVehicles{
    constructor(vehicles){
        this.vehicles = vehicles;
    }
    buyVehicle(vehicle){
        this.vehicles.push(vehicle);
    }
    showOwned(){
        console.log('Owned vehicles: ' + vehicles);
    }
}