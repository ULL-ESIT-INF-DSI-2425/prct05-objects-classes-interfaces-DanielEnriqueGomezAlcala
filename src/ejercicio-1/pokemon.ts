export type PesoAltura = [number, string]
export type Statistics = [number, number, number, number]

export class Pokemon {
  private _name: string
  private _peso_altura: PesoAltura
  private _type: string[]
  private _statistics: Statistics

  constructor(name: string, peso_altura: PesoAltura, type: string[], statistics: Statistics) {
    this._name = name
    this._peso_altura = peso_altura
    this._type = type
    this._statistics = statistics
  }

  get name() {
    return this._name
  }

  get pesoAltura() {
    return this._peso_altura
  }

  get type() {
    return this._type
  }

  get statistics() {
    return this._statistics
  }

  set statistics(nueva: Statistics) {
    this._statistics = nueva
  }
}

// let pokemon1: Pokemon = new Pokemon("Charmander", [30, "100 cm"], ["Fuego"], [49, 49, 45, 45])
// let pokemon2: Pokemon = new Pokemon("Bulbasaur", [30, "100 cm"], ["Grass", "Poison"], [49, 49, 45, 45])
// console.log(pokemon1)
// console.log(pokemon2)