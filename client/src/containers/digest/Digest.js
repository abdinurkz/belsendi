import React, { useEffect } from 'react'
import { getDigests } from '../../store/digest/digest.action';
import { connect } from 'react-redux'
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
        width: 571px;
        margin: 1px;
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
`
const SecondNews = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    
    div {
        background: #c4c4c4;
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
    
    > div {
        background: #c4c4c4;
        padding: 0;
    }
`
const DigestCity = styled.h4`
    position: absolute;
    top: 440px;
    left: 160px;
    text-align: left;
    color: #627CFF;
`
const DigestCountry = styled.h2`
    position: absolute;
    left: 160px;
    top: 470px;
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
                            <img src={digest.image} alt="Does not exist"/>
                        </DigestImage>
                        <DigestCity>Nur-Sultan</DigestCity>
                        <DigestCountry>{digest.title}</DigestCountry>
                    </Main>
                ))}
                <DigestMain>
                    <FirstNews>
                        <img src={""} alt="Does not exist"/>
                    </FirstNews>
                    <SecondNews>
                        <div className="part-one">

                        </div>
                        <div className="part-two">

                        </div>
                    </SecondNews>
                </DigestMain>
            </DigestCard>
            <DigestTitle>DIGEST</DigestTitle>
            <News>
                <NewsFlex>
                    <div/>
                    <div/>
                    <div/>
                </NewsFlex>
            </News>
        </Container>
    )
};

const mapStateToProps = state => ({
    digests: state.digest.digests
});

export default connect(mapStateToProps, { getDigests })(Digest)

