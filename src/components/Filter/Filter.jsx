import cl from './Filter.module.scss'
import { Checkbox } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { checkboxAction } from '../../store/checkboxReducer'
import { defaultFiveTicketsAction } from '../../store/ticketReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const checkboxes = useSelector((state) => state.filt.checkboxes)

  const onChange = (e, checkboxName) => {
    console.log(`checked = ${e.target.checked}`)
    dispatch(checkboxAction(checkboxName))
    dispatch(defaultFiveTicketsAction())
  }

  return (
    <div className={cl.filter_wrap}>
      <h2 className={cl.filter_title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <div className={cl.checkbox_wrap}>
        <span className={cl.item_wrap}>
          <Checkbox
            className={cl.cursor}
            style={{ paddingLeft: '20px' }}
            checked={checkboxes.all}
            onChange={(e) => onChange(e, 'all')}
          >
            <span className={cl.chekbox_text}>Все</span>
          </Checkbox>
        </span>
        <span className={cl.item_wrap}>
          <Checkbox
            className={cl.cursor}
            style={{ paddingLeft: '20px' }}
            checked={checkboxes.noTransfers}
            onChange={(e) => onChange(e, 'noTransfers')}
          >
            <span className={cl.chekbox_text}>Без пересадок</span>
          </Checkbox>
        </span>
        <span className={cl.item_wrap}>
          <Checkbox
            className={cl.cursor}
            style={{ paddingLeft: '20px' }}
            checked={checkboxes.oneTransfer}
            onChange={(e) => onChange(e, 'oneTransfer')}
          >
            <span className={cl.chekbox_text}>1 пересадка</span>
          </Checkbox>
        </span>
        <span className={cl.item_wrap}>
          <Checkbox
            className={cl.cursor}
            style={{ paddingLeft: '20px' }}
            checked={checkboxes.twoTransfers}
            onChange={(e) => onChange(e, 'twoTransfers')}
          >
            <span className={cl.chekbox_text}>2 пересадки</span>
          </Checkbox>
        </span>
        <span className={cl.item_wrap}>
          <Checkbox
            className={cl.cursor}
            style={{ paddingLeft: '20px' }}
            checked={checkboxes.threeTransfers}
            onChange={(e) => onChange(e, 'threeTransfers')}
          >
            <span className={cl.chekbox_text}>3 пересадки</span>
          </Checkbox>
        </span>
      </div>
    </div>
  )
}

export default Filter
