function loadHTML(event) {
    event.preventDefault()
    const thePage = event.target.getAttribute('data-page')
    fetch('templates/'+thePage+'.html')
        .then(response => response.text())
        .then(textContent => {document.getElementById('content').innerHTML = textContent
        console.log(textContent)})
}

const links = document.getElementsByTagName('a')

if (links != null){
    for (const element of links) {
        if (element.getAttribute('data-page')) {
            element.addEventListener('click', loadHTML)
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