import { Box, Dialog, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import ExtendedNavData from "../../../data/ExtendedNavData";
import { IconAndText } from "../../molecules/IconAndText";
import { useNavigate } from "react-router-dom";

const MainContainer = styled("div")({
  width: "100%",
  height: "100%",
  zIndex: 10
});



let useStyles = makeStyles({
    mainDiv: {
        boxSizing: 'border-box',
        minWidth: "100%",
        height: 398,
        zIndex: 8,
        position: 'absolute',
        backgroundColor: "#F1F6F4",
        top:70
    },
    firstBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 150,
        position: 'relative',
        top: 30,
        paddingBottom: 24,
        borderBottom: '1px solid #042330',
        width: 940,
        margin: '0 auto',
        zIndex: 2
    },
    secondBox: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 940,
        position: 'relative',
        margin: '0 auto',
        top: 40,
        gap: '16px 140px',
        justifyContent: 'flex-start',
        alignContent: 'flexStart'
    },
    navItem: {
        display: 'flex',
        flexDirection: 'row',
        width: 182
    },
    highlight: {
        fontWeight: '700 !important',
        color: '#116BE9',
        fontFamily: 'Cera Pro'
    },
    textAlign: {
        alignSelf: "center", 
        fontFamily: 'Cera Pro !important', 
        fontWeight: '400 !important'
    },
    icon: {
      marginRight: 12,
      width: 16,
      height: 22.05
    }
});

export const ExtendedNav = () => {
  let styles = useStyles();

  const navigate = useNavigate()
  const showEntrepreneursPage = () => {
    navigate("/entrepreneurship")
  }

  return (
    
    <MainContainer>
      <div className={styles.mainDiv}>
        <Box className={styles.firstBox}>
            <Typography className={styles.highlight}>Explore by category</Typography>
            <Typography>See recently added titles</Typography>
            <Typography>See popular titles</Typography>
        </Box>
        <Box className={styles.secondBox}>
          {ExtendedNavData.map((data, key) => {
            return (
              <div className={styles.navItem}>
                <IconAndText iconSource={data.icon} key={key} title={data.title} variant="body2" onClick={showEntrepreneursPage} />
              </div>
            );
          })}
        </Box>
      </div>
    </MainContainer>
    
  );
};
