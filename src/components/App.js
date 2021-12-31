import { Provider } from "react-redux"
import InputLogic from './InputLogic'
import generateStore from "./redux/store"
import Header from './Header'
import ItemList from './ItemList'

const App = () => {
  const store = generateStore()
  return (
    <Provider store={store}>
      <Header/>
      <InputLogic/>
      <ItemList/>
    </Provider>
  )
}

export default App
