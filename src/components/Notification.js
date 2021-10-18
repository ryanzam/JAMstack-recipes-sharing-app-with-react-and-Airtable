import React from "react"
import { Toast, ToastContainer } from "react-bootstrap";

const Notification = (props) => {
    const { msgType, message, onClose} = props;

    return <ToastContainer position="top-end" className="p-3">
      <Toast  onClose={() => onClose(false)} delay={5000} className="d-inline-block m-1" bg={msgType} autohide>
      <Toast.Header>
        <i className="bi bi-egg-fried px-3"></i>
        <strong className="me-auto">Delicious Recipes</strong>
      </Toast.Header>
      <Toast.Body className={msgType === 'Dark' && 'text-white'}>
        {message}
      </Toast.Body>
    </Toast>
  </ToastContainer>
}

export default Notification;