// export default function TabButton(props) {
//     return (
//         <li><button onClick={props.onSelect}>{props.children ? props.children : props.label}</button></li>
//     )
// }

// export default function TabButton({ onSelect, children, label, isSelected }) {
//     return (
//         <li><button className={isSelected ? "active" : ""} onClick={onSelect}>{children ? children : label}</button></li>
//     )
// }

export default function TabButton({ children, label, isSelected, ...props }) {
    return (
        <li><button className={isSelected ? "active" : ""} {...props} >{children ? children : label}</button></li>
    )
}
