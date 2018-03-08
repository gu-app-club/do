import React from "react";
import Suggestion from "../suggestion";

const Suggestions = ({ data, score }) => {
  const suggestions = data.allMarkdownRemark.edges.map(({ node }) => {
    return <Suggestion title={node.frontmatter.title} html={node.html} />;
  });

  return <div>{suggestions}</div>;
};

export default Suggestions;
