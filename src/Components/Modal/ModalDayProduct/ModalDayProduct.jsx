import React, { useEffect} from "react";
import { createPortal } from "react-dom";
import './ModalDayProduct.scss'
import { IoMdClose } from "react-icons/io";


const modalRoot = document.querySelector("#modal-root")

function ModalDayProduct({children, toggleModal}) {
useEffect(()=> {
const closeModal = (event) => {
    if (event.code==="Escape"){
        toggleModal()
       }}
    window.addEventListener("keydown", closeModal)
    document.body.style.overflow = "hidden"
      return () => {
        window.removeEventListener("keydown", closeModal)
        document.body.style.overflow = ""}
}, [])

    const closeOnClick = (event) => {
       if (event.target===event.currentTarget){
        toggleModal()
       }}

return createPortal (
    <div className="overlay" onClick={closeOnClick}>
      <div className="inner">
        {children}
        <button type="button" onClick={toggleModal} className="close_button"><IoMdClose size={44} fill="white"/></button>
      </div>
    </div>, modalRoot
  )
}

export default ModalDayProduct
