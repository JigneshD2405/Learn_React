export default function TabButton(props) {
    return (
        <li><button onClick={props.onSelect}>{props.children ? props.children : props.label}</button></li>
    )
}