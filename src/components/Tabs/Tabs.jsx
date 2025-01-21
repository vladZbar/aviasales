import React from 'react'
import { Radio } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import cl from './Tabs.module.scss'
import { sortOtionAction } from '../../store/tabsReducer'
import { defaultFiveTicketsAction } from '../../store/ticketReducer'
const options = [
  {
    label: 'САМЫЙ ДЕШЕВЫЙ',
    value: 'low_price',
  },
  {
    label: 'САМЫЙ БЫСТРЫЙ',
    value: 'high_speed',
  },
  {
    label: 'ОПТИМАЛЬНЫЙ',
    value: 'optimal',
  },
]

const Tabs = () => {
  const dispatch = useDispatch()
  const sortOption = useSelector((state) => state.tabs.sortOption)

  const handleTabChange = (e) => {
    const newSortOption = e.target.value

    dispatch(defaultFiveTicketsAction())
    dispatch(sortOtionAction(newSortOption))
  }
  return (
    <div className={cl.cursor}>
      <Radio.Group
        onChange={handleTabChange}
        className={cl.tabs_wrap}
        block
        options={options}
        value={sortOption}
        defaultValue="low-price"
        optionType="button"
        buttonStyle="solid"
      />
    </div>
  )
}

export default Tabs
