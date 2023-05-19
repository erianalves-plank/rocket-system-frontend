import { NavbarContentPages } from "../components/NavbarContentPages";
import { Footer } from "../components/Footer";
import { ButtonsMangaResource } from "../components/ButtonsManageResource";
import { CardContent } from "../components/cardContent/CardContent.tsx";
import '../Page.css'
import data from '../dataRocketPage.tsx'
import { Button } from "antd";
import { useState } from "react";

function Rocket() {

    const [showContent, setShowContent] = useState(false);

    const cardsRocket = data.map(item => {
        return (
            <CardContent
                key={item.id}
                id={item.id}
                name={item.name}
            />
        )
    })

    const handleShowContent = () => {
        setShowContent(prev => {
            return !prev;
        })
    }

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <NavbarContentPages />
            <main className="container-rocket-page" style={{ flex: 1 }}>
                <Button className="btn" size='large' style={{  width: '200px' }} onClick={handleShowContent} >Get Resource</Button>

                <div id="rocket-div">
                    { showContent &&  cardsRocket }
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