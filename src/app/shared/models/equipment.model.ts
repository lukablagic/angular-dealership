export class Equipment {
    airConditioning: boolean;
    cruiseControl: boolean;
    parkingSensors: boolean;
    powerSteering: boolean;
    powerWindows: boolean;
    powerMirrors: boolean;
    ABS: boolean;
    airbags: boolean;
    constructor( airConditioning: boolean,cruiseContorl: boolean,parkingSensors: boolean,powerSteering: boolean,powerWindows: boolean,powerMirrors: boolean,ABS: boolean,airbags: boolean) {
        this.airConditioning = airConditioning;
        this.cruiseControl = cruiseContorl;
        this.parkingSensors = parkingSensors;
        this.powerSteering = powerSteering;
        this.powerWindows = powerWindows;
        this.powerMirrors = powerMirrors;
        this.ABS = ABS;
        this.airbags = airbags;
      }
  }