export class SensorData {
  private _timeStamp: string;
  private _waterTemp: number;
  private _airTemp: number;
  private _pH: number;
  private _conductivity: number;
  private _dissolvedOxygen: number;
  private _oxidation: number;
  private _ammonium: number;
  private _deviceID: string;

  get pH(): number {
    return this._pH;
  }

  set pH(value: number) {
    this._pH = value;
  }

  get conductivity(): number {
    return this._conductivity;
  }

  set conductivity(value: number) {
    this._conductivity = value;
  }

  get dissolvedOxygen(): number {
    return this._dissolvedOxygen;
  }

  set dissolvedOxygen(value: number) {
    this._dissolvedOxygen = value;
  }

  get oxidation(): number {
    return this._oxidation;
  }

  set oxidation(value: number) {
    this._oxidation = value;
  }

  get ammonium(): number {
    return this._ammonium;
  }

  set ammonium(value: number) {
    this._ammonium = value;
  }

  get deviceID(): string {
    return this._deviceID;
  }

  set deviceID(value: string) {
    this._deviceID = value;
  }

  get timeStamp(): string {
    return this._timeStamp;
  }

  set timeStamp(value: string) {
    this._timeStamp = value;
  }

  get waterTemp(): number {
    return this._waterTemp;
  }

  set waterTemp(value: number) {
    this._waterTemp = value;
  }

  get airTemp(): number {
    return this._airTemp;
  }

  set airTemp(value: number) {
    this._airTemp = value;
  }
}
