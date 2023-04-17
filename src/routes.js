import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import App from "./App";

export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/App/" element = {<App />} />
        </Routes>
    </BrowserRouter>
)