import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { GameList } from "../components/game/GameList"
import { EventList } from "../components/events/EventList"
import { GameForm } from "../components/game/GameForm"
import { EventForm } from "../components/events/EventForm"
import { GameEdit } from "../components/game/GameEdit"
import { EventEdit } from "../components/events/EventEdit"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                {/* Add Routes here */}
                <Route path="/games" element={<GameList />} />
                <Route path="/events" element={<EventList />} />
                <Route path="/events/new" element={<EventForm />} />
                <Route path="/games/new" element={<GameForm />} />
                <Route path="/games/edit/:gameId" element={<GameEdit />} />
                <Route path="/events/edit/:eventId" element={<EventEdit />} />
            </Route>
        </Routes>
    </>
}
