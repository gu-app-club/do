import React from 'react';
import styled from "styled-components";

/**
 * Typography
 */

// A generic text component that can be extended
const AbstractText = styled.div`
  color: ${props => props.white ? "#fff" : props.theme.dark.regular};

  text-shadow: ${props => props.white ? '0 1px 2px rgba(0,0,0,0.1)' : "none"};

`;

export const HeaderParagraph = AbstractText.withComponent('p').extend`
  font-size: 4rem;
  font-weight: 200;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
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
  padding: 4rem;
`;

export const FancyHero = Container.extend`
  background-image: radial-gradient(60% 136%, #34E7E4 37%, #4BCFFA 100%);
  position: relative;
  max-height: 80vh;

  * {
    color: white;

    &::selection {
      background: ${props => props.theme.red.light};
    }

    &::-moz-selection {
      background: ${props => props.theme.red.light};
    }
  }

  &::after {
    display: block;
    background: #4BCFFA;
    position: absolute;
    bottom: -19px;
    transform: translateX(-50%);
    left: 50%;
    -webkit-box-pack: justify;
    height: 20px;
    content: "";
    width: 100%;
    opacity: 0.2;
  }
`

export const Card = Container.extend`
  background: white;
  box-shadow: 2px 4px 80px 1px rgba(50,50,50,0.1);
  border-radius: 8px;
  border: 1px solid ${props => props.theme.skyblue.light};
  color: ${props => props.theme.dark.regular};

  * {
    color: ${props => props.theme.dark.regular};
    &::selection {
      background: ${props => props.theme.skyblue.light};
    }

    &::-moz-selection {
      background: ${props => props.theme.skyblue.light};
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
  width: 100%;
  `

export const CenteredHorizontal = Flex.extend`
  width: 100%;
  justify-content: center;
`

export const Clamp = styled.div`
  max-width: 960px;
  margin: 0 auto;
  position: relative;
`;
