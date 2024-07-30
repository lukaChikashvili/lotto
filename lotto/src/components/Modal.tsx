import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"



const Modal = () => {
    const { setShowModal, showModal, setShowRealModal, setShowBoxes , setCameraDefault } = useContext(UserContext);
    const [numbers, setNumbers] = useState<number[]>([]);

    const closeModal = () => {
      setShowRealModal(false)
    }

    const startPlaying = () => {
      setShowRealModal(false);
      setShowBoxes(false);
      setCameraDefault(true);

    }

    useEffect(() => {
        const numbersString = localStorage.getItem('clickedNumbers');
        const numbersArray = numbersString ? JSON.parse(numbersString) : [];
        setNumbers(numbersArray);
      }, [showModal]); 
     
const clearNumbers = () => {
    localStorage.clear();
    setShowModal(false)
}
    
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
 <div className="buttons">
  <button onClick={startPlaying}>გაგრძელება</button>
  <button onClick={clearNumbers}>თავიდან არჩევა</button>
  </div>
    </div>
  )
}

export default Modal
