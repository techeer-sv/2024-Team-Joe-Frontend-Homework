export const isValidInput = (input) => {
    const regex = /^[\d+\-*/.\s]+$/;
    return regex.test(input);
};
