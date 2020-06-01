export const isMain = () => {
    if (import.meta.main) {
        console.log("is main.");
    } else {
        console.log("is not main.")
    }
}

isMain();