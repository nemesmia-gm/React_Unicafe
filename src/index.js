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
    const [all, setAll] = useState(0);
    const [average, setAverage] = useState(0);
    const [positivePercentage, setPositivePercentage] = useState(0);

    const increaseCount = (value, setMethod) => {
        return  setMethod(value + 1);
    };

    const badOrNeutralClicked = (value, setMethod) => {
        increaseCount(value, setMethod, false);
        calculateStatistics(false);
    };

    const goodClicked = () => {
        increaseCount(good, setGood, true);
        calculateStatistics(true);
    };

    const calculateStatistics = (goodClicked) => {
        let allSum = good + bad + neutral + 1; //old sum incremented by one

        setAll(allSum);
        setAverage(allSum/3);

        let newValueOfGood = good;
        if(goodClicked)
        {
            newValueOfGood = good+1;
        }
        setPositivePercentage(newValueOfGood*100/allSum);
    };

    return (
       <>
            <h1> Give Feedback </h1>
            <Button text='good' onclick={() => goodClicked()} />
            <Button text='neutral' onclick={() => badOrNeutralClicked(neutral, setNeutral)} />
            <Button text='bad' onclick={() => badOrNeutralClicked(bad, setBad)}/>

           <h1>Statistic</h1>
           {all>0
               ? <div><Statistic text='good:' count={good}/>
               <Statistic text='neutral:' count={neutral}/>
               <Statistic text='bad:' count={bad}/>
               <Statistic text='all:' count={all}/>
               <Statistic text='average:' count={average}/>
               <Statistic text='positive:' count={positivePercentage}/>
               </div>
               : <div> 'No feedback given. </div>
           }

       </>
   )
};

ReactDOM.render(<App/>, document.getElementById('root'));

