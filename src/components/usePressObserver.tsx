import { useEffect, useState } from "react";

type IsPressed = boolean;
type EventCode = string;

interface Settings {
    watchKey: string;
}

function fromEventCode(code: EventCode): string {
    const prefixRegex = /Key|Digit/gi;
    return code.replace(prefixRegex, "");
}

function equal(watchedKey: string, eventCode: EventCode): boolean {
    return fromEventCode(eventCode).toUpperCase() === watchedKey.toUpperCase();
}

export function usePressObserver({ watchKey }: Settings): IsPressed {
    const [pressed, setPressed] = useState<IsPressed>(false);

    useEffect(() => {
        function handlePressStart({ code }: KeyboardEvent): void {
            if (pressed || !equal(watchKey, code)) return;
            setPressed(true);
        }

        function handlePressFinish({ code }: KeyboardEvent): void {
            if (!pressed || !equal(watchKey, code)) return;
            setPressed(false);
        }

        document.addEventListener("keydown", handlePressStart);
        document.addEventListener("keyup", handlePressFinish);

        return () => {
            document.removeEventListener("keydown", handlePressStart);
            document.removeEventListener("keyup", handlePressFinish);
        };
    }, [watchKey, pressed, setPressed]);

    return pressed;
}
