import React, { Component } from 'react'
import '../../styles/digest.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getDigest } from '../../reducers/digest'
import Logo from '../../images/an.jpg'

export class Digest extends Component {

    static propTypes = {
        digest: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getDigest();
    }

    render() {
        return (
            <div className="digest-container">
                <h2 className="digest-title">TRENDING NEWS</h2>
                <div className="digest">
                    {this.props.digest.map(digest =>(
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
                            <img src={Logo} alt="Does not exist"/>
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
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    digest: state.digest.digest
});

export default connect(mapStateToProps, {getDigest})(Digest)

