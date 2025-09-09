import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./components/404";
import GuestCard from "./components/guestCard";

export default function App() {
  return (
    <Routes>
      <Route path="/:slug" element={<GuestCard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
