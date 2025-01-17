import React from 'react';

export default function Characters(props) {
    const {characters, setCharacters} = props;

    const resetCharacters = () => {
        //console.log("Reseteando");
        setCharacters(null);
    }
    console.log(props); console.log(characters);

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>
                Volver a la home
                </span>
            <div className="container-characteres">
                {characters.map((character,index)=> ( //Recorro y return implicito            //<p>{character.name}</p>
                    <div className="character-container" key={index}> 
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                <div>
                    <h3>{character.name}</h3>  
                <h6>
                    {character.status=== "Alive" ? (
                        <>
                            <span className="Alive"/>
                            Alive
                        </>
                    ) : (
                        <>
                            <span className="Dead"/>
                            Dead
                        </>
                    )}
                </h6>
                <p>
                    <span className="text-grey">Episodios: </span>
                    <span>{character.episode.length}</span>
                </p>
                <p>
                    <span className="text-grey">Especie: </span>
                    <span>{character.species}</span>
                </p>
                </div>
            </div>//arriba recupera datos de la api
           ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>
                Volver a la home 
            </span>
        </div>
    );
}