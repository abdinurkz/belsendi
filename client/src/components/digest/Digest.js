import React, { useEffect } from 'react'
import { getDigests } from '../../store/digest/digest.action';
import { connect } from 'react-redux'
import "./Digest.css"

const Digest = (props) => {


   useEffect(() => {
       props.getDigests();
   }, []);

    return (
        <div className="digest-container">
            <h2 className="digest-title">TRENDING NEWS</h2>
            <div className="digest">
                {props.digest.map(digest =>(
                    <div className="main" key={digest.id}>
                        <div className="digest-image">
                            <img src={digest.image} alt="Does not exist"/>
                        </div>
                        <h4 className="nurkhat">Nur-Sultan</h4>
                        <h2 className="kuat">{digest.title}</h2>
                    </div>
                ))}
                <div className="second-main">
                    <div className="first-news">
                        <img src={""} alt="Does not exist"/>
                    </div>
                    <div className="second-news">
                        <div className="part-one">

                        </div>
                        <div className="part-two">

                        </div>
                    </div>
                </div>
            </div>
            <h2 className="digest-title">DIGEST</h2>
            <div className="news">
                <div className="news-flex">
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    digest: state.digest.digest
});

export default connect(mapStateToProps, { getDigests })(Digest)

