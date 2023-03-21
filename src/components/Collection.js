
const Collection = (props) => {
    const { nomFormateurs } = props

    //Deuxième méthode : stocker le résultat du .map dans une constante et d'utiliser cette constante dans le rendu du composant
    //Version sans key -> console qui râle 😠
    // const mesLi = nomFormateurs.map(nom => <li> {nom} </li>)
    //Version avec key -> console contente 😊
    const mesLi = nomFormateurs.map((nom, index )=> <li key={index}> {nom} </li>)
    //BestPractice : Toujours mettre une key unique, stable (un id en db par ex) et si pas d'id, comme notre cas actuel, la key peut être l'index des éléments du tableau

    return (
        <ul>
            {/* Pour chacun des noms de formateurs, crée un li contenant le nom */}
            {/* Première façon de faire : Mettre le .map directement dans le rendu du composant */}
            {/* { nomFormateurs.map(nom => <li> {nom} </li>) } */}

            {/* Avec deuxième méthode */}
            { mesLi }
        </ul>
    )

}

export default Collection