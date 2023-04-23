

import React, { useState, useEffect } from 'react';

const Ciao = () => {

    const [name, setName] = useState('');
    const [data, setData] = useState({});

    // useEffect(() => {
        

    // },[name])
    const prova = (event) => {
        event.preventDefault()
        if(name){
            fetch(`https://api.agify.io?name=${name}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error))
        }
    }


    useEffect(() =>{
        console.log("i dati sono stati aggiornati")
    }, [data])

    const handleInputChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <form action="" onSubmit={prova} >
                <input type="text" value={name} onChange={handleInputChange} placeholder="Inserisci il nome" />
                {data.age && <h1>{data.age}</h1>}
            </form>
        </div>
    );
};

export default Ciao;
