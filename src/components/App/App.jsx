import './reset.css'
import './App.module.scss'
import cl from './App.module.scss'
import Header from '../Header/Header'
import Tabs from '../Tabs/Tabs'
import TicketList from '../TiketList/TicketList'
import Filter from '../Filter/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetTickets, fetchSearchId } from '../../store/asyncActions/tickets'
import { useEffect } from 'react'
// import { Offline, Online } from 'react-detect-offline'

function App() {
  const dispatch = useDispatch()
  const searchId = useSelector((state) => state.ticket.searchId)
  const stopFlag = useSelector((state) => state.ticket.stop)

  useEffect(() => {
    if (stopFlag) {
      return
    }

    const interval = setInterval(() => {
      dispatch(fetchGetTickets())
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [searchId, stopFlag, dispatch])

  useEffect(() => {
    dispatch(fetchSearchId())
  }, [])

  return (
    <>
      {/* <Online> */}
      <div className={cl.main_container}>
        <Filter />
        <div className={cl.content_container}>
          <Header />
          <Tabs />
          <TicketList />
        </div>
      </div>
      {/* </Online> */}
      {/* <Offline> */}
      {/* <div>ИНЕТА НЕТ</div> */}
      {/* </Offline> */}
    </>
  )
}

export default App
