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