import './styles.css'

export const Header = (props) => {
    return (
        <header>
            <h1>Lista de Presença</h1>
            <div>
                <strong>{props.name}</strong>
                <img src={props.avatar} alt="" />
            </div>
        </header>
    )
}