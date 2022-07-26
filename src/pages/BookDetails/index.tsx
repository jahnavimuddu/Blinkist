import { BookDescription } from "../../components/organisms/BookDescription"
import { Footer } from "../../components/organisms/Footer"
import { HeaderComponent } from "../../components/organisms/Header"
import { BookDetails } from "../../components/templates/BookDetails"
import React from "react"

const BookDetailsPage = () => {
    
    return (
       
        // <React.Fragment>
        //  {isAuthenticated  &&
        <BookDetails header={<HeaderComponent />}
        body={<BookDescription />}
        footer={<Footer />} />
    )
    
}


export default BookDetailsPage