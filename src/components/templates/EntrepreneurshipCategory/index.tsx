import { styled } from "@mui/styles";

export interface EntrepreneurshipProps {
    header: React.ReactNode;
    footer: React.ReactNode;
    searchBar: React.ReactNode;
    trendingBlinks: React.ReactNode;
    justAddedBlinks: React.ReactNode;
    featuredBlinks: React.ReactNode;
    banner: React.ReactNode;
}
let TotalContainer= styled("div")({
    
    // width:"100%",
    // height:"100%",
    
    
})

let BodyContainer = styled("div")({
    width: 912,
    position: 'relative',
    left: 480
})

let BlinksContainer = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    top: 184,
    left: 25
})

let SearchContainer = styled("div") ({
    position: 'relative',
    top: 104,
    left: 25
})

let TrendingBlinks = styled("div") ({
    position: 'relative',
    top: 184,
    left: 25
})

let JustAddedBlinks = styled("div") ({
    position: 'relative',
    top: 280,
    left: 25
})

let FeaturedBlinks = styled("div") ({
    position: 'relative',
    top: 376,
    left: 25
})

let Footer = styled("div") ({
    position: 'relative',
    top: 452
})



export const Entrepreneurship = (props: EntrepreneurshipProps) => {
    let {header, footer, searchBar, trendingBlinks, justAddedBlinks, banner, featuredBlinks} = props
    return (
        <TotalContainer>
            {header}<br></br>
            <BodyContainer>
                {banner}
                <SearchContainer>
                {searchBar}
                </SearchContainer>
                
                <TrendingBlinks>
                {trendingBlinks}
                </TrendingBlinks>
                <JustAddedBlinks>
                {justAddedBlinks}
                </JustAddedBlinks>
                <FeaturedBlinks>
                {featuredBlinks}
                </FeaturedBlinks>
                
            </BodyContainer>
            <Footer>
            {footer}
            </Footer>
        </TotalContainer>
    )
}