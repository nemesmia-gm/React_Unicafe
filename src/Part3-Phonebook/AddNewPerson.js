import React from "react";

const AddNewPerson = ({newName, newTelefon, handleAddPerson, handleNameChange, handleTelefonChange}) => {
    return (
        <div>
            <form onSubmit={handleAddPerson}>
                <div>
                    Name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    Telefon: <input value={newTelefon} onChange={handleTelefonChange}/>
                </div>
                <div>
                    <button type="submit" >add new person</button>
                </div>
            </form>
        </div>
    )
};

export  default AddNewPerson;
