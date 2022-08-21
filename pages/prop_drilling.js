import { useState } from "react";

const Message = ({ active }) => {
    return <h1>The Switch is { active ? "active" : "disabled" }</h1>
};

const Button = ( { onToggle } ) => {
    return <button onClick={onToggle}>Change</button>;
}

const Switch = ({ active, onToggle }) => {
    return (
        <div>
            <Message active={active} />
            <Button onToggle={onToggle} />
        </div>
    );
}

export default function Propdrill() {
    const [active, setActive] = useState(false)
    const toggle = () => setActive((active) => !active);

    return <Switch active={active} onToggle={toggle}/>
}