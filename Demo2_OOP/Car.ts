class Car {
  private id: number;
  private color: string;
  private door: number;

  public getId(): number {
    return this.id;
  }

  public getColor(): string {
    return this.color;
  }

  public getDoor(): number {
    return this.door;
  }

  public setId(value: number) {
    this.id = value;
  }

  public setColor(value: string) {
    this.color = value;
  }

  public setDoor(value: number) {
    this.door = value;
  }
}
