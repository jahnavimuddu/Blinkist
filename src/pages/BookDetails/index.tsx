import { BookDescription } from "../../components/organisms/BookDescription"
import { Footer } from "../../components/organisms/Footer"
import { HeaderComponent } from "../../components/organisms/Header"
import { BookDetails } from "../../components/templates/BookDetails"
// import {useAuth0} from '@auth0/auth0-react'
import React from "react"

const BookDetailsPage = () => {

    // const {isAuthenticated} = useAuth0();
    
    return (
       
        // <React.Fragment>
        //  {isAuthenticated  &&
        <BookDetails header={<HeaderComponent />}
        body={<BookDescription />}
        footer={<Footer />} />
    )
    
}


export default BookDetailsPage