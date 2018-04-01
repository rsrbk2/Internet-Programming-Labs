function $(selector) {
    const elements = document.querySelectorAll(selector);
    const css = (prop, val) => {
        for (let element of elements) element.style[prop] = val;
        return {css};
    };
    return {css};
}