import Filter from './filter/Filter';
import Cards from './cards/Cards';

import { useEffect } from 'react';
import { resetFilters } from '../../../store/actions/trips'
import { useDispatch } from 'react-redux';


const MainPage = () =>{
    const dispatch = useDispatch()
    
    useEffect(() => { 
        dispatch(resetFilters())
    })
    
    return (
        <>
            <Filter />
            <Cards />
        </>   
    )
}

export default MainPage;