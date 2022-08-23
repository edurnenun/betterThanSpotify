import { IonContent } from "@ionic/react"
import { useState, useEffect } from "react"
import axios from "axios";

export default function useAuth(code: any){
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(()=>{
        axios.post('http://localhost:3001/code',{
            code,
        })
        .then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({},null!, '/')
        })
        .catch(()=>{
            const win: Window = window;
            win.location = "/"
        })
    }, [code])

    useEffect(()=>{

    }, [refreshToken, expiresIn])

    return accessToken
}