import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { authClient } from "~/lib/auth";
import type { User } from "~/types";
import {useQuery} from '@tanstack/react-query';

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
}
const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthProvider({ children }: { children: ReactNode }) {

    const {data:user,isLoading} = useQuery({
        queryKey: ['loadUser'],
        queryFn:async ():Promise <any>=> {
                const res = await authClient.getSession()
                return res?.data?.user ?? null;
        }
    })
    return <AuthContext.Provider value={{user, isLoading}}>
        {children}
    </AuthContext.Provider>
}

export function useAuth(){
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context;
}


