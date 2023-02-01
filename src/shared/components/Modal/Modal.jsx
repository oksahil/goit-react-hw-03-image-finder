import { Component } from "react";
import { createPortal } from "react-dom";

import css from "./modal.module.css";

const modalRoot = document.querySelector("#modal-root");
console.log(modalRoot);

class Modal extends Component {
    closeModal = ({ target, currentTarget }) => {
        if (target === currentTarget) {
            this.props.close()
        }
    }
    render() {
        const { children} = this.props;
        const { closeModal } = this;
        return (
            createPortal(<div className={css.overlay} onClick={closeModal}>
                <div className={css.modal}>
                    {/* <span className={css.close} onClick={close}>X</span> */}
                    { children }
                </div>
            </div>, modalRoot)
                )
            }
}

export default Modal;