import { Pokemon, PesoAltura, Statistics } from "./pokemon"

export class Pokedex {
  private _pokemon: Pokemon[]

  constructor(info: Pokemon[]) {
    this._pokemon = info
  }

  addPokemon(pokemon: Pokemon): void {
    this._pokemon.push(pokemon)
  }

  getAllPokemon() {
    return this._pokemon
  }

  searchPokemon(type: string): Pokemon[] | undefined {
    let aux: Pokemon[] = []
    aux = this._pokemon.filter(i => {
      return i.type.includes(type)
    })
    return aux.length === 0 ? undefined : aux
  }
}

// let pokemon1: Pokemon = new Pokemon("Charmander", [30, "100 cm"], ["Fuego"], [49, 49, 45, 45])
// let pokemon2: Pokemon = new Pokemon("Bulbasaur", [30, "100 cm"], ["Grass", "Poison"], [49, 49, 45, 45])
// let pokemon3: Pokemon = new Pokemon("Charmeleon", [30, "100 cm"], ["Fuego"], [49, 49, 45, 45])
// let pokedex: Pokedex = new Pokedex([pokemon1, pokemon2])
// pokedex.addPokemon(pokemon3)

// console.log(pokedex.searchPokemon("Fuego"))
