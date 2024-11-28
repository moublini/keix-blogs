import { useState } from "react";

export interface ChipProps {
    label: string,
}

export function Chip({ label }: ChipProps) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div
            onClick={() => setIsActive(!isActive)}
            className={`px-2 inline rounded-full ${isActive && 'bg-primary '} border border-primary`}
        >
            <span className={`text-sm ${isActive ? 'text-white' : 'text-primary'}`}>{ label }</span>
        </div>
    );
}