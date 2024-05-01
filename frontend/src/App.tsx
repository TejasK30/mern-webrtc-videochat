import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Room from "./screens/Room"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>

        <Route path="/room/:roomId">
          <Layout>
            <Room />
          </Layout>
        </Route>
      </Routes>
    </>
  )
}

export default App
