import React from "react";
import Question from "../question";
import { Form } from "react-form";

const Questions = ({ questions }) => {
  const qs = questions.map(({ node }) => (
    <Question
      key={node.question}
      question={node.question}
      answers={node.answers}
    />
  ));
  return <div>{qs}</div>;
};

// Wrapped in react forms
const Quiz = ({onSubmit, questions}) => (
  <Form onSubmit={onSubmit}>
    {formApi => (
      <form onSubmit={formApi.submitForm}>
        <Questions questions={questions}/>
        <button type="submit">Submit</button>
      </form>
    )}
  </Form>
);

export default Quiz;
