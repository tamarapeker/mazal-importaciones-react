import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { PageInConstruction } from "./components/PageInConstruction/PageInConstruction"

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInConstruction />}/>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
