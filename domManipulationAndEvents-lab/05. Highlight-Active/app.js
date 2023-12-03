function focused() {
    const fields = Array.from(document.getElementsByTagName('input'));

    for (const field of fields) {
        field.addEventListener('focus', onfocus);
        field.addEventListener('blur', onBlur);
    }

    function onfocus(e) {
        const divParentElement = e.currentTarget.parentNode;
        divParentElement.classList.add('focused');
    }

    function onBlur (e) {
        const divParentElement = e.currentTarget.parentNode;
        divParentElement.classList.remove('focused');
    }
}