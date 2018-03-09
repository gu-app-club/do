import React from "react";
import Quiz from "../components/quiz";
import { scoreFromString, total } from "../lib/score";
import Suggestions from "../components/suggestion-feed";
import { FancyHeader, Container, FancyHero, Flex, HeaderParagraph, Card } from "../components/ui";

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
          <FancyHeader white>What should you work on?</FancyHeader>

          <Flex>
            <Flex column>
              <HeaderParagraph>
                Trying to learn to build websites? Not sure what you should learn?
              </HeaderParagraph>

              <HeaderParagraph>
                This site asks you a bit about your knowledge and suggests projects
                that fit your skill level.
              </HeaderParagraph>
            </Flex>

            <Card> Hello </Card>
          </Flex>
        </FancyHero>

        <Container>
          <Quiz
            questions={this.props.data.allQuestionsYaml.edges}
            onSubmit={this.onSubmit}
          />

          <p>{this.state.score.html}</p>

          <h1>These are suggestions</h1>
          <Suggestions data={this.props.data} score={this.state.score} />
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
