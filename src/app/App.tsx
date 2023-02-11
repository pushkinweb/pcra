import './styles/style.scss'
import Logo from './logo.svg'

export const App = () => {
    return (
        <div className={'App'}>
            <Logo className='App-logo' />
            <h1>Pushkin Crate React App</h1>
            <span className={'description'}>
                Pushkin Create React App(PCRA). This is the starting setup for a
                react project
            </span>
        </div>
    )
}
