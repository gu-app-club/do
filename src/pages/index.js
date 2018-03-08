import React from "react";
import Quiz from "../components/quiz";
import { scoreFromString, total } from "../lib/score";

class IndexPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      score: {}
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const ledger = Object.keys(values).map(key => scoreFromString(values[key]));
    this.setState({score: total(ledger)});
  }

  render() {
    return (
      <div>
        <h1>This is a quiz</h1>
        <Quiz questions={this.props.data.allQuestionsYaml.edges} onSubmit={this.onSubmit} />

        <p>{this.state.score.html}</p>
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
