import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"



const Modal = () => {
    const { setShowModal, showModal } = useContext(UserContext);
    const [numbers, setNumbers] = useState<number[]>([]);

    const closeModal = () => {
      setShowModal(false);
    }

    useEffect(() => {
        const numbersString = localStorage.getItem('clickedNumbers');
        const numbersArray = numbersString ? JSON.parse(numbersString) : [];
        setNumbers(numbersArray);
      }, [showModal]); 
     

    
  return (
    <div className="modal">
       <h1 className="modal-title">თქვენი არჩეული რიცხვები</h1>
       <span onClick={closeModal}>X</span>
       <div className="balls">
         {numbers.map((value: number, i: number) => (
            <div key={i} >
            <p className="ball">{value}</p>
          
            </div>
         ))}
  
  </div>
    </div>
  )
}

export default Modal
