import React from 'react';
import styled from "styled-components";

/**
 * Typography
 */

// A generic text component that can be extended
const AbstractText = styled.div`
    color: ${props => props.white ? "#fff" : props.theme.dark.regular};
`;

export const HeaderParagraph = AbstractText.withComponent('p').extend`
  font-size: 4rem;
`;

//h1 but with a bar under it 
const FancyHeaderWrapper = AbstractText.withComponent('h1').extend`
  position: relative;
  display: inline-block;
  line-height: 1.15;

  &::after {
    content: "";
    display: block;
    position: absolute;
    background-color: ${props => props.theme.red.light};
    height: 20px;
    width: 105%;
    left: 50%;
    bottom: -4px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    opacity: 0.2;
  }
`;

const FancyHeaderText = AbstractText.withComponent('span').extend`
  font-weight: bold;
  z-index: 2;
  position: relative;
  box-sizing: border-box;
  letter-spacing: 0rem;
`;

export const FancyHeader = ({children, ...rest}) => (
    <FancyHeaderWrapper>
        <FancyHeaderText {...rest}>{children}</FancyHeaderText>
    </FancyHeaderWrapper>
)

/**
 * Layouts
 */

export const Container = styled.div`
  padding: 3rem;
`;

export const FancyHero = Container.extend`
  background-image: radial-gradient(60% 136%, #34E7E4 37%, #4BCFFA 100%);

  * {
    color: white;
  }
`

export const Card = Container.extend`
  background: white;
  box-shadow: 2px 4px 400px 10px rgba(0,0,0,0.08);
  border-radius: 8px;
  color: ${props => props.theme.dark.regular};
`;


export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
`
