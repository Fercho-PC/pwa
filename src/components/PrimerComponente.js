import React, {useState} from 'react';

const PrimerComponente = () => {
    //let nombre = "paco";
    let webos = "nanay.com";

    const [nombre, setNombre]= useState("Pedro");
    let cursos =[
        "No soy paco",
        "Si soy paco",
        "Paco eres tu",
        "Todos somos paco"
    ];
    const cambiarNombre =(nuevoNombre)=>{
        setNombre(nuevoNombre)
    }
  return (
    <div>
        <h1>mi primer component</h1>
        <p>Este es un component</p>
        <p>Mi nombre es:<strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
        <p>Mi web es: {webos}</p>
        <input type='text' onChange={e => cambiarNombre(e.target.value)} placeholder></input>
        <button onClick={ e => cambiarNombre("Paco")}>
            cambiarNombre
        </button>
        <button onClick={e => {
            console.log("el valor es", nombre);
        }}>
            mostrar estado
        </button>

        <h2>
            No lo se Tu dime.
        </h2>
        <ul>
            {
                cursos.map((cursos, indice)=> {
                    return(<li key={indice}>
                        {cursos}
                    </li>)
                })
            }
        </ul>












    </div>
  )
}

export default PrimerComponente
