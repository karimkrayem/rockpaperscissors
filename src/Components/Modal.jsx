import React from 'react'
import './Modal.css'
import modalimg from '../rock_paper_cissor/images/image-rules.svg'
import close from '../rock_paper_cissor/images/icon-close.svg'

const Modal = ({ modal }) => {

    return (
        <div className='overlay'>
            <div className='bg-modal' >
                <div className='title'>
                    <h3>RULES</h3>

                    <img onClick={modal} src={close} className="closemd" alt="close" />
                </div>
                <img src={modalimg} alt="modal" />
            </div>
        </div>
    )
}

export default Modal