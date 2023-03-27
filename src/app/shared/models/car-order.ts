export class CarOrder {
    id: string;
    carId: string;
    uid: string;
    date: string;
    constructor(carId: string, uid: string, date?: string) {
        this.carId = carId;
        this.uid = uid;
        this.date = date;
    }
    toObject() {
        return {
            carId: this.carId,
            uid: this.uid,
            date: this.date,
        };
    }
}
