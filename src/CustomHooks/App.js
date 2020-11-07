import React, { useState } from 'react'

const useField = (type) => {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return {
        type,
        value,
        onChange
    }
}

const App = () => {
    const name = useField('text')
    const born = useField('date')
    const height = useField('number')

    return (
        <div>
            <form>
                name:
                <input {...name}/>
                <br/>
                birthdate:
                <input {...born}/>
                <br />
                height:
                <input {...height}/>
            </form>
            <div>
                {name.value} {born.value} {height.value}
            </div>
        </div>
    )
};

export default App

/*******
 * As the example in the React documentation states, the following two ways of passing props to a component achieve the exact same result:
 <Greeting firstName='Arto' lastName='Hellas' />

 const person = {
  firstName: 'Arto',
  lastName: 'Hellas'
}

 <Greeting {...person} />
 * ******/
