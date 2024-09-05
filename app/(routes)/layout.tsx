import React from 'react'
interface Props {
    children: React.ReactNode
}
const RouteLayout: React.FC<Props> = ({children}) => {
  return (
      <div className='container custom-prose py-8'>{children}</div>
  )
}

export default RouteLayout