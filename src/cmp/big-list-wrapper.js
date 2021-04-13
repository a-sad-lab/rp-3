import {useCallback} from 'react'

import {BigList} from './big-list'

export function BigListWrapper() {
  console.log(`render BigListWrapper`)
  
  const fn = useCallback(e => {
    console.log(e.target.textContent)
  }, [])

  return (
    <BigList fn={fn} />
  )
}
