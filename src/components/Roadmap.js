import React from 'react'
import styled from 'styled-components'
import Slide from 'react-reveal/Slide';

const Roadmap = () => {
  return (
    <Container>
        <Wrap>
            <Header>
                <h1>Roadmap</h1>
            </Header>
            <Map>
                <PhaseOne>
                   <Slide bottom>
                   <h1>Phase 1</h1>
                    <p>In phase one (just after the release) we will be doing WL collaboration's giveaways with other up and coming NFTs on the solana network. We will also have a community wallet where the community are able to buy any 3 solana NFTs of their choice and we will do a generic gorilla holder giveaway with the 3 NFTs that had the most votes for the giveaway. After all Gorillas have been minted all of the gold furred gorillas will be automatically entered into a $10,000 giveaway 1st place will get $7,500 2st place will get $2,000 and 3rd place will get $500 (winners will be messaged through discord)</p>
                   </Slide>
                </PhaseOne>

                <PhaseTwo>
                    <Slide bottom>
                    <h1>Phase 2</h1>
                    <p>After phase 1 is completed we will move on to phase 2 of the project which will mean anyone that is holding 2 or more Generic Gorilla's will be airdropped a female Gorilla that will later on down the line be used for breeding and many other useful things. When the funds in the public wallet are increased 8-12 weeks after launch 50% of the funds will be airdropped as a passive income to all holders ( the more gorillas you hold the more solana you will receive weekly.)</p>
                    </Slide>
                </PhaseTwo>
            </Map>
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: black;


`
const Wrap = styled.div`
    width: 90%;
    text-align: center;
`

const Header = styled.div`
    display: flex;
    justify-content: center;

    h1{
        font-size: 80px;
        text-transform: uppercase;

        @media only screen and (max-width: 1200px){
            font-size: 60px;
        }
    }
`

const Map = styled.div`
    h1{
        font-size: 50px;

        @media only screen and (max-width: 1200px){
            font-size: 40px;
        }
    }

    p{
        font-size: 20px;

        @media only screen and (max-width: 1200px){
            font-size: 17px;
        }
    }
`

const PhaseOne = styled.div`
    
`

const PhaseTwo = styled.div`
    margin-top: 100px;
`
export default Roadmap