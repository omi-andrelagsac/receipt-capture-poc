interface CustomWindow extends Window {
    returnToHomepage?: {
        postMessage: (message: string) => void;
    };
}