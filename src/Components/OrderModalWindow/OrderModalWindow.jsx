import './OrderModalWindow.scss'
import { IoCloseOutline } from "react-icons/io5";

const OrderModalWindow = ({onClose}) => {
  return (
    <div className="modal__background">
      <div className="modal__window">
        <div className="modal__message">
          <p className="modal__message-header">Congratulations</p>
          <p className="modal__message-body">
            Your order has been successfully placed on the website.
          </p>
          <p className="modal__message-body">
            A manager will contact you shortly to confirm your order.
          </p>
        </div>
        <div>
          <IoCloseOutline className="modal__close-icon" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default OrderModalWindow;
