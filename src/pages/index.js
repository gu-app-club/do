import React from "react";
import Question from "../components/question";

const QuestionFeed = ({ questions }) => {

  const qs = questions.map(({ node }) => (
    <Question
      key={node.question}
      question={node.question}
      answers={node.answers}
    />
  ));

  return <div>{qs}</div>;
};

const IndexPage = ({ data }) => (
  <div>
    <h1>This is a quiz</h1>
    <QuestionFeed questions={data.allQuestionsYaml.edges} />
  </div>
);

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
