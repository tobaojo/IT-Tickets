import React from 'react'

const Modal = ({ closeModal }) => {
  return (
    <div>
        <div>
            <button onClick={()=> closeModal(false)}> X </button>
            <div className='title'>create a ticket</div>
            <div>form</div>
            <div><button onClick={()=> closeModal(false)}>Cancel</button><button>Continue</button></div>
        </div>
    </div>
  )
}

export default Modal