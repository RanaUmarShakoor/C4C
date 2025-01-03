import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";

import "@fontsource/prompt/400.css";
import "@fontsource/prompt/500.css";

import "./App.css";

import { Page } from "./Page";
import { Page2 } from "./Page2";
import { Page3 } from "./pages/Page3";
import { Page4 } from "./pages/Page4";
import { HowPage } from "./pages/HowPage";
import { Orange1 } from "./pages/Orange1";
import { Orange2 } from "./pages/Orange2";
import { Blue1 } from "./pages/Blue1";
import { Blue2 } from "./pages/Blue2";
import { ReviewPage } from "./pages/ReviewPage";
import { FavouritesPage } from "./pages/FavouritesPage";
import { VasePage } from "./pages/VasePage";

import { OrangeSettings } from './pages/Settings/OrangeSettings';
import { BlueSettings } from './pages/Settings/BlueSettings';
import { AddOffer } from './pages/Settings/AddOffer';
import { ModifyOffer } from './pages/Settings/ModifyOffer';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Page} />
        <Route path="/two" Component={Page2} />
        <Route path="/three" Component={Page3} />
        <Route path="/four" Component={Page4} />
        {/*  */}
        <Route path="/five" Component={HowPage} />
        <Route path="/six" Component={Orange1} />
        <Route path="/seven" Component={Orange2} />
        <Route path="/eight" Component={Blue1} />
        {/*  */}
        <Route path="/nine" Component={Blue2} />
        <Route path="/ten" Component={ReviewPage} />
        <Route path="/eleven" Component={FavouritesPage} />
        <Route path="/twelve" Component={VasePage} />
        {/*  */}
        <Route path="/thirteen" Component={OrangeSettings} />
        <Route path="/fourteen" Component={BlueSettings} />
        <Route path="/fifteen" Component={AddOffer} />
        <Route path="/sixteen" Component={ModifyOffer} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
