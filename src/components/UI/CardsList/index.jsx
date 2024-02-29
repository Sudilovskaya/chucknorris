import React from "react";
import './style.scss'
import { useSelector } from "react-redux";

export const CardsList = () => {
  const {facts, isLoading} = useSelector(state => state.facts)

  const dateFormat = date => new Date(date).toLocaleDateString().replaceAll('/', '.')

  return (
    <>
      {!isLoading ? (
        <div className='cards'>
          {facts?.map(card => (
            <a
              key={card.id}
              href={card.url}
              target='_blank'
              rel='noreferrer'
              className='cards__item'
            >
              <p>{card.value}</p>
              <div className="cards__description">
                <span className='caption'>{card.id}</span>
                <span className="caption caption--date">
                  {dateFormat(card.created_at)}
                </span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <span className='loading-message'>Loading...</span>
      )}
    </>
  )
}