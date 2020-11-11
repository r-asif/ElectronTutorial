export class DataService {
    private cars: string[] = ['Tesla', 'Kia', 'Hyundai'];

    public getCars(): string[] {
        return this.cars;
    }
}