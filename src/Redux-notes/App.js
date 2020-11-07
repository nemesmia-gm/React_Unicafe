import React, {useEffect} from 'react'
import NewNote from "./NewNote";
import Notes from "./Notes";
import VisibilityFilter from "./VisibilityFilter";
import {useDispatch} from "react-redux";
import {initializeNotes} from "./reducers/noteReducer";

/*
* The useDispatch-hook provides any React component access to the dispatch-function of the redux-store defined in
* index.js. This allows all components to make changes to the state of the redux-store.
* The component can access the notes stored in the store with the useSelector-hook of the react-redux library.
* */

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {dispatch(initializeNotes())
    }, [dispatch]);

    return(
        <div>
            <NewNote />
            <VisibilityFilter />
            <Notes />
        </div>
    )
};

export default App;
