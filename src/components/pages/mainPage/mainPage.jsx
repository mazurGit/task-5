import Filter from './filter/Filter';
import Cards from './cards/Cards';

import { useState } from 'react';

const MainPage = () =>{
    const[filtersValue, setFiltersValue] = useState(null)
    
    return (
        <>
            <Filter setFilters = {setFiltersValue}/>
            <Cards filters={filtersValue}/>
        </>   
    )
}

export default MainPage;