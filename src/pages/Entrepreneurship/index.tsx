import { Banner } from '../../components/molecules/Banner'
import {SearchBarComponent} from '../../components/molecules/SearchBar/index'
import Categories from '../../components/organisms/BookCategories'
import { Footer } from '../../components/organisms/Footer'
import { HeaderComponent } from '../../components/organisms/Header'
import {Entrepreneurship} from '../../components/templates/EntrepreneurshipCategory/index'
import Library from '../../data/Library'
import React from 'react'

const EntrepreneurshipPage = () => {
    
    return (
        
        <Entrepreneurship 
        header={<HeaderComponent />}
        banner={<Banner />}
        footer={<Footer />}
        searchBar={<SearchBarComponent />}
        trendingBlinks={
            <Categories data={Library}
            status="trending" />
        }
        justAddedBlinks={
            <Categories data={Library}
            status="justAdded" />
        }
        featuredBlinks={
            <Categories data={Library}
            status="featured" />
        } />
    )
}

export default EntrepreneurshipPage