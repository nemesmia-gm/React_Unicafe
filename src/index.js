import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({text, onclick}) => {
    return (
        <button onClick={onclick}>{text}</button>
    )
};

const Statistic = (props) => {
    return (
        <div> {props.text} {props.count}</div>
    )
};

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const increaseCount = (value, setMethod) => {
        return setMethod(value + 1);
    };

   return (
       <>
            <h1> Give Feedback </h1>
            <Button text='good' onclick={() => increaseCount(good, setGood)}/>
            <Button text='neutral' onclick={() => increaseCount(neutral, setNeutral)} />
            <Button text='bad' onclick={() => increaseCount(bad, setBad)}/>

           <h1>Statistic</h1>
           <Statistic text='good' count={good}/>
           <Statistic text='neutral' count={neutral}/>
           <Statistic text='bad' count={bad}/>

       </>
   )
};

ReactDOM.render(<App/>, document.getElementById('root'));

