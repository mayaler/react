import {useState} from 'react'

const DemoStateForm = () => {
    const [prenom, setPrenom] = useState()
    const [nom, setNom] = useState()

    const changeNom = (event) => {
        // let nom = event.target.value
        // console.log(nom);
        setNom(event.target.value);
    }

    const changePrenom = (event) => {
        // let prenom = event.target.value
        // console.log(prenom);
        setPrenom(event.target.value);
    }

    return (
        <div>
            <p>Bienvenue {prenom} {nom}</p>
            <input type="text" placeholder="Votre nom" onBlur={changeNom} />
            <input type="text" placeholder="Votre prénom" onBlur={changePrenom}/>
        </div>
    ) 

}

export default DemoStateForm;