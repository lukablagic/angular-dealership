export class Equipment {

    airConditioning?: boolean;
    cruiseControl?: boolean;
    parkingSensors?: boolean;
    powerSteering?: boolean;
    powerWindows?: boolean;
    powerMirrors?: boolean;
    ABS?: boolean;
    airbags?: boolean;
    constructor( ) {
      this.airConditioning = false;
        this.cruiseControl = false;
        this.parkingSensors = false;
        this.powerSteering = false;
        this.powerWindows = false;
        this.powerMirrors = false;
        this.ABS = false;
        this.airbags = false;
      }


      toObject() {
        return {
            airConditioning: this.airConditioning,
            cruiseControl: this.cruiseControl,
            parkingSensors: this.parkingSensors,
            powerSteering: this.powerSteering,
            powerWindows: this.powerWindows,
            powerMirrors: this.powerMirrors,
            ABS: this.ABS,
            airbags: this.airbags,
        };
    }
  }