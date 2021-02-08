import React from "react";
import "./WarehouseModal.scss";
import close from "../../assets/Icons/close-24px.svg";
class WarehouseModal extends React.Component {
	// componentDidUpdate() {
	// }
	render() {
		const { show, hideModal, warehouse } = this.props;
		if (!show) {
			return null;
		}
		return (
			<>
				<div className="modal__overlay"></div>
				<div className="modal">
					<img
						src={close}
						className="modal__close"
						onClick={hideModal}
						alt="close-img"
					></img>
					{/* need to change Television as dynamic later */}
					<p className="modal__heading">Delete {warehouse} warehouse?</p>
					<p className="modal__p">
						Please confirm that you’d like to delete {warehouse} from the list
						of warehouses. You won’t be able to undo this action
					</p>
					<div className="modal__btn">
						<button onClick={hideModal} className="modal__cancel">
							Cancel
						</button>
						<button className="modal__delete">Delete</button>
					</div>
				</div>
			</>
		);
	}
}
export default WarehouseModal;
