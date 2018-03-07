import React from "react";
import { Text, Radio, RadioGroup, Select, Checkbox } from "react-form";

const Answers = ({ answers, question }) => {
  // For every answer, let's make a radio button and label
  const as = answers.map(({ text, score }) => {
    const id = text + question;

    return [
      <label key={id + "label"} htmlFor={id}>{text}</label>,
      <Radio key={id + "radio"} id={id} value={score} />
    ];
  });

  // Take the 2d [[<label/>, <radio/>], [...], ...] and make it 1d:
  // [<label/>, <radio/>, <label/>, <radio/>, ...]
  const flattenedAnswerArray = [].concat.apply([], as);

  return <RadioGroup field={question}>{flattenedAnswerArray}</RadioGroup>;
};

export default ({ question, answers }) => (
  <div>
    <h2>{question}</h2>
    <Answers answers={answers} question={question} />
  </div>
);
