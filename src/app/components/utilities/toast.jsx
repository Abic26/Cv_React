import React, { useRef } from 'react';
// import { Button } from "primereact/button";
import { Toast as PrimeToast } from "primereact/toast"; // Renombrar el importado
import '@/app/globals.css'

export const ToastComponent = ({ severity, summary, detail, children }) => {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity, summary, detail });
    };

    return (
        <div>
            <PrimeToast ref={toast} className="custom-toast text-white" position='center' />
            <div onClick={show}>
              {children}
            </div>
        </div>
    );
}