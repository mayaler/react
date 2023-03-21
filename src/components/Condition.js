import PropTypes from "prop-types"

const Condition = (props) => {
    const { possedeAnimal, nomAnimal, estChien } = props

    //Première façon de faire du rendu conditionnel  -> le if
    //Permet de faire deux blocs de rendus différents, selon une expression booléenne
    if(possedeAnimal) {
        return (
            <div>
                <p>Vous possédez un petit compagnon 🐈🐕</p>
                {/* Une autre façon de faire du rendu conditionnel -> le coalesce */}
                {/* A privilégier pour afficher autre chose si la valeur n'existe pas */}
                {/* Coalesce : Essaye de lire la valeur présente dans nomAnimal : S'il y a une, l'affichera. Si nomAnimal est undefined ou null, affichera ce que vous avez mis après les || */}
                <p> Son petit nom est : { nomAnimal || "Oh, il n'a pas de nom" }  </p>
                {/* En gros, il fait ça mais en court :
                if(nomAnimal != undefined && nomAnimal != null){
                    nomAnimal
                }
                else {
                    "Oh il n'a pas de nom"
                } */}

                {/* Troisième méthode pour le rendu conditionel : la ternaire */}
                {/* (condition est vraie) ? 'si oui' : 'si non' */}
                {
                    (estChien) ? //Est-ce que estChien est vrai ?
                    <img className="icon" src="./assets/images/dog.png" alt="icone de chien" />  //si oui : c'est l'image avec la source chien
                    :
                    <img className="icon" src="./assets/images/cat.png" alt="icone de chat"/> //si non : c'est l'image avec la source chat
                }
            </div>
        )
    }
    else {
        return (
            <div>
                <p>Oh, vous ne possédez pas d'animal 😢</p>
                <a href="https://www.sanscollier.be/" rel="noreferrer" target="_blank">Voulez-vous en adopter un ?</a>
            </div>
        )
    }
}

//Paramétrage des types que prendront les props
Condition.propTypes = {
    possedeAnimal : PropTypes.bool,
    nomAnimal : PropTypes.string,
    estChien : PropTypes.bool
}

export default Condition