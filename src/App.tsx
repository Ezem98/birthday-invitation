import { Route, Routes } from "react-router-dom";
import GuestCard from "./components/guestCard";

export default function App() {
  return (
    <Routes>
      <Route path="/:slug" element={<GuestCard />} />
    </Routes>
  );
}
