(() => {
    
    interface Client {
        name: string;
        age?: number;
        address: Address
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }
    
    const client: Client = {
        name: 'Jhonatan',
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 120,
            city: 'Toronto',
            zip: 'AW 441'
        }
    }
    
})();