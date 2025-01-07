import React, { useContext, useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        setTimeout(() => {
            check().then(data => {
                user.setUser(data)
                user.setIsAuth(true)
            }).catch((e) => {
                user.setUser({})
                user.setIsAuth(false)
                console.error('My: ' + e.message)
            })
            .finally(() => setLoading(false))
        }, 50)
    }, [])

    if (loading) {
        return <Spinner animation={"grow"} />
    }

    return (
        <HashRouter>
            <NavBar />
            <AppRouter />
        </HashRouter>
  );
})

export default App;
