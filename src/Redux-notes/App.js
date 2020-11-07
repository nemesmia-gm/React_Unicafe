import React from 'react'
import NewNote from "./NewNote";
import Notes from "./Notes";
import VisibilityFilter from "./VisibilityFilter";

/*
* The useDispatch-hook provides any React component access to the dispatch-function of the redux-store defined in
* index.js. This allows all components to make changes to the state of the redux-store.
* The component can access the notes stored in the store with the useSelector-hook of the react-redux library.
* */
const App = () => {
    return(
        <div>
            <NewNote />
            <VisibilityFilter />
            <Notes />
        </div>
    )
};

export default App;
