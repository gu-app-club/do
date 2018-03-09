import React from "react";
import Quiz from "../components/quiz";
import { scoreFromString, total } from "../lib/score";
import Suggestions from "../components/suggestion-feed";
import {
  FancyHeader,
  Container,
  FancyHero,
  Flex,
  HeaderParagraph,
  Card,
  CenteredHorizontal,
  Clamp
} from "../components/ui";
import styled from "styled-components";
import Link from "gatsby-link";

const LeftHeaderParagraphs = Flex.extend`
  max-width: 40%;
`;

const SpaceBetweenFlex = Flex.extend`
  justify-content: space-between;
`;

const ShiftedDown = styled.div`
  position: relative;
  top: 75px;
  z-index: 99;
`;

const FlexEnd = styled.div`
  justify-self: flex-end;
`;

const MenuItem = styled.span`
  margin-left: 1rem;
  font-weight: bold;

  a {
    text-decoration: none;
  }
`;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const ledger = Object.keys(values).map(key => scoreFromString(values[key]));
    this.setState({ score: total(ledger) });
  }

  render() {
    return (
      <div>
        <FancyHero>
          <Clamp>
          <SpaceBetweenFlex>
            <FancyHeader white>What should you work on?</FancyHeader>
            
            <nav>
            <FlexEnd>
              <MenuItem> <a href="#">Github</a> </MenuItem>
              <MenuItem> <Link to="/about">/about</Link> </MenuItem>
              <MenuItem> <Link to="/new">/new</Link> </MenuItem>
            </FlexEnd>
            </nav>
          
          </SpaceBetweenFlex>

          <SpaceBetweenFlex>
            <LeftHeaderParagraphs column>
              <HeaderParagraph>
                Trying to learn to build websites? Not sure what you should
                learn?
              </HeaderParagraph>

              <HeaderParagraph>
                This site asks you a bit about your knowledge and suggests
                projects that fit your skill level.
              </HeaderParagraph>
            </LeftHeaderParagraphs>

              <ShiftedDown>
                <Card>
                  <FancyHeader>Let’s get started!</FancyHeader>
                  <p>As you answer, we’ll suggest projects at the bottom.</p>

                  <Quiz
                    questions={this.props.data.allQuestionsYaml.edges}
                    onSubmit={this.onSubmit}
                  />
                </Card>
              </ShiftedDown>
          </SpaceBetweenFlex>
          </Clamp>
        </FancyHero>

        <Container>
          <Clamp>
          <p>{this.state.score.html}</p>

          <h1>These are suggestions</h1>
          <Suggestions data={this.props.data} score={this.state.score} />
          </Clamp>
        </Container>
      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    # Gets the Suggestions
    allMarkdownRemark {
      edges {
        node {
          html # the content
          frontmatter {
            # the header
            title
            path

            score {
              html
              javascript
              css
              react
            }
          }
        }
      }
    }

    # All the questions
    allQuestionsYaml {
      edges {
        node {
          question
          answers {
            text

            score {
              html
              javascript
            }
          }
        }
      }
    }
  }
`;
