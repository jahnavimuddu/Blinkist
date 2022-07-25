import { Footer } from "../../components/organisms/Footer";
import { HeaderComponent } from "../../components/organisms/Header";
import { Tabs } from "../../components/organisms/Tabs";
import { MyLibrary } from "../../components/templates/MyLibrary";
import React from "react";

const LibraryPage = () => {

    return (
       
        <>
            <MyLibrary header={<HeaderComponent />}
            body={<Tabs />}
            footer={<Footer />}
            ></MyLibrary>
        </>
    )
        }
    


export default LibraryPage