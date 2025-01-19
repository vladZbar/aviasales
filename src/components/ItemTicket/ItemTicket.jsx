import React from 'react'
import cl from './ItemTicket.module.scss'
import { v4 as uuidv4 } from 'uuid'
import { add } from 'date-fns'

const ItemTicket = ({ price, logo, flights }) => {
  //pics.avs.io/99/36/{IATA_CODE_HERE}.png
  // https://www.daisycon.com/en/developers/productfeeds/product-images/airline-logos/
  const elements = flights.map((flight) => {
    const timeDurationStamp = flight.duration
    const departureTime = new Date(flight.date)

    function formatMinutes(minutes) {
      const hours = Math.floor(minutes / 60)
      const remainingMinutes = minutes % 60
      return `${String(hours).padStart(2, '0')}ч ${String(remainingMinutes).padStart(2, '0')}м`
    }
    const formattedDuration = formatMinutes(timeDurationStamp)

    function formatTime(date) {
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      return `${hours}:${minutes}`
    }

    const arrivalTime = new Date(departureTime.getTime() + timeDurationStamp * 60000)
    const formattedDepartureTime = formatTime(departureTime)
    const formattedArrivalTime = formatTime(arrivalTime)
    const flightTimeRange = `${formattedDepartureTime} - ${formattedArrivalTime}`

    const transfers =
      flight.stops.length === 0
        ? 'БЕЗ ПЕРЕСАДОК'
        : flight.stops.length === 1
          ? '1 ПЕРЕСАДКА'
          : `${flight.stops.length} ПЕРЕСАДКИ`

    return (
      <div key={uuidv4()} className={cl.ticket_content}>
        <div className={cl.wrap_value}>
          <h2 className={cl.title_value}>{`${flight.origin} - ${flight.destination}`}</h2>
          <span className={cl.value}>{flightTimeRange}</span>
        </div>
        <div className={cl.wrap_value}>
          <h2 className={cl.title_value}>В ПУТИ</h2>
          <span className={cl.value}>{formattedDuration}</span>
        </div>
        <div className={cl.wrap_value}>
          <h2 className={cl.title_value}>{transfers}</h2>
          <span className={cl.value}>{flight.stops.join(',')}</span>
        </div>
      </div>
    )
  })

  return (
    <li className={cl.ticket}>
      <header className={cl.header}>
        <span> {price} Р</span>
        <img src={`http://pics.avs.io/99/36/${logo}.png`} alt="s7logo" />
      </header>
      <section className={cl.ticket_conntent_wrap}>{elements}</section>
    </li>
  )
}

export default ItemTicket
