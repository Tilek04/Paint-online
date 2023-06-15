import React from 'react'
import '../styles/Canvas.scss'
import { observer } from "mobx-react-lite";

export const Canvas = observer( () => {
  return (
    <div className='canvas'>
        <canvas width={600} height={400}/>
    </div>
  )
});
