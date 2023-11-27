import React from 'react';
import styled from 'styled-components';
import LamaTube from '../img/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'; // Correct import
import MovieIcon from '@mui/icons-material/Movie';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { Link } from '@mui/material';


const Container = styled.div`
  flex: 1;
  background-color: ${({theme}) =>theme.bgLighter};
  height: 200vh;
  color: ${({theme}) =>theme.text};
  font-size:14px;
  position:sticky;
  top:0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;


`;

const Img = styled.img`
  height: 25px;
`;


const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding:7.5px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Hr = styled.hr`
 margin: 15px 0px;
 border: 0.5px solid ${({theme}) =>theme.soft};`
 const Login = styled.div`
 `
 const Button = styled.button`
 padding:5px 15px;
 background-color:transparent;
 border:1px solid #3ea6ff;
 color:#3ea6ff;
 border-radius:3px;
 font-weight:500;
 margin-top:10px;
 cursor:pointer;
 display:flex;
 align-items:center;
 gap:5;

 `
const Title = styled.h2`
font-size:14px;
font-weight:500;
color:#aaaaaa;
margin-bottom:20px;
`
const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
      <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
        <Logo>
          <Img src={LamaTube} />
          YouTube
        </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        <Hr/>
        
        <Item>
          <VideoLibraryIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr/>
        <Login>
        Sign in to like videos,comment,and subscribe.
       <Link to="signin" style={{textDecoration:"none"}}>
        <Button>SIGN IN</Button>
        </Link>
        </Login>

        <Hr/>
        <Title>BEST OF YOUTUBE</Title>
        <Item>
          <LibraryMusicIcon />
          Music
        </Item>
        <Item>
          <SportsBaseballIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <MovieIcon />
          Movies
        </Item>
        <Item>
          <ArticleIcon />
          News
        </Item>
        <Item>
          <LiveTvIcon />
          Live
        </Item>
      <Hr/>
        <Item>
          <SettingsIcon />
          Setting
        </Item>
        <Item>
          <FlagIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineIcon />
          Help
        </Item>
        <Item onClick={()=>setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
        
      </Wrapper>
    </Container>
  );
};

export default Menu;
