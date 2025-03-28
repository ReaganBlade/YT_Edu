
export const handleError = (error: any, message: string) => {
    console.error(message, error);
    return {error: message};
}

export const ParseStringify = ({data} : {data: any}) => {
    return JSON.parse(JSON.stringify(data));
}