const initialState = {
    name: "",
    lastName: "",
    isLoggedIn: false,
    isRegistered: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER": {
            return {
                ...state,
                name: action.payload.name,
                lastName: action.payload.lastName,
                isLoggedIn: false,
                isRegistered: true
            }
        }
        case "LOGIN": {
            return {
                ...state,
                name: action.payload.name,
                lastName: action.payload.lastName,
                isLoggedIn: true,
                isRegistered: true
            }
        }
        case "LOGOUT": {
            return {
                ...state,
                isLoggedIn: false,
            }
        }
        default: {
            return state;
        }
    }
}

const usuarioHumberto = {
    type: "LOGIN",
    payload: {
        name: "Humberto",
        lastName: "Rivero",
    }
}

console.log(reducer(initialState, usuarioHumberto));