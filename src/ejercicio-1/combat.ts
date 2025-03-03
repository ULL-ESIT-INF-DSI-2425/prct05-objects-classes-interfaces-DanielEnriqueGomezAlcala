import { Pokemon, PesoAltura, Statistics } from "./pokemon"

export class Combat {
  private _pokemon1: Pokemon
  private _pokemon2: Pokemon

  constructor(pkm1: Pokemon, pkm2: Pokemon) {
    this._pokemon1 = pkm1
    this._pokemon2 = pkm2
  }

  getEfectividad(atacante: string, defensor: string): number {
    switch(atacante) {
      case "Fuego":
        switch(defensor) {
          case "Hierba": return 2 
          case "Agua": return 0.5
          case "Eléctrico": return 1 
          case "Fuego": return 1
        }
      case "Agua":
        switch(defensor) {
          case "Hierba": return 0.5 
          case "Agua": return 1
          case "Eléctrico": return 0.5 
          case "Fuego": return 2
        }
      case "Hierba":
        switch(defensor) {
          case "Hierba": return 1
          case "Agua": return 2
          case "Eléctrico": return 1 
          case "Fuego": return 0.5
        }
      case "Eléctrico":
        switch(defensor) {
          case "Hierba": return 1 
          case "Agua": return 2
          case "Eléctrico": return 1 
          case "Fuego": return 1
        }
      default: return 0
    }
  }

  start(): void {
    let atacante: Pokemon = this._pokemon1
    let defensor: Pokemon = this._pokemon2
    let ronda: number = 1

    while(this._pokemon1.statistics[3] > 0 && this._pokemon2.statistics[3] > 0) {
      console.log(`Turno ${ronda}: ${atacante.name} ataca a ${defensor.name}`);
      let damage: number = 50 * (atacante.statistics[0] / defensor.statistics[1]) * this.getEfectividad(atacante.type[0], defensor.type[0])
      damage = Math.floor(damage)
      defensor.statistics[3] = defensor.statistics[3] - damage
      console.log(`${defensor.name} recibe ${damage} de daño. HP restante: ${defensor.statistics[3]}`);

      if (defensor.statistics[3] <= 0) {
        console.log(`${defensor.name} ha sido derrotado. ¡${atacante.name} gana el combate!`);
        break
      }
      [atacante, defensor] = [defensor, atacante]; // Cambio de turnos
      ronda++;
    }
  }
}

// let pokemon1: Pokemon = new Pokemon("Charmander", [30, "100 cm"], ["Fuego"], [52, 43, 45, 39])
// let pokemon2: Pokemon = new Pokemon("Bulbasaur", [30, "100 cm"], ["Hierba", "Poison"], [49, 49, 45, 45])

// let combate: Combat = new Combat(pokemon1, pokemon2)
// combate.start()