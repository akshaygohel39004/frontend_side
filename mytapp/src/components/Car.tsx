import { use, useState } from "react";

type props = {
    make: string;
    model: string;
    year: number;
    updatetext: (text: string) => void;
    children?: React.ReactNode;
};

export const Car = (props: props) => {

    const [text, setText] = useState<string>("");

    function updateText(s:string):void{
        props.updatetext(s);
    }
    return <div>
        <h1>car componenet</h1>
        <p>Make: {props.make}</p>
        <p>Model: {props.model}</p>
        <p>Year: {props.year}</p>
        <div>{props.children}</div>

        <input type="text" onChange={(e) => updateText(e.target.value)} />

        </div>;
};