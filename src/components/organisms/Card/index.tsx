import { Typography } from "@mui/material";
import { styled, makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../themes/theme";
import { useEffect, useState } from "react";
import { IconAndText } from "../../molecules/IconAndText";
import { ReactComponent as User } from "../../../images/user.svg";
import { ReactComponent as Time } from "../../../images/time.svg";
import { ReactComponent as Add } from "../../../images/add.svg";
import {ButtonComponent} from "../../atoms/Buttons/Buttons"
import api from "../../../api/api";
import {useNavigate} from 'react-router-dom'
import { Navigate } from 'react-router-dom';

let MainContainer = styled("div")({
  width: 284,
  height: 485,
  borderRadius: 8,
  border: "1px solid #E1ECFC",
});

let ImageContainer = styled("div")({
  width: 284,
  height: 292,
});

let InfoContainer = styled("div")({
  position: "relative",
  top: 23,
  left: 16,
  width: 224,
  height: 95,
});

let OtherDetails = styled("div") ({
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  top: 17,
  left: -10
})

let TimeToReadDiv = styled("div") ({
  left: 17.67,
  fontSize: 14,
  position: 'relative'
})

let NumberOfReads = styled("div") ({
  position: 'relative',
  left: 47.33,
  fontSize: 14
})

let ButtonDiv = styled("div") ({
  position: 'relative',
  top: 10
})

let useStyles = makeStyles({
  author: {
    position: "relative",
    top: 16,
    color: "#6D787E",
    fontSize: 16,
    fontWeight: 500,
  },
  title: {
    fontWeight: 700,
    fontSize: '18px !important',
    color: "#03314B",
  },
  image: {
    width: 16.67,
    height: 16.67,
  },
  finished: {
    color: '#0365F2 !important',
    position: 'relative',
    left: 111,
    top: 30,
    fontWeight: 500,
    fontSize: 16
  },
  button: {
    width: '100%',
    height: 52,
    color: '#0365F2 !important',
    "&:hover": {
      color: 'white !important',
      backgroundColor: '#0365F2 !important',
      fill: 'white'
    }
  }
});

export interface CardProps {
  title?: string;
  image?: string;
  author?: string;
  isFinished?: boolean;
  addToLibrary?: boolean;
  currentlyReading?: boolean;
  readAgain?: boolean;
  id?: number;
  timeToRead?: string;
  numberOfReads?: string;
  value: number;
  className?: string;
  onClick?: () => void;
}

export type BookInfo = {
  id: number,
  title: string,
  author: string,
  image: string,
  timeToRead: string,
  numberOfReads: string,
  status: {
    isFinished: boolean,
    isTrending: boolean,
    justAdded: boolean,
    isFeatured: boolean
  }
}

export const Card = (props: CardProps) => {
  let {value, onClick, image, title, author, timeToRead, numberOfReads, readAgain, addToLibrary, isFinished } = props
  let styles = useStyles();

  let [iconStyle, setIconStyle] = useState({})

  let handleMouseEnterEvent = () => {
    setIconStyle({
      fill: 'white',
      stroke: 'white'
    })
  }

  let handleMouseLeaveEvent = () => {
    setIconStyle({})
  }

  const [bookInfo, setBookInfo] = useState<BookInfo>({
    id: 1,
    title: "",
    author: "",
    image: "",
    timeToRead: "",
    numberOfReads: "",
    status: {
      isFinished: false,
      isTrending: false,
      justAdded: false,
      isFeatured: false
    }
  });

  useEffect(() => {
    const retrieveBookById = async(val: number) => {
      if(val && val != 0) {
        const book = await api.get(`/library/${val}`)
        const data = book.data
        setBookInfo(data)
      }
    }

    retrieveBookById(value)
  }, [value])

  let navigate = useNavigate()
  
  let addToCurrentlyReading = async (num: number) => {
    console.log("book: "+JSON.stringify(bookInfo))
    console.log(num)
    bookInfo.status.isFinished = false
    bookInfo.status.isTrending = false
    bookInfo.status.isFeatured = false
    bookInfo.status.justAdded = false

    await api.put(`/library/${num}`, bookInfo)
    navigate('/')
  }

  let updateFinish = async (num: number) => {
    if(bookInfo.status.isFinished) {
      bookInfo.status.isFinished = false
    }
    else {
      bookInfo.status.isFinished = true
    }

    await api.put(`/library/${num}`, bookInfo)
  }

  

  let showDetailsPage = (num:number) => {
    navigate(`/bookdetails/?id=${num}`)
  }

  return (
    <ThemeProvider theme={theme}>
      <MainContainer onClick={onClick}>
        <ImageContainer>
          <img src={image} />
        </ImageContainer>
        <InfoContainer>
          <Typography
            variant="subtitle1"
            sx={{ color: "#03314B" }}
            className={styles.title}
            onClick={() => showDetailsPage(value)}
          >
            {title}
          </Typography>
          <Typography variant="body1" className={styles.author}>
            {author}
          </Typography>
        </InfoContainer>
        <OtherDetails>
          <TimeToReadDiv>
          {!timeToRead ? null : (
              <IconAndText iconSource={<Time />} title={timeToRead} variant="caption" />
            )}
          </TimeToReadDiv>
          <NumberOfReads>
          {!numberOfReads ? null : (
              <IconAndText iconSource={<User />} title={numberOfReads} variant="caption" />
            )}
          </NumberOfReads>
        </OtherDetails>

        {isFinished ? (
            <Typography variant="body1" className={styles.finished} onClick={() => updateFinish(value)}>
              Finished
            </Typography>
          ) : null}

          {readAgain ? (
            <Typography variant="body1" className={styles.finished} onClick={() => updateFinish(value)}>
              Read Again
            </Typography>
          ) : null}

        {addToLibrary ? (
          <ButtonDiv>
            <ButtonComponent startIcon={<Add style={iconStyle} />} className={styles.button} onClick={() => addToCurrentlyReading(value)} onMouseEnter={handleMouseEnterEvent} onMouseLeave={handleMouseLeaveEvent}>Add To Library</ButtonComponent>
          </ButtonDiv>
        ) : null}
      </MainContainer>
    </ThemeProvider>
  );
};