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
import styled from 'styled-components'

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
const DigestImage = styled.div`
    img {
        flex: 1;
        object-fit: cover;
        width: 100%;
        height: 398px;
    }
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
`
const FirstNews = styled.div`
    background: #c4c4c4;
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
    } 
    
    div img {
        flex: 1;            
        object-fit: cover;  
        width: 100%;      
        height: 195px;  
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
const DigestCity = styled.h4`
    position: absolute;
    top: 460px;
    left: 160px;
    text-align: left;
    color: #627CFF;
    border: 1px solid #627CFF;
    background-color: #fff;
    padding: 2px 8px;
    font-weight: normal;
`
const DigestCountry = styled.h2`
    position: absolute;
    left: 160px;
    top: 490px;
    text-align: left;
    font-weight: 600;
    color: white;
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
                        <DigestImage>
                            <img src={Taxi} alt="Does not exist"/>
                        </DigestImage>
                        <DigestCity>CITY</DigestCity>
                        <DigestCountry>City Taxi
                            and improving public transport</DigestCountry>
                    </Main>
                ))}
                <DigestMain>
                    <FirstNews>
                        <img src={Conference} alt="Does not exist"/>
                    </FirstNews>
                    <SecondNews>
                        <div>
                            <img src={Charity} alt="Does not exist"/>
                        </div>
                        <div>
                            <img src={Clinics} alt="Does not exist"/>
                        </div>
                    </SecondNews>
                </DigestMain>
            </DigestCard>
            <DigestTitle>DIGEST</DigestTitle>
            <News>
                <NewsFlex>
                    <div>
                        <img src={Senate} alt="Does not exist"/>
                    </div>
                    <div>
                        <img src={Municipal} alt="Does not exist"/>
                    </div>
                    <div>
                        <img src={Mini} alt="Does not exist"/>
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

