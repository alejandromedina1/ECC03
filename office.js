class Office {
    constructor(name) {
        this.name = name;
        this.inventory = []
        this.app = app;
        this.skins = [
            loadImage('a4.png'),
            loadImage('a6.png'),
            loadImage('cx-30.png'),
            loadImage('mazda 3.png'),
            loadImage('sentra.png'),
            loadImage('versa.png'),
            loadImage('CB-190R.png'),
            loadImage('X-Blade.png'),
            loadImage('MT09.png'),
            loadImage('MT10.png'),
            loadImage('Niken.png'),
        ];
        this.init();
    }
    showOffices() {
        console.log(this.name);
    }
   
    init() {
        this.inventory.push(new OfficeInventory([
            new Car({
                brand: 'Audi',
                model: 'A4',
                engine: 'V12',
                capacity: 5,
                warranty: 5,
                taxes: 20,
                gearbox: 'Manual',
                fuelType: 'Premium',
                FuelCapacity: 14.3,
                price: 45000,
            }),
            new Car({
                brand: 'Audi',
                model: 'A6',
                engine: 'V12',
                capacity: 5,
                warranty: 5,
                taxes: 25,
                gearbox: 'Manual',
                fuelType: 'Premium',
                FuelCapacity: 18,
                price: 46000,
            }),
            new Car({
                brand: 'Mazda',
                model: 'CX-30',
                engine: 'SKYACTIV - G 2.5',
                capacity: 5,
                warranty: 5,
                taxes: 15,
                gearbox: 'Auto',
                fuelType: 'Corriente',
                FuelCapacity: 12.6,
                price: 24000,
            }),
            new Car({
                brand: 'Mazda',
                model: 'Mazda 3',
                engine: 'SKYACTIV - G 1.5',
                capacity: 5,
                warranty: 5,
                taxes: 7,
                gearbox: 'Manual',
                fuelType: 'Corriente',
                FuelCapacity: 13.4,
                price: 22000,
            }),
            new Car({
                brand: 'Nissan',
                model: 'Sentra',
                engine: '2.0',
                capacity: 5,
                warranty: 5,
                taxes: 8,
                gearbox: 'Auto',
                fuelType: 'Corriente',
                FuelCapacity: 12.4,
                price: 1000,
            }),
            new Car({
                brand: 'Nissan',
                model: 'Versa',
                engine: '1.6',
                capacity: 5,
                warranty: 5,
                taxes: 5,
                gearbox: 'Auto',
                fuelType: 'Corriente',
                FuelCapacity: 10.8,
                price: 23000,
            }),
            new Motorbike({
                brand: 'Honda',
                model: 'CB-190R',
                engine: '4T - OHC',
                capacity: 2,
                warranty: 2,
                taxes: 2,
                gearbox: 'Auto',
                fuelType: 'Extra',
                FuelCapacity: 4.8,
                price: 2935,
            }),
            new Motorbike({
                brand: 'Honda',
                model: 'X-Blade',
                engine: '',
                capacity: 2,
                warranty: 2,
                taxes: 2,
                gearbox: 'Manual',
                fuelType: 'Extra',
                FuelCapacity: 18,
                price: 2540,
            }),
            new Motorbike({
                brand: 'Yamaha',
                model: 'MT09',
                engine: '4 DOHC',
                capacity: 2,
                warranty: 3,
                taxes: 5,
                gearbox: 'Auto',
                fuelType: 'Extra',
                FuelCapacity: 18,
                price: 12000,
            }),
            new Motorbike({
                brand: 'Yamaha',
                model: 'MT10',
                engine: '4 DOHC',
                capacity: 1,
                warranty: 3,
                taxes: 5,
                gearbox: 'Auto',
                fuelType: 'Extra',
                FuelCapacity: 18,
                price: 17000,
            }),
            new Motorbike({
                brand: 'Yamaha',
                model: 'Niken',
                engine: '4 DOHC',
                capacity: 1,
                warranty: 3,
                taxes: 5,
                gearbox: 'Auto',
                fuelType: 'Extra',
                FuelCapacity: 18,
                price: 21000,
            }),
        ]))
    }
}