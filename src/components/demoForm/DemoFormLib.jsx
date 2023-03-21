import { useForm } from "react-hook-form";


const DemoFormLib = () => {

    //On récupère de userForm au moins :
    // handleSubmit -> la fonction a déclencher au submit
    // register -> Ce qui va nous permettre de relier les inputs à une variable
    // formState : { errors } -> L'état du formulaire et ses erreurs possibles
    const { handleSubmit, register, formState : { errors } } = useForm({mode: "onChange"})

    const soumettreForm = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(soumettreForm)}>
            <div>
                <label htmlFor="ln">Nom</label>
                <input id="ln" type="text" {...register("lastname", {required : true, minLength : 2, maxLength : 50})} />
                { errors.lastname?.type == "required" && <span>Le champs est requis</span> }
                { errors.lastname?.type == "minLength" && <span>Le nom est trop petit</span>}
                { errors.lastname?.type == "maxLength" && <span>Le nom est trop grand</span>}
            </div>
            <div>
                <label htmlFor="fn">Prénom</label>
                <input id="fn" type="text" {...register("firstname", {required : true})} />
                { errors.firstname && <span>Le champs est requis</span> }

            </div>
            <div>
                <label htmlFor="mail">Adresse mail</label>
                <input id="mail" type="mail" {...register("email", {required : true})}/>
                { errors.email && <span>Le champs est requis</span> }

            </div>
            <div>
                <label htmlFor="pwd">Mot de passe</label>
                <input id="pwd" type="password" {...register("password", {required : true, pattern : /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{5,}$/ })} />
                { errors.password?.type == "required" && <span>Le champs est requis</span> }
                { errors.password?.type == "pattern" && <span>Le mot de passe doit contenir une lettre en majuscule, une lettre en minuscule, un chiffre et un caractère spécial</span> }
            </div>
            <input type="submit" value="Créer mon compte" />
        </form>
    )
}

export default DemoFormLib;