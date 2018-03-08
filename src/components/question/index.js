import React from "react";
import { Text, Radio, RadioGroup, Select, Checkbox } from "react-form";
import { scoreToString } from "../../lib/score";

// Take the a 2d array: [[<label/>, <radio/>], [...], ...] and make it 1d:
// [<label/>, <radio/>, <label/>, <radio/>, ...]
const flatten = (arr) => [].concat.apply([], arr);

// Concatenate text and question to make a unique id for the HTML "for" properties
const getID = (text, question) => text + "-" + question;

const Answers = ({ answers, question }) => {
  // For every answer, let's make a radio button and label
  const as = answers.map(({ text, score }) => {
    const id = getID(text, question);
    const scoreString = scoreToString(score[0]) // first element to avoid weird gatsby bug

    return [
      <label key={id + "label"} htmlFor={id}>
        {text}
      </label>,
      <Radio key={id + "radio"} id={id} value={scoreString} />
    ];
  });

  const flattenedAnswerArray = flatten(as);
  
  return <RadioGroup field={question}>{flattenedAnswerArray}</RadioGroup>;
};

export default ({ question, answers }) => (
  <div>
    <h2>{question}</h2>

    <Answers answers={answers} question={question} />
  </div>
);
