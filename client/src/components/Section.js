import React from "react";
import styled from 'styled-components'

const StyledSection = styled.h2`
    text-align: left;
    margin-bottom: 20px;
    color: #5C4DE8;
`

const Section = ({ title }) => <StyledSection>{ title }</StyledSection>;

export default Section
