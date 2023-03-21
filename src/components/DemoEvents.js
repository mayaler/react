
const DemoEvents = () => {


     
    // const clickButton = function() {
    //     console.log("Oulala tu m'as cliqué dessus 😳")
    // }
    //Ok aussi, même chose que ↓

    const clickButton = () => {
        console.log("Oulala tu m'as cliqué dessus 😳");
    }

    const changeValue = function(event) {
        //Pour récupérer la valeur tapée dans l'input
        //event contient plein d'infos sur l'évènement d'éclenché
        //dans event.target, on obtient la "cible" qui a déclenché l'évènement (donc l'élément html, ici notre input)
        let prenom = event.target.value
        console.log(`Bonjour ${prenom} !`);
    }

    // const changeValue = (event) => {
        //let prenom = event.target.value
        //console.log(`Bonjour ${prenom} !`);
    // }

    return (
        <div>
            <button onClick={clickButton}>Clique sur moi 😏</button>
            {/* onChange : Déclenche la fonction chaque fois que la valeur de l'input est changée  */}
            <input type="text" placeholder="Entrez votre prénom" onChange={changeValue} />
            {/* onBlur : Déclence la fonction chaque fois qu'on clique en dehors de l'input */}
            <input type="text" placeholder="Entrez votre prénom" onBlur={changeValue} />
        </div>
    )

}

export default DemoEvents;