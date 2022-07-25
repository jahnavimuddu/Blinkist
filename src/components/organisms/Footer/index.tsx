import { makeStyles, styled } from "@mui/styles";
import BlinkistLogo from "../../../images/blinkistlogo.svg";
import { Typography } from "@mui/material";
import { FooterNav } from "../../molecules/FooterNav";
import { FooterNavData as data } from "../../../data/FooterNavData";
import { Constants } from "../../../data/Constants";
import { Icons } from "../../atoms/Icons/icons";

let MainContainer = styled("div")({
  width: "100%",
  height: 440,
  backgroundColor: "#F1F6F4",
  position:"relative",
  top:70
  

});

let WrapContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    position: 'relative',
    left: 260
});

let LeftContainer = styled("div")({
  position: "relative",
  top: 38,
  left: 244,
  width: 378,
  height: "128px !important",
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

let RightContainer = styled("div")({
  position: "relative",
  top: 38,
  left: 310,
  display: "flex",
});

let useStyles = makeStyles({
  blinkistLogo: {
    width: 99.1,
    height: 24,
  },
  subtitle1: {
    fontFamily: "Cera Pro",
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 32,
  },
});

let BottomContainer = styled("div")({
  position: "relative",
  left: -780,
  top: 310,
  fontSize: 14,
  fontWeight: 400,
  fontFamily: "Cera Pro",
  color: "#6D787E",
});

export const Footer = () => {
  let styles = useStyles();

  return (
    <MainContainer>
      <WrapContainer>
        <LeftContainer>
          <Icons source={BlinkistLogo} className={styles.blinkistLogo} />
          <Typography
            variant="subtitle2"
            sx={{
              color: "#0365F2",
              fontFamily: "Cera Pro",
              fontWeight: 500,
              fontSize: 24,
            }}
          >
            Big ideas in small packages<br></br>
            Start learning now
          </Typography>
        </LeftContainer>
        <RightContainer>
          <FooterNav title={data.Editorial.title} data={data.Editorial.data} />
          <FooterNav
            title={data.UsefulLinks.title}
            data={data.UsefulLinks.data}
          />
          <FooterNav title={data.Company.title} data={data.Company.data} />
        </RightContainer>
        <BottomContainer>{Constants.footer.footerCopyright}</BottomContainer>
      </WrapContainer>
    </MainContainer>
  );
};