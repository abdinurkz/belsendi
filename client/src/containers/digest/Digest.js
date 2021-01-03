import React, { useEffect } from 'react'
import { getDigests } from '../../store/digest/digest.action';
import { connect } from 'react-redux'
import Taxi from './assets/taxi-max.png';
import Conference from './assets/conference.png';
import Charity from './assets/charity.png';
import Clinics from './assets/clinics.png';
import Senate from './assets/senate.png';
import Municipal from './assets/municipal.png';
import Mini from './assets/taxi-min.png';
import styled, { css } from 'styled-components'

const Container = styled.div`
    margin: 20px 110px;
    
    > div {
        background-color: transparent;
        color: white;
        padding: 2em;
        border-radius: 0.5em;
        text-align: center;
    }
`
const DigestTitle = styled.h2`
    text-align: left;
    margin: 30px 0 0 30px;
    color: #5C4DE8;
`
const DigestCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
`
const DigestMain = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 195px 195px;
    grid-row-gap: 10px;
`
const Main = styled.div`
    background: #c4c4c4;
    cursor: pointer;
    position: relative;
    max-height: 400px;
    
    img {
        flex: 1;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`
const FirstNews = styled.div`
    background: #c4c4c4;
    position: relative;
   
    
    img {
        flex: 1;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`
const SecondNews = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    
    div {
        background: #c4c4c4;
        max-height: 195px;
    } 
    
    div img {
        flex: 1;            
        object-fit: cover;  
        width: 100%;      
        height: 100%;  
    }
    
`
const News = styled.div`
    margin-bottom: 180px;
`
const NewsFlex = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 200px;
    grid-column-gap: 10px;
    
    div {
        background: #c4c4c4;
        padding: 0;
    }
    
    div img {   
        flex: 1;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`
const Tag = styled.h4`
    position: absolute;
    text-align: left;
    color: #627CFF;
    border: 1px solid #627CFF;
    background-color: #fff;
    padding: 2px 8px;
    font-weight: normal;
    
    ${props => props && css`
        left: ${props.left}px;
        top: ${props.top}px;
    `}
`
const Text = styled.h2`
    position: absolute;
    text-align: left;
    font-weight: 600;
    color: white;
    
    ${props => props && css`
        left: ${props.left}px;
        top: ${props.top}px;
    `}
`

const Digest = ({getDigests, digests}) => {

   useEffect(() => {
       getDigests();
   }, [getDigests]);

    return (
        <Container>
            <DigestTitle>TRENDING NEWS</DigestTitle>
            <DigestCard>
                {digests.map((digest, index) =>(
                    <Main key={index}>
                        <img src={Taxi} alt="Does not exist"/>
                        <Tag top="300" left="20">CITY</Tag>
                        <Text top="330" left="20">City Taxi
                            and improving public transport</Text>
                    </Main>
                ))}
                <DigestMain>
                    <FirstNews>
                        <img src={Conference} alt="Does not exist"/>
                        <Tag left="20" top="100">EVENT</Tag>
                        <Text left="20" top="130">QAZNet 25 Years Conference</Text>
                    </FirstNews>
                    <SecondNews>
                        <div style={{ position: 'relative' }}>
                            <img src={Charity} alt="Does not exist"/>
                            <Tag left="20" top="100">SOCIAL</Tag>
                            <Text left="20" top="130">Charity “Happy Child”</Text>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img src={Clinics} alt="Does not exist"/>
                            <Tag left="20" top="100">SOCIAL</Tag>
                            <Text left="20" top="130">City municipal clinics</Text>
                        </div>
                    </SecondNews>
                </DigestMain>
            </DigestCard>
            <DigestTitle>DIGEST</DigestTitle>
            <News>
                <NewsFlex>
                    <div style={{ position: 'relative' }}>
                        <img src={Senate} alt="Does not exist"/>
                        <Tag left="20" top="100">GOVERNMENT</Tag>
                        <Text left="20" top="130">Senate meeting</Text>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src={Municipal} alt="Does not exist"/>
                        <Tag left="20" top="100">CITY</Tag>
                        <Text left="20" top="130">Municipal institutions</Text>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src={Mini} alt="Does not exist"/>
                        <Tag left="20" top="100">CITY</Tag>
                        <Text left="20" top="130">City Taxi Public Transport</Text>
                    </div>
                </NewsFlex>
            </News>
        </Container>
    )
};

const mapStateToProps = state => ({
    digests: state.digest.digests
});

export default connect(mapStateToProps, { getDigests })(Digest)

