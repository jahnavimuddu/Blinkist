import { Story } from "@storybook/react";
import { Banner } from "../../molecules/Banner";
import Categories from "../../organisms/BookCategories";
import { FooterComponent } from "../../organisms/Footer/index.stories";
import { HeaderComponent } from "../../organisms/Header";
import { Entrepreneurship, EntrepreneurshipProps } from ".";
import Library from "../../../data/Library"
import { SearchBar } from "../../molecules/SearchBar/index.stories";
import {MemoryRouter} from 'react-router-dom'

export default {
    title: 'Templates/Entrepreneurship',
    component: Entrepreneurship
}

let Template: Story<EntrepreneurshipProps> = args => <MemoryRouter><Entrepreneurship {...args} /></MemoryRouter>

export const EntrepreneurshipPage = Template.bind({})
EntrepreneurshipPage.args = {
    header: <HeaderComponent />,
    banner: <Banner />,
    searchBar: <SearchBar />,
    trendingBlinks: <Categories data={Library} status="trending" />,
    featuredBlinks: <Categories data={Library} status="featured" />,
    justAddedBlinks: <Categories data={Library} status="justAdded" />,
    footer: <FooterComponent />
}