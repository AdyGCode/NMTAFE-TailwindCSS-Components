
function loadHTML(event) {
    const elem = event.target.getAttribute('data-page')
    fetch('templates/' + elem + '.html')
        .then(response => response.text())
        .then(text => document.getElementById('target').innerHTML = text);
}


const boxes = document.getElementsByTagName('a')

if (boxes != null) {
    for (const box of boxes) {
        if (box.getAttribute('data-page')) {
            box.addEventListener('click', loadHTML);
        }
    }
}


function listAllEventListeners() {
    const allElements = Array.prototype.slice.call(document.querySelectorAll('*'));
    allElements.push(document);
    allElements.push(window);

    const types = [];

    for (let ev in window) {
        if (/^on/.test(ev)) types[types.length] = ev;
    }

    let elements = [];
    for (let i = 0; i < allElements.length; i++) {
        const currentElement = allElements[i];
        for (let j = 0; j < types.length; j++) {
            if (typeof currentElement[types[j]] === 'function') {
                elements.push({
                    "node": currentElement,
                    "type": types[j],
                    "func": currentElement[types[j]].toString(),
                });
            }
        }
    }

    return elements.sort(function (a, b) {
        return a.type.localeCompare(b.type);
    });
}

