import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./modalportal.css";
const modalRoot = document.getElementById("root");

interface TypeProps {
	children: JSX.Element | string;
	state?: boolean | undefined;
	title?: JSX.Element | string;
	className?: string;
	classNameTitle?: string;
	classNameBody?: string;
	classNameFooter?: string;
	classNameBtnOne?: string;
	onBtnClose?: Function;
	onBtnAceptar?: Function;
	onBtnThird?: Function;
	onBtnFourth?: Function;
	nameBtn?: {
		ok?: string;
		cancel: string;
		secondBtn?: string;
		thirdBtn?: string;
	};
}

const MondalIndex = ({
	children,
	state = true,
	title = "New Portal",
	className = "Modal-Default",
	classNameTitle = "Modal-title-default",
	classNameBody = "Modal-body-content-default",
	classNameFooter = "Modal-footer-content-default",
	classNameBtnOne = "classNameBtnClose",
	onBtnClose,
	onBtnAceptar,
	onBtnThird,
	onBtnFourth,
	nameBtn = { ok: "OK", cancel: "CLOSE" },
}: TypeProps) => {
	const [stateModal, setstateModal] = useState(state);
	const [withBtn, setwithBtn] = useState("");
	const haldlenCloseModal = () => {
		setstateModal(false);
		if (onBtnClose) onBtnClose(false);
	};
	const closeModal = () => {
		haldlenCloseModal();
	};
	const closeOutModal = (e: React.MouseEvent<HTMLElement>) => {
		if (e.currentTarget === e.target) {
			haldlenCloseModal();
		}
	};
	const aceptarModal = () => {
		setstateModal(false);
		if (onBtnAceptar) onBtnAceptar(false);
	};
	const secondModal = () => {
		setstateModal(false);
		if (onBtnThird) onBtnThird(false);
	};
	const thirModal = () => {
		setstateModal(false);
		if (onBtnFourth) onBtnFourth(false);
	};
	useEffect(() => {
		switch (Object.entries(nameBtn).length) {
			case 1:
				setwithBtn("classBtnOne");
				break;
			case 2:
				setwithBtn("classBtnTwo");
				break;
			case 3:
				setwithBtn("classBtnTree");
				break;
			default:
				setwithBtn("classBtnFour");
				break;
		}
		return () => {};
	}, [nameBtn]);
	return (
		<div
			className={`Modal ${stateModal ? "activeModal" : "disableModal "}`}
			onClick={closeOutModal}
		>
			<div className={`Modal-Content Moda-Position ${className}`}>
				<div className={`Modal-title  ${classNameTitle}`}>
					<div className="Modal-title-content">{title}</div>
				</div>
				<div className="Modal-body">
					<div className={`Modal-body-content ${classNameBody}`}>
						{children}
					</div>
				</div>
				<div className="Modal-footer">
					<div className={`Modal-footer-content ${classNameFooter}`}>
						{onBtnAceptar ? (
							<div>
								{nameBtn.ok && (
									<button
										onClick={aceptarModal}
										className={`classNameBtnAcp ${withBtn}`}
										autoFocus
									>
										{nameBtn.ok}
									</button>
								)}
								{nameBtn.secondBtn && (
									<button
										onClick={secondModal}
										className={`classNameBtnSecond ${withBtn}`}
									>
										{nameBtn.secondBtn}
									</button>
								)}
								{nameBtn.thirdBtn && (
									<button
										onClick={thirModal}
										className={`classNameBtnThird ${withBtn}`}
									>
										{nameBtn.thirdBtn}
									</button>
								)}
								<button
									onClick={closeModal}
									className={`classNameBtn ${withBtn}`}
								>
									{nameBtn.cancel}
								</button>
							</div>
						) : (
							<button
								onClick={closeModal}
								className={`${classNameBtnOne}`}
								autoFocus
							>
								{nameBtn.cancel}
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

function ModalPortal(props: TypeProps) {
	const idRoot = document.createElement("modal_root_portal");
	useEffect(() => {
		modalRoot?.appendChild(idRoot);
		return () => {
			modalRoot?.removeChild(idRoot);
		};
	}, [idRoot]);
	return createPortal(<MondalIndex {...props} />, idRoot);
}

export default ModalPortal;
