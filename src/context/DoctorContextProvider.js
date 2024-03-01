import React, { createContext, useContext } from 'react';

const doctorContext = createContext();
export const useDoctor = useContext(doctorContext);

export default function DoctorContextProvider({ children }) {
	const values = {};
	return <doctorContext.Provider value={values}>{children}</doctorContext.Provider>;
}
