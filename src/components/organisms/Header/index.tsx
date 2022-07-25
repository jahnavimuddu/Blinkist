import { DialogActions, DialogContent, DialogContentText, Popover, Typography } from "@mui/material";
import { styled, makeStyles, ThemeProvider } from "@mui/styles";
import React, { useState } from "react";
import BlinkistLogo from "../../../images/blinkistlogo.svg";
import { Icons } from "../../atoms/Icons/icons";
import SearchIcon from "../../../images/search.svg";
import { Dropdown } from "../../molecules/Dropdown";
import { ExtendedNav } from "../ExtendedNav";
import theme from '../../themes/theme'
import {useNavigate} from 'react-router-dom'
import LogoutButton from "../../auth0/Logout";
import { Avatar } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { Modal } from "@mui/material";
import { Dialog } from "@mui/material";





const MainContainer = styled("div")({
  width: "100%",
  height: 86,
  display: "flex",
  flexDirection: "row",
  gap: 40,
  position: 'fixed',
  top:0,
  zIndex:7,
  fontFamily: 'Cera Pro !important',
  left:250,
  backgroundColor:"white"
  
});

const useStyles = makeStyles({
  blinkistLogo: {
    width: 124.09,
    height: 26,
    alignSelf: "center",
    position: "absolute",
    left: 250,
    top: 30,
  },
  container: {
    marginLeft: 0,
  },
  explore: {
    alignSelf: "center",
    position: "absolute",
    left: 479,
    top: 33,
  },
  myLibrary: {
    alignSelf: "center",
    color: "#03314B",
    left: 594,
    position: "absolute",
    top: 33,
    fontSize: 16,
    fontFamily: 'Cera Pro !important'
  },
  avatar:{
    position: "absolute",
    left: 1087,
    top: 23,
  },
  account: {
    marginLeft: "auto",
    width: 40,
    height: 40,
    position: "absolute",
    alignSelf: "center",
    left: 1128,
    top: 23,
  },
  search: {
    width: 20.31,
    height: 20.31,
    alignSelf: "center",
    position: "absolute",
    left: 417,
    top: 33,
  },
  
});

export const HeaderComponent = () => {

  const { user } = useAuth0();
  const Name=(user?.name)
  const firstLetter=Name?.charAt(0)

  
  let [explore, setExplore] = useState(false);
  let [exploreStyle, setExploreStyle] = useState({
    transform: "rotate(0deg)",
    
  });

  const expandExploreDropdown = () => {
    explore ? setExplore(true) : setExplore(true);
    console.log(explore + "what")
    if (explore) {
      setExploreStyle({ transform: "rotate(0deg)", });
    } else {
      setExploreStyle({ transform: "rotate(180deg)", });
    }
    
  };

  const [open,setOpen]=useState(false)
  const handleOpen = () =>{
    setOpen(true)
    console.log(open)
  }
  const handleClose = () =>{
    setOpen(false)
  }

  let [account, setAccount] =useState(false);

  const expandAccountDropdown = () => {
    account ? setAccount(false) : setAccount(true);
  };

  let styles = useStyles();

  let navigate = useNavigate()

  let homePage = () => {
    navigate("/")
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        
        <MainContainer>
          <Icons source={BlinkistLogo} className={styles.blinkistLogo} />
          
          <Icons source={SearchIcon} className={styles.search} />
          
          <Dropdown
            title={"Explore"}
            className={styles.explore}
            onClick={()=>{expandExploreDropdown();handleOpen()}}
            style={exploreStyle}
          />
          <Typography variant="body1" className={styles.myLibrary} onClick={homePage}>
            My Library
          </Typography>
          <Avatar alt="Remy Sharp"  sx={{bgcolor: " #69A6E3" }} className={styles.avatar}>{firstLetter}</Avatar>
          
          <Dropdown title={""} className={styles.account} onClick={() => {expandAccountDropdown()}}></Dropdown>
          
          <div>{account ? <LogoutButton /> : null}</div>
        </MainContainer>
        
        {explore ? <Modal open={open} onClose={handleClose} style={{left:-20}}>
          <DialogContent style={{overflow:"hidden !important",width:"100%",height:"100%"}}>
          
             <ExtendedNav /> 
           
          </DialogContent>
          
          
          
             </Modal>
            
          : null} 
        
      </ThemeProvider>
    </>
  );
};

{/* <Modal open={open} close={handleClose}></Modal> */}
// {<Dialog open={open} onClose={handleClose}></Dialog>}