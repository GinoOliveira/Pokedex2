import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";
import Modelo from './modalPokemon';

const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const {pokemon} = props;
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
    const tipo = pokemon.types[0].type.name;
    let fundo = '';
    switch (tipo) {
    case 'normal':
        fundo = 'normal'
        break;
    case 'electric':
        fundo = 'electric'
        break;
    case 'water':
        fundo = 'water'
        break;
    case 'fire':
        fundo = 'fire'
        break;
    case 'grass':
        fundo = 'grass'
        break;
    case 'ice':
        fundo = 'ice'
        break;
    case 'bug':
        fundo = 'bug'
        break;
    case 'fighting':
        fundo = 'fighting'
        break;
    case 'ground':
        fundo = 'ground'
        break;
    case 'rock':
        fundo = 'rock'
        break;
    case 'poison':
        fundo = 'poison'
        break;
    case 'psychic':
        fundo = 'psychic'
        break;  
    case 'ghost':
        fundo = 'ghost'
        break;
    case 'fairy':
        fundo = 'fairy'
        break; 
    case 'dragon':
        fundo = 'dragon'
        break;           
    default:
        fundo = 'normal'
    }
    

  if(pokemon.name == 'nidoran-m'){
    pokemon.name = 'nidoran_m'
  }
  if(pokemon.name == 'nidoran-f'){
    pokemon.name = 'nidoran_f'
  }
  if(pokemon.name == 'mr-mime'){
    pokemon.name = 'mr.mime'
  }
  let urlApi = `https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`
 
  let dados = [pokemon.name, fundo];
    return (
    <div className={fundo}>
        <div className="pokemon-card">
        <div className="pokemon-image-container">
            <img alt={pokemon.name} src={urlApi} className="pokemon-image"/>
        </div>
        <div className="card-body">
            <div className="card-top">
                <h3> {pokemon.name}</h3>
                <Modelo value={dados} />
            </div>
            <div className="card-bottom">
                <div className="pokemon-type">
                    {pokemon.types.map((type, index) => {
                        return (
                            <div key={index} className="pokemon-type-text">{type.type.name}</div>
                        )
                    })}
                </div>
                <button className="pokemon-heart-btn" onClick={onHeartClick}>
                    {heart}
                </button>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Pokemon;