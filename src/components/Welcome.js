import PropTypes from 'prop-types'; //Import du package prop-types pour pouvoir utiliser les types sur les propriétés
import './Welcome.css';
import styleWelcome from './Welcome.module.css';

const Welcome = (props) => {
    const { pouet, truc, test, monNombrePref } = props;

    console.log(props);

    return (
        <div>
            <h1 className='Txt-Red'>Bonjour {pouet}</h1>
            <h2 className={styleWelcome.maSuperClasse}>Bienvenue {test}</h2>
            <p>{truc}</p>
            <p>Mon nombre préféré est {monNombrePref}</p>
        </div>
    )
}

//Pour les valeurs par défaut des props :
//Les propriétés prendront ces valeurs par défaut si on ne les fournit pas lorsqu'on appelle le composant dans App.js
Welcome.defaultProps = {
    pouet : "Oui", //Ici, pouet n'était pas fourni, elle prendra la valeur "Oui"
    truc : "Un truc" //Comme on a fournit "bidule" dans truc, lors de l'appel, cela va écraser "Un truc" qui a été mis par défaut
}

//Pour définir les types des props :
Welcome.propTypes = {
    //nomPropriété : Type
    pouet : PropTypes.string,
    truc : PropTypes.string,
    test : PropTypes.string,
    monNombrePref : PropTypes.number,
}

export default Welcome;