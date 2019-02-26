import React from 'react'
import { ReactComponent as SearchIcon } from '../../../img/magnifying-glass.svg';
import Input from '../../UI/Input'

const SearchBar = () => {
    return (
        <div className='search'>
            <Input
                class='search__input'
                elementType='input' />
            <button className='search__button'><SearchIcon fill='grey' /></button>
        </div >
    )
}

export default SearchBar
