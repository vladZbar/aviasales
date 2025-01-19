import React, { useMemo } from 'react'
import cl from './TicketList.module.scss'
import ItemTicket from '../ItemTicket/ItemTicket'
import MyButton from '../UI/MyButton'
import { v4 as uuidv4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import { addFiveTicketsAction } from '../../store/ticketReducer'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const TicketList = () => {
  const dispatch = useDispatch()
  const amount = useSelector((state) => state.ticket.amount)
  const sortOption = useSelector((state) => state.tabs.sortOption)
  const checkboxes = useSelector((state) => state.filt.checkboxes)
  const loading = useSelector((state) => state.ticket.loading)

  const tickets = useSelector((state) => state.ticket.tickets).slice(0, amount)
  const lowPriceTickets = useSelector((state) => [...state.ticket.tickets].sort((a, b) => a.price - b.price))
  const highSpeedTickets = useSelector((state) =>
    [...state.ticket.tickets].sort((a, b) => {
      return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    })
  )

  const optimalTickets = useSelector((state) =>
    [...state.ticket.tickets].sort((a, b) => {
      return (
        a.price +
        (a.segments[0].duration + a.segments[1].duration) -
        (b.price + (b.segments[0].duration + b.segments[1].duration))
      )
    })
  )

  let ticketList =
    sortOption === 'low_price' ? lowPriceTickets : sortOption === 'high_speed' ? highSpeedTickets : optimalTickets

  const clikHandler = () => {
    dispatch(addFiveTicketsAction())
  }

  const checkBoxSorted = (ticketList) => {
    if (checkboxes.all) {
      return [...ticketList].slice(0, amount)
    } else {
      if (checkboxes.noTransfers && checkboxes.oneTransfer && checkboxes.twoTransfers) {
        return [...ticketList]
          .filter(
            (ticket) =>
              ticket.segments[0].stops.length === 0 ||
              ticket.segments[0].stops.length === 1 ||
              ticket.segments[0].stops.length === 2
          )
          .slice(0, amount)
      }

      if (checkboxes.noTransfers && checkboxes.oneTransfer && checkboxes.threeTransfers) {
        return [...ticketList]
          .filter(
            (ticket) =>
              ticket.segments[0].stops.length === 0 ||
              ticket.segments[0].stops.length === 1 ||
              ticket.segments[0].stops.length === 3
          )
          .slice(0, amount)
      }

      if (checkboxes.noTransfers && checkboxes.twoTransfers && checkboxes.threeTransfers) {
        return [...ticketList]
          .filter(
            (ticket) =>
              ticket.segments[0].stops.length === 0 ||
              ticket.segments[0].stops.length === 2 ||
              ticket.segments[0].stops.length === 3
          )
          .slice(0, amount)
      }

      if (checkboxes.oneTransfer && checkboxes.twoTransfers && checkboxes.threeTransfers) {
        return [...ticketList]
          .filter(
            (ticket) =>
              ticket.segments[0].stops.length === 1 ||
              ticket.segments[0].stops.length === 2 ||
              ticket.segments[0].stops.length === 3
          )
          .slice(0, amount)
      }

      if (checkboxes.noTransfers && checkboxes.oneTransfer) {
        return [...ticketList]
          .filter((ticket) => ticket.segments[0].stops.length === 0 || ticket.segments[0].stops.length === 1)
          .slice(0, amount)
      }

      if (checkboxes.noTransfers && checkboxes.twoTransfers) {
        return [...ticketList]
          .filter((ticket) => ticket.segments[0].stops.length === 0 || ticket.segments[0].stops.length === 2)
          .slice(0, amount)
      }

      if (checkboxes.noTransfers && checkboxes.threeTransfers) {
        return [...ticketList]
          .filter((ticket) => ticket.segments[0].stops.length === 0 || ticket.segments[0].stops.length === 3)
          .slice(0, amount)
      }

      if (checkboxes.oneTransfer && checkboxes.twoTransfers) {
        return [...ticketList]
          .filter((ticket) => ticket.segments[0].stops.length === 1 || ticket.segments[0].stops.length === 2)
          .slice(0, amount)
      }

      if (checkboxes.oneTransfer && checkboxes.threeTransfers) {
        return [...ticketList]
          .filter((ticket) => ticket.segments[0].stops.length === 1 || ticket.segments[0].stops.length === 3)
          .slice(0, amount)
      }

      if (checkboxes.twoTransfers && checkboxes.threeTransfers) {
        return [...ticketList]
          .filter((ticket) => ticket.segments[0].stops.length === 2 || ticket.segments[0].stops.length === 3)
          .slice(0, amount)
      }
    }

    if (checkboxes.noTransfers) {
      return [...ticketList].filter((ticket) => ticket.segments[0].stops.length === 0).slice(0, amount)
    }

    if (checkboxes.oneTransfer) {
      return [...ticketList].filter((ticket) => ticket.segments[0].stops.length === 1).slice(0, amount)
    }

    if (checkboxes.twoTransfers) {
      return [...ticketList].filter((ticket) => ticket.segments[0].stops.length === 2).slice(0, amount)
    }

    if (checkboxes.threeTransfers) {
      return [...ticketList].filter((ticket) => ticket.segments[0].stops.length === 3).slice(0, amount)
    }

    return [...ticketList].slice(0, amount)
  }

  const elements = checkBoxSorted(ticketList).map((ticket) => (
    <ItemTicket key={uuidv4()} flights={ticket.segments} price={ticket.price} logo={ticket.carrier} />
  ))

  return (
    <ul className={cl.ticket_container}>
      {loading ? (
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 48,
              }}
              spin
            />
          }
        />
      ) : (
        <>
          {elements}
          <MyButton onClick={clikHandler} />
        </>
      )}
    </ul>
  )
}

export default TicketList
