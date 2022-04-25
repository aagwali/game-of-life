import Content from "./Content"
import Header from "./Header"
import { AppCanvas } from "./styles"

const App = () => (
  <AppCanvas>
    <Header />
    <Content gameState={[[]]} />
  </AppCanvas>
)

export default App
