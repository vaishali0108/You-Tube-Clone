import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.div`
width:250px;
margin-bottom:45px;
cursor:pointer;



`
const Image = styled.img`
width:100%;
height:202px;
background-color:#999;

`
const Details = styled.div`
display:flex;
margin-top:16px;

gap:12px;


`
const ChannelImage = styled.img`
width:25px;
height:25px;
border-radius:50%;
background-color:#999;
display: ;

`
const Texts = styled.div`


`
const Title = styled.h1`
font-size:16px;
font-weight:500;
color: ${({ theme }) => theme.text};

`
const ChannelName = styled.h2`
font-size: 14px;
color:${({theme}) => theme.textSoft};
margin:px 0px;


`;
const Info = styled.div`
font-size:14px;
color:${({theme}) => theme.textSoft};

`

const Card =() => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    
    <Container >
      <Image   src="data:image/jpeg;base64,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
    "/>
    <Details>
<ChannelImage src="data:image/png;base64,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"/>
<Texts>
  <Title>Test Video</Title>
  <ChannelName>You Dev</ChannelName>
  <Info>660,908 views • 1 day ago</Info>
</Texts>
    </Details>
    </Container>
    </Link>
  );
};

export default Card;