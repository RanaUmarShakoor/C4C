import { Page } from "./Page"
import { Page2 } from "./Page2"
import { Page3 } from "./pages/Page3"
import { Page4 } from "./pages/Page4"
import { HowPage } from "./pages/HowPage";
import { Orange1 } from "./pages/Orange1";
import { Orange2 } from "./pages/Orange2";
import { Blue1 } from "./pages/Blue1";
import { Blue2 } from "./pages/Blue2";
import { ReviewPage } from "./pages/ReviewPage";
import { FavouritesPage } from "./pages/FavouritesPage";
import { VasePage } from "./pages/VasePage";

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

import './App.css';
import { BrowserRouter } from "react-router-dom";


function App() {


  return (
    <BrowserRouter>
      {/* <Page /> */}
      {/* <Page2 /> */}
      {/* <Page3 /> */}
      {/* <Page4 /> */}
      {/* <HowPage /> */}
      {/* <Orange1 /> */}
      {/* <Orange2 /> */}
      {/* <Blue1 /> */}
      {/* <Blue2 /> */}
      <ReviewPage />
      {/* <FavouritesPage /> */}
      {/* <VasePage /> */}
    </BrowserRouter>
  )
}

export default App
