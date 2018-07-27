const hidden = (arg) => {
    return arg + 1;
}

const addOneWithHiddenFunction = (input) => {
    return hidden(input);
}

const hiddenThreeArgs = (first, second, third) => {
    return first + second + third;
}

const addTheThreeArguments = (first, second, third) => (hiddenThreeArgs(first, second, third));

export { addOneWithHiddenFunction, addTheThreeArguments };