import { createContext, useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";

export const LoggingContext = createContext();

const LoggingProvider = ({children}) => {

    const [clave, setClave] = useState("")

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleRegister = (data) => {
        dispatch({
            type: "REGISTER",
            payload: data
        })
        setClave(data.passNameRef)
    }

    const handleLogin = (data) => {
        if(data.pass === clave){
            dispatch({
                type: "LOGIN"
            })
        }
    }

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        })
    }

    return (
        <LoggingContext.Provider
            value={{
                handleLogin,
                handleLogout,
                handleRegister,
                state
            }}
        >
            {children}
        </LoggingContext.Provider>
    )
}

export default LoggingProvider;