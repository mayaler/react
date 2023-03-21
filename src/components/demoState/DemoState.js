import { useState } from "react"


const DemoState = () => {
    //useState() -> la valeur par défaut sera undefined (attention à ce que vous en ferez)
    //useState(valeur) -> initialise votre variable avec la valeur (number, string etc)

    //En premier on a toujours la valeur utilisable dans le componant
    //En deuxième la fonction qui va nous aider à modifier la valeur définie juste avant
    //Vous mettez les noms que vous voulez, souvent on met nomVariable , setNomVariable
    const [value, setValue] = useState(1)   
    
    const multiplier2 = () => {
        //la méthode setValue qu'on a obtenu du useState va mettre à jour la variable value
        //Elle prend en paramètre la valeur précédente et la transforme en autre chose
        //ex : prevValue => prevValue * 2 (va transformer elle même en elle même * 2)
        //     prevValue => 50 (va transformer elle même en 50)
        setValue(prevValue => prevValue * 2)
    }
    
    const reset = () => {
        //Si je veux mettre une valeur totalement arbitraire :
        //setValue(prevValue => 1);
        //Les deux font la même chose
        setValue(1)
    }

    return (
        <div>
            <p>La valeur est {value}</p>
            <button onClick={multiplier2}>Multiplier par 2</button>
            <button onClick={reset}>Remettre à 1</button>

        </div>
    )
}

export default DemoState