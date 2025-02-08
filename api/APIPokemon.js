const url = 'https://api.tcgdex.net/v2/en'

const getAllPokemonCards = async () => {
    const res = await fetch(`${url}/cards`)
    return res.json()
}

const getPokemonSingleCard = async (pokemon) => {
    const res = await fetch(`${url}/cards/${pokemon}`)
    return res.json()
}

export const APIPokemon = {
    getAllPokemonCards,
    getPokemonSingleCard
}

