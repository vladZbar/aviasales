import React from 'react'
import { Button } from 'antd'

const MyButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      style={{
        marginBottom: '50px',
        background: '#2196F3',
        height: '50px',
      }}
      type="primary"
    >
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </Button>
  )
}

export default MyButton
