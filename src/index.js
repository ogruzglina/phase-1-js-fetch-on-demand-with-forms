const init = () => {
    const form = document.querySelector('section form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const inputValue = event.target.children[1].value;
// or - const inputValue = document.getElementById('searchByID').value;

        event.target.reset();

        fetch(`http://localhost:3000/movies/${inputValue}`)
        .then(resp => resp.json())
        .then(data => showFindResult(data));

        // when we try to find element by code not with URL
 //    fetch(`http://localhost:3000/movies`)
//     .then(resp => resp.json())
//     .then(data => findElement(inputValue, data);
    });
}

document.addEventListener('DOMContentLoaded', init);

function showFindResult(data) {
    const title = document.querySelector('#movieDetails h4');
    const summary = document.querySelector('#movieDetails p');

    title.textContent = data.title;
    summary.textContent = data.summary;
}

// function findElement(inputValue, arrOfData) {
            // arrOfData.forEach(element => {
            //     if(element.id === parseInt(inputValue)) {
            //         showFindResult(element);
//              }
//          })
// }