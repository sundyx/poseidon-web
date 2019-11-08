export class SensorData {
  private _timeStamp: string;
  private _waterTemp: number;
  private _airTemp: number;

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
