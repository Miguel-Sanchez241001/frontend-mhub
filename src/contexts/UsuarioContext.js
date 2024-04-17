// src/context/UserContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Inicializa un contexto
const UserContext = createContext(null);

// Componente proveedor que envuelve a tus componentes en el árbol
function UserProvider({ children }) {
    const [user, dispatch] = useReducer(userReducer, null);

    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}

// Función reducer para manejar las acciones
function userReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return action.payload; // asume que payload es el objeto usuario
        case 'LOGOUT':
            return null;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

// Hook personalizado para usar el contexto de usuario
function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}

export { UserProvider, useUser };


