import React from 'react';

const Answers = ({answers}) => {
    const as = answers.map(({text, score}) => <li key={text}>{text}</li>)
    return <ul>{as}</ul>
}

export default ({question, answers}) => (
    <div>
        <h2>{question}</h2>
        <Answers answers={answers} />
    </div>
);