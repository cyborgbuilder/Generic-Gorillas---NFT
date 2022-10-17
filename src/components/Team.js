import React from 'react'
import styled from 'styled-components'
const Team = () => {
  return (
    <Container>
        {/* <Content> */}
            <Wrap>
                <Left>
                    <h1>TEAM</h1>
                    
                    <TeamSection>
                        <Card>
                            <img src='/images/1.png' />                        
                            <h2>Lam8o</h2>
                            <h3>Founder</h3>
                        </Card>

                        <Card>
                            <img src='/images/2.png' />                        
                            <h2>Riyan</h2>
                            <h3>3D Art Developer</h3>
                        </Card>

                        <Card>
                            <img src='/images/3.png' />                        
                            <h2>Mruseful</h2>
                            <h3>Discord Designer</h3>
                        </Card>

                        
                    </TeamSection>

                   
                </Left>
            </Wrap>
        {/* </Content> */}
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    margin: 0;
    background: black;
    display: flex;
    justify-content: center;
    // animation: background 10s infinite;
    
    
`

const Wrap = styled.div`
    width: 95%;

    @media only screen and (max-width: 1200px){
        width: 99%;
    }
`

const Left = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 1200px){
        width: 100%;
    }

    h1{
        font-size: 90px;
        color: white;

        @media only screen and (max-width: 1200px){
            font-size: 60px;
        }
    }




`
const TeamSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    // margin: 30px 0;
`

const Card = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 20px;

    @media only screen and (max-width: 1200px){
        width: 35%;
    }

    img{
        80%;
    }

    h3{
        color: white;
    }

    h2{
        color: #26d826;
    }
`

export default Team