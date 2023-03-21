import FormateurCard from "./FormateurCard"

const ListeFormateurs = (props) => {
    const { listeFormateurs } = props
    
    // const cards = listeFormateurs.map(formateur => 
    //     <FormateurCard key={formateur.id} lastname={formateur.lastname} firstname={formateur.firstname} birthdate={formateur.birthdate} avatar={formateur.avatar} gender={formateur.gender}/>
    // )

    return (
        <div className="flex">
            { listeFormateurs.map(formateur => 
                <FormateurCard key={formateur.id} lastname={formateur.lastname} firstname={formateur.firstname} birthdate={formateur.birthdate} avatar={formateur.avatar} gender={formateur.gender}/>
            ) }
            {/* { cards } */}

            {/* <FormateurCard lastname="Beurive" firstname="Aude" birthdate="16/10/1989" avatar="./assets/images/aude.png" gender="female" /> */}
        </div>
    )
    
}

export default ListeFormateurs