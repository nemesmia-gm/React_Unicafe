import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onclick, text}) => {
    return (
            <button onClick={onclick}> {text}</button>
    )
};

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState([0,0,0,0,0,0]);
    const [mostRated, setMostRated] = useState(0);

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const generateRandomAnecdote = (anecdotes) => {
        const max = anecdotes.length;
        setSelected (getRandomInt(max));
    };

    const increaseVotes = (index) => {
        let newArray = [...votes];
        newArray[index] = votes[index]+1;

        setVotes(newArray);
        setMostRated(newArray.indexOf(Math.max(...newArray)));
    };

    return (
        <>
            <h1> Anecdote of the day </h1>

            <div> {anecdotes[selected]}</div>
            <div> has {votes[selected]} votes </div>

            <Button onclick={() =>increaseVotes(selected) } text='vote'/>
            <Button onclick={() =>generateRandomAnecdote(anecdotes)} text='next anecdotes'/>

            <h1> Anecdote with most votes </h1>
            <div> {anecdotes[mostRated]} </div>
            <div> has {votes[mostRated]} votes </div>
            </>
    );
};

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];



ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
