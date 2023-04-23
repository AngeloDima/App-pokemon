import React, { useState, useEffect } from 'react';
import './ciao.css';
const Ciao = () => {

    const [data, setData] = useState({})
    const [gene, setGene] = useState({})
    const [nome, setNome] = useState('')

    const ApiPokemon = (event) => {
        event.preventDefault();
        if (nome) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
        }
    };

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then((response) => response.json())
        .then((gene) => setGene(gene))
        .catch((error) => console.log(error));
    }, []);

    useEffect(() =>{
        console.log("aggiorno")
    },[data])

    const input = (event) => {
        setNome(event.target.value)
    }

    console.log(data)

    return (
        <div className='Container'>
            
            <form className='Form' action="" onSubmit={ApiPokemon}>
                <input type="text" value={nome} onChange={input} placeholder='Inserisci un nome'/>
                <button>Click!</button>


                <div className="specifico">
                    
                    <div className="boxScelto">
                    <h3>Pokemon scelto</h3>

                        <h1 className='mar'>{data.name}</h1>
                        {data.abilities && data.abilities[0] && (
                            <h1>{data.abilities[0].ability.name}</h1>
                        )}
                        <img src={data.sprites && data.sprites.front_default} alt="" />

                    </div>
                </div>
            </form>

            <div className="generale">
                {gene.results && (
                    <div className='spaz' >
                        {gene.results.map((gene) => (
                            <div key={gene.name} className='box'>
                                <h2>{gene.name}</h2>
                                
                            </div>
                            
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default Ciao;






