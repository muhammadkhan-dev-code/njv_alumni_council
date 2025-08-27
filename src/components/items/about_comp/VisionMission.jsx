import React from 'react'
import Vision from './Vision'
import Mission from './mission'

const VisionMission = () => {
  return (
    <div>
       <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Vision/>
        <Mission/>
      </div>
    </div>
  )
}

export default VisionMission
