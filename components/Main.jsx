import "/components/Main.css";
import Card from './Card';

function Main() {
    const Vomito = {
        image:"https://media3.giphy.com/avatars/doodlesbyburnttoast/dMqxHmPPA8fd.gif",
        firstName:"Vomito",
        lastName:"DOODLES"
    }
    const Hangry = {
        image:"https://media.tenor.com/cUzMbdPym1YAAAAd/doodle-doodles.gif",
        firstName:"Hangry",
        lastName:"DOODLES"
    }
    const Beat = {
        image:"https://i.giphy.com/jQb5vQCpxZk6WgrB3z.webp",
        firstName:"Beat",
        lastName:"DOODLES"
    }
    const Super = {
        image:"https://openseauserdata.com/files/1de504ef743bdd851b637488b24dba25.gif",
        firstName:"Super",
        lastName:"DOODLES"
    }

    return (
        <div className="main-container">
            <Card
                image={Vomito.image}
                firstName={Vomito.firstName}
                lastName={Vomito.lastName}
            />
            <Card
                image={Hangry.image}
                firstName={Hangry.firstName}
                lastName={Hangry.lastName}
            />
            <Card
            image={Beat.image}
            firstName={Beat.firstName}
            lastName={Beat.lastName}
             />
            <Card
                image={Super.image}
                firstName={Super.firstName}
                lastName={Super.lastName}
            />
        </div>
            )


}


export default Main;