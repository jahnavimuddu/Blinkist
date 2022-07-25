import { Container, styled, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import banner from '../../../images/banner.svg'
import theme from "../../themes/theme";

const MainBannerContainer = styled("div")({
  width: 912,
  height: 264,
  backgroundColor: "#F1F6F4",
  position:"relative",
  top:70
});

const LeftBannerContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  top: 45,
  left: 45,
  bottom: 45,
  gap: 15,
});

const HeaderContainer = styled("div")({
  width: 319,
  height: 90,
});

const DescriptionContainer = styled("div")({
  width: 461,
  height: 69,
  color: "",
  fontSize: 18,
});

const ImageContainer = styled("div")({
  position: "relative",
  width: 249,
  height: 230,
  left: 618,
  top: -165,
});

export const Banner = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainBannerContainer>
          <LeftBannerContainer>
            <HeaderContainer>
              <Typography variant="h1">
                Explore Books on Entrepreneurship
              </Typography>
            </HeaderContainer>
            <DescriptionContainer>
              <Typography variant="h6">
                Everything you need to know about thriving on a<br></br>
                shoestring budget, making your first million, and hiring{" "}
                <br></br> right from the start.
              </Typography>
            </DescriptionContainer>
          </LeftBannerContainer>
          <ImageContainer>
            <img src={banner} alt="banner"/>
          </ImageContainer>
        </MainBannerContainer>
      </Container>
    </ThemeProvider>
  );
};