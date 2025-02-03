export const handleReturnToHomepage = (): void => {
    try {
        const customWindow = window as CustomWindow;
        if (typeof customWindow.returnToHomepage === "undefined") {
            throw new Error("Failed to trigger post message. Window is not defined.");
        } else {
            customWindow.returnToHomepage.postMessage("true");
        }
    } catch (error) {
        console.error(error);
    }
}