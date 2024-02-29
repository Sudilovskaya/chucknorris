import React, { useState } from "react";
import './style.scss'
import { IconClose } from "../../Images/IconClose";
import { useDispatch, useSelector } from "react-redux";
import { fetchFacts } from "../../../state/facts/factsFetch";
import { clearFacts } from "../../../state/facts/factsSlice";

export const Input = () => {
  const [inputText, setInputText] = useState('')
  const dispatch = useDispatch()
  const facts = useSelector(state => state.facts)

  const handleInputChange = (e) => {
    const value = e.target.value

    setInputText(value)

    value && value.length >= 3
      ? dispatch(fetchFacts(value))
      : dispatch(clearFacts())
  }

  const handleClear = () => {
    setInputText('');
    dispatch(clearFacts())
  };

  return (
    <div className='search'>
      <input
        type='text'
        className='search__input'
        placeholder='Search jokes...'
        onChange={handleInputChange}
        value={inputText}
        autoFocus
      />
      {inputText && (
        <button
          className='search__button'
          type='button'
          onClick={handleClear}
        >
          <IconClose/>
        </button>
      )}
      {inputText && inputText.length >= 3 && (
        <p className='caption'>Found jokes: {facts.facts.length}</p>
      )}
    </div>
  )
}