export interface Equipment {
  airConditioning: boolean;
  cruiseControl: boolean;
  parkingSensors: boolean;
  powerSteering: boolean;
  powerWindows: boolean;
  powerMirrors: boolean;
  ABS: boolean;
  airbags: boolean;
}
export class Car {
id?: string;
  model?: string;
  price?: number;
  year?: number;
  mileage?: number;
  fuel?: string;
  transmission?: string;
  engineSize?: number;
  equipment?: Equipment;
}
