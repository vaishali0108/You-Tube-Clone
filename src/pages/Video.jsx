import React from 'react'
import styled from 'styled-components'
import Card from "../components/Card";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
const Container = styled.div`
display:flex;
gap:24px;

`;
const Content = styled.div`

flex:5;
`
const VideoWrapper = styled.div`




`
const Title = styled.h1`
font-size: 18px;
font-weight:400;
margin-top:20px;
margin-bottom:10px;
 color: ${({ theme }) => theme.text}
`
const Detail = styled.div`
display:flex;
align-items:center;
justify-content: space-between;

`
const Info = styled.span`
color: ${({ theme }) => theme.textSoft};

`
const Buttons = styled.div`
display:flex;
gap:20px;
color: ${({ theme }) => theme.text};



`
const Button = styled.div`
display:flex;
align-items:center;
gap: 5px;
cursor:pointer;
`
const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({ theme }) => theme.soft};
`
const Recommendation = styled.div`
flex:2;
`
const Channel = styled.div`
display:flex;
justify-content:space-between;
`;
const ChannelInfo = styled.div`
display:flex;
gap:20px;

`
const Image = styled.img`
width:50px;
height:50px;
border-radius:50%;


`
const ChannelDetail = styled.div`
display:flex;
flex-direction: column;
color: ${({ theme }) => theme.text};



`
const ChannelName = styled.span`
font-weight:500;
`
const ChannelCounter = styled.span`
margin-top:5px;
margin-bottom: 20px;
color: ${({ theme }) => theme.textSoft};
font-size:12px;
`
const Description = styled.p`
font-size:14px;
`
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border:none;
  border-radius: 3px;
  height:max-content;
  padding: 10px 20px;
  cursor:pointer;

`;





const Video = () => {
    return <Container>
        <Content>
            <VideoWrapper>
            <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/3RSSs&t=6051s"
            
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
            </VideoWrapper>
           <Title>Test Video</Title>
           <Detail>
            <Info>7,948,154 views • Jun 22, 2022</Info>
            <Buttons>
                <Button><ThumbUpOutlinedIcon />123</Button>
                <Button><ThumbDownOffAltOutlinedIcon />Dislike</Button>
                <Button><ReplyOutlinedIcon />share</Button>
                <Button><AddTaskOutlinedIcon />Save</Button>
            </Buttons>
           </Detail>
           <Hr/>
           <Channel>
            <ChannelInfo>
 <Image src="data:image/png;base64,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"
      />
      <ChannelDetail>
      <ChannelName>You dev</ChannelName>    
      <ChannelName>200k subscribers</ChannelName>   
      <ChannelCounter><Description>Video uploading app design using React and Styled Components. Youtube clone design with hooks and functional component. React video player.</Description></ChannelCounter>      
      </ChannelDetail>
    
            </ChannelInfo>
            <Subscribe>Subscribe</Subscribe>
           </Channel>
           <Hr />
       <Comments />
        </Content>
        <Recommendation>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>

        </Recommendation>
        </Container>
}
export default Video