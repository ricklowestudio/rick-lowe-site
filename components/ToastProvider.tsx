"use client";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProviderProps {
	children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
	return (
		<>
			{children}
			<ToastContainer
				position={toast.POSITION.TOP_RIGHT}
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover={false}
				theme="light"
				transition={Slide}
			/>
		</>
	);
}
