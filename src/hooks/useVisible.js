import { useState } from 'react'

export const useVisible = (initialVisible = false) => {
  const [visible, setVisible] = useState(initialVisible)

  const show = () => setVisible(true)

  const close = () => setVisible(false)

  return { visible, show, close }
}
