import './filter.css'

import { useState } from 'react';

const Filter = (props) =>{
    const [search, setSearch] = useState('');
    const [duration, setDuration] = useState('');
    const [level,setLevel] = useState('');


    const onFilterChange = (e) => {
      const target = e.target;
      const {setFilters} = props;

      switch(target.name){

        case 'search':
          setSearch(target.value)
          setFilters((state)=> ({...state, search:target.value}))
          break;

        case 'duration':
          const value = target.value
            .split('x')
            .map(item => {
              return item? item.replace(/\D/g,''): Infinity
            })

          setDuration(target.value)
          setFilters((state)=> ({...state, duration:value}))
          break;

        case 'level':
          setLevel(target.value)
          setFilters((state)=> ({...state, level:target.value}))
          break;

        default:
          break
      }     
    }



    return (
      <section className="trips-filter">
        <h2 className="visually-hidden">Trips filter</h2>
        <form className="trips-filter__form" autoComplete="off">
          <label className="trips-filter__search input">
            <span className="visually-hidden">Search by name</span>
            <input 
              name="search" 
              type="search" 
              placeholder="search by title" 
              onChange={onFilterChange}
              value={search}
            />
          </label>

          <label className="select">
            <span className="visually-hidden">Search by duration</span>
            <select 
              name="duration"
              onChange={onFilterChange}
              value={duration}
            >
              <option value="">duration</option>
              <option value="0_x_5">&lt; 5 days</option>
              <option value="5_x_10">&lt; 10 days</option>
              <option value="10_x">&ge; 10 days</option>
            </select>
          </label>
          
          <label className="select">
            <span className="visually-hidden">Search by level</span>
            <select 
              name="level"
              onChange={onFilterChange}
              value={level}
            >
              <option value="">level</option>
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="difficult">difficult</option>
            </select>
          </label>
        </form>
      </section>
    )
}

export default Filter;