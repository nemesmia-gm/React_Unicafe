import React from "react";

const SearchFilter = ({filter, handleFilterChange}) => {
return (
    <div>
        filter shown with: <input value={filter} onChange={handleFilterChange} />
    </div>
)
};

export default SearchFilter
