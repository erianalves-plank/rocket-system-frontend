import { NavbarContentPages } from "../components/NavbarContentPages";
import { Footer } from "../components/Footer";
import { ButtonsMangaResource } from "../components/ButtonsManageResource";
import { CardContent } from "../components/CardContent";
import '../Page.css'
import data from '../dataRocketPage.tsx'

function Rocket() {

    const cardsRocket = data.map(item => {
        return (
            <CardContent
                key={item.id}
                id={item.id}
                name={item.name}
            />
        )
    })
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

            <NavbarContentPages />
            <main className="container-rocket-page" style={{ flex: 1 }}>
                <button className="btn" id="load">Check Resource</button>
                <div id="rocket-div">
                    { cardsRocket }
                </div>
                <ButtonsMangaResource />
            </main>


            <Footer />


        </div>
    )
}

export {
    Rocket
};