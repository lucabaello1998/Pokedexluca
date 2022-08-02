
let buscar = document.getElementById("buscar")
let nombre = document.getElementById('name')
let height = document.getElementById('height')
let weight = document.getElementById('weight')
let type = document.getElementById('type')
let sprite = document.getElementById('sprite')
let input = document.getElementById('input')
let text = document.getElementById('text')
let random = document.getElementById('random')
let attack = document.getElementById('attack')
let defense = document.getElementById('defense')
let specialAttack = document.getElementById('special-attack')
let specialDefense = document.getElementById('special-defense')
let type1 = document.getElementById('type1')
let type2 = document.getElementById('type2')
let bordercolor=document.getElementById('card-sprite')

// fetch(`https://pokeapi.co/api/v2/pokemon/bibarel` )
//         .then(res => res.json())
//         .then(response => {
//             console.log(response)
//             mostrar(response)
//         }
//         )

randomPokemon()



function search(e){
    let pokemonN = text.value
    let pokemon = pokemonN.toLowerCase()
    e.preventDefault()
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}` )
        .then(res => res.json())
        .then(response => {
            console.log(response)
            mostrar(response)
        }
        )
}

// function mostrarPokemonPorTipo(tipo){
//     fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
//         .then(res => res.json())
//         .then(response => {
//             console.log(response.pokemon.map(p => p.pokemon.name).join(` | `))
// })}

function randomPokemon(){
    let randomPokemon = Math.floor(Math.random() * 807) + 1
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            mostrar(response)
        })
}


function mostrar(response){
    nombre.innerHTML = response.name
    height.innerHTML = response.height
    weight.innerHTML = response.weight
    type.innerHTML = response.types.map(type => type.type.name).join(' , ')
    sprite.style.backgroundImage = `url(${response.sprites.front_default})`
    attack.innerHTML = response.stats[0].base_stat
    defense.innerHTML = response.stats[1].base_stat
    specialAttack.innerHTML = response.stats[2].base_stat
    specialDefense.innerHTML = response.stats[3].base_stat
    let poketype1 = response.types[0].type.name
    let poketype2 = "null"
    if(response.types[1]){
        poketype2 = response.types[1].type.name
        type2.style.display = "block"
    }else{
        poketype2 = "null"
        type2.style.display = "none"
    }
    // if( poketype1 == "fire"){
    //     type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Fire_Type_Icon.svg)`
    switch(poketype1){
        case "normal":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Normal_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(168, 167, 122, 0.5)"

            break;
        case "fire":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Fire_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(238, 129, 48, 0.5)"
            break;
        case "water":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Water_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(99, 144, 240, 0.5)"
            break;
        case "electric":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Electric_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(247, 208, 44, 0.5)"
            break;
        case "grass":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Grass_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(122, 199, 76, 0.5)"
            break;
        case "ice":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Ice_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(150, 217, 214, 0.5)"
            break;
        case "fighting":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Fighting_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(194, 46, 40, 0.5)"
            break;
        case "poison":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Poison_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(163, 62, 161, 0.5)"
            break;
        case "ground":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Ground_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(226, 191, 101, 0.5)"
            break;
        case "flying":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Flying_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(169, 143, 243, 0.5)"
            break;
        case "psychic":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Psychic_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(249, 85, 135, 0.5)"
            break;
        case "bug":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Bug_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(166, 185, 26, 0.5)"
            break;
        case "rock":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Rock_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(182, 161, 54, 0.5)"
            break;
        case "ghost":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Ghost_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(115, 87, 151, 0.5)"
            break;
        case "dragon":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Dragon_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(111, 53, 252, 0.5)"
            break;
        case "dark":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Dark_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(112, 87, 70, 0.5)"
            break;
        case "steel":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Steel_Type_Icon.svg)`
            bordercolor.style.borderColor =  "rgba(183, 183, 206, 0.5)"
            break;
        case "fairy":
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Fairy_Type_Icon.svg)`
            bordercolor.style.borderColor = "rgba(214, 133, 173, 0.5)"
            break;
        default:
            type1.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Normal_Type_Icon.svg)`
    }switch(poketype2){
        case "normal":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Normal_Type_Icon.svg)`
            break;
        case "fire":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Fire_Type_Icon.svg)`
            break;
        case "water":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Water_Type_Icon.svg)`
            break;
        case "electric":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Electric_Type_Icon.svg)`
            break;
        case "grass":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Grass_Type_Icon.svg)`
            break;
        case "ice":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Ice_Type_Icon.svg)`
            break;
        case "fighting":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Fighting_Type_Icon.svg)`
            break;
        case "poison":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Poison_Type_Icon.svg)`
            break;
        case "ground":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Ground_Type_Icon.svg)`
            break;
        case "flying":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Flying_Type_Icon.svg)`
            break;
        case "psychic":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Psychic_Type_Icon.svg)`
            break;
        case "bug":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Bug_Type_Icon.svg)`
            break;
        case "rock":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Rock_Type_Icon.svg)`
            break;
        case "ghost":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Ghost_Type_Icon.svg)`
            break;
        case "dragon":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Dragon_Type_Icon.svg)`
            break;
        case "dark":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Dark_Type_Icon.svg)`
            break;
        case "steel":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Steel_Type_Icon.svg)`
            break;
        case "fairy":
            type2.style.backgroundImage = `url(assets/img/badget-type/Pokémon_Fairy_Type_Icon.svg)`
            break;
        default:
            type2.style.display = "none"
} }

buscar.addEventListener('click', search)
random.addEventListener('click', randomPokemon)