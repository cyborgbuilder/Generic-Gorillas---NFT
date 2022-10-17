import React from 'react'
import styled from 'styled-components'
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Slide from 'react-reveal/Slide';

function Homescreen() {
  return (
    <Container> 
     <WrapOne>
         <h1>GENERIC GORILLAS</h1>
     </WrapOne>

     <WrapTwo>
     <LeftImg>
            <Slide left>
            <img src='/images/hero_left.png' />
            </Slide>
        </LeftImg>
        <Header>
           
            <h3>555 Generic Gorilla's coming to the Solana jungle making

a name for themselves</h3>

    <h2>Coming soon</h2>

            <SocialLinks>
                <a href='' ><FaDiscord style={{margin: '10px', backgroundColor: '#26d826', borderRadius: '5px', padding: '10px', boxShadow: '0 0 10px #26d826, 0 0 40px #26d826, 0 0 80px #26d826'}}/></a>
                {/* <a href='' ><FaInstagram style={{margin: '10px', backgroundColor: '#26d826', borderRadius: '5px',padding: '10px', boxShadow: '0 0 10px #26d826, 0 0 40px #26d826, 0 0 80px #26d826'}}/></a> */}
                <a href='' ><FaTwitter style={{margin: '10px', backgroundColor: '#26d826', borderRadius: '5px',padding: '10px', boxShadow: '0 0 10px #26d826, 0 0 40px #26d826, 0 0 80px #26d826'}}/></a>
            </SocialLinks>
        </Header>
        <RightImg>
        <Slide right>
        <img src='/images/hero_right.png' />
        </Slide>
        </RightImg>
     </WrapTwo>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #0000004A 0%, #000000 100%), url('/Images/banner.webp');
    background-size: cover;
    background-repeat:no-repeat;
    background-position:center;
    display: flex;
    flex-direction: column;
    position: relative;

    @media only screen and (max-width: 992px) {
        flex-direction: column;
        height: 130vh;
    }



`

const WrapOne = styled.div`
    display: flex;
    justify-content: center;

    h1{
        font-size: 90px;
        letter-spacing: 1.3px;
        color: white;
        // box-shadow: 0 0 10px #5434e6, 0 0 40px #5434e6, 0 0 80px #5434e6;
        border-radius: 15px;;
        // padding: 10px;;
        text-align: center;

        @media only screen and (max-width: 992px) {
            font-size: 70px;
        }
    }
`

const WrapTwo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    bottom: 0;
    text-align: center;
    color: white;
    h2{
        font-size: 26px;
        text-transform: uppercase;
        color: green;
    }

    h3{
        font-size: 27px;

        @media only screen and (max-width: 1200px){
            font-size: 22px;
        }
    }
`


const LeftImg = styled.div`
    width: 32%;
    height: 100%;
    position: relative;

    @media only screen and (max-width: 992px) {
        display: none;
    }


    img{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;

    }

`

const Header = styled.div`
    width: 36%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media only screen and (max-width: 992px) {
        width: 100%;
    }

   

    p{
        text-align: center;
        font-size: 20px;
        line-height: 2.1rem;
        letter-spacing: 1.4px;
        padding: 10px;
        color: white;

        @media only screen and (max-width: 992px) {
            font-size: 16px;
        }
        
    }
    
    
`

const RightImg = styled.div`
    width: 32%;
    height: 100%;
    position: relative;

    @media only screen and (max-width: 992px) {
        display: none;
    }

    img{
        width: 100%;
        position: absolute;
        bottom: 0;
        right: 10px;
    }
`
const SocialLinks = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    padding-top: 20px;
    

    a{
        color: green;
        transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        &:hover{
            transform: scale(1.04);
            cursor: pointer;
            color: black;
          }
    }

`

export default Homescreen