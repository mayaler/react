import { useState } from "react"

const DemoForm1 = () => {
    const [msg, setMsg] = useState()
    const [commentaire, setCommentaire] = useState("Votre commentaire :)")
    const [nationalite, setNationalite] = useState("")
    const [celib, setCelib] = useState(false)

    const soumettreForm = (event) => {
        //On désactive le comportement de base l'évènement
        //Puisque l'event type submit par défaut, essaie d'envoyer le formulaire, recharge la page et vide le formulaire
        event.preventDefault()
        console.log("C'est envoyé ✉")
        //On ne veut plus envoyer le formulaire de façon "classique", on fera toutes nos vérifications avant d'envoyer en base de données
        console.log(msg);
        console.log(commentaire);
        console.log(nationalite);
        console.log(celib)
    }

    return (
        //onSubmit : evènement qui se déclenche quand on appuie sur l'input de type submit
        <form onSubmit={soumettreForm}>
            <h2>Input type texte</h2>
            <label htmlFor="msg">Entrez votre message : </label>
            {/* Avant on passait par une fonction qu'on avait déclarée dans une constante au dessus, on peut toujours, c'est juste long et comme un formulaire en général, c'est long, on va s'épargner la création d'autant de fonctions qu'on a d'inputs */}
            <input id="msg" type="text" onChange={(event) => {setMsg(event.target.value)}} />
            <p>Votre message est : {msg}</p>

            <h2>Textarea</h2>
            <label htmlFor="commentaire">Entrez votre commentaire :</label>
            <textarea id="commentaire" value={commentaire} onChange={(event) => {setCommentaire(event.target.value)}}  />
            <p>Votre commentaire  est : { commentaire }</p>

            <h2>Select</h2>
            <label htmlFor="nationalite">Selectionnez votre nationalité : </label>
            <select id="nationalite" value={nationalite} onChange={(event) => {setNationalite(event.target.value)}}>
                <option value="" hidden>Choisissez une nationalité</option>
                <option value="française">Française</option>
                <option value="belge">Belge</option>
                <option value="espagnole">Espagnole</option>
            </select>
            <p>Votre nationalité est : {nationalite}</p>

            <h2>Checkbox</h2>
            {/* Vigilance ! Pour récupérer la valeur du type checkbox, ce n'est plus dans event.target.value comme les autres mais event.target.checked */}
            <input id="celib" type="checkbox" onChange={(event) => {setCelib(event.target.checked)}}  />
            <label htmlFor="celib">Êtes-vous célibataire ?</label>
            <p>{(celib) ? "Coeur à prendre (Ou pas) ♥ " : "Coeur déjà pris 🔒"}</p>

            <input type="submit" value="Envoyer le formulaire" />
        </form>
    )
}


export default DemoForm1