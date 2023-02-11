import {createRoot} from 'react-dom/client'
import {App} from 'app/App'

const container = document.getElementById('rootMyApp')
const root = createRoot(container!)

root.render(
    <App/>
)
