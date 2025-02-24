const teamMembers = [
    {
        name: 'Gianni Coso',
        job: 'Costruttore di peli per spazzolini',
        email: 'giannonematto@gmail.com'
    }, {
        name: 'Mario Coso',
        job: 'Costruttore di peli per parrucche',
        email: 'giannonematto@gmail.com'
    }, {
        name: 'Paolo Coso',
        job: 'Costruttore di peli per coperte',
        email: 'giannonematto@gmail.com'
    }, {
        name: 'Paolo Coso',
        job: 'Costruttore di peli per coperte',
        email: 'giannonematto@gmail.com'
    }, {
        name: 'Paolo Coso',
        job: 'Costruttore di peli per coperte',
        email: 'giannonematto@gmail.com'
    }, {
        name: 'Paolo Coso',
        job: 'Costruttore di peli per coperte',
        email: 'giannonematto@gmail.com'
    },
];
const cardEl = document.querySelector('.row');


// generate html code for cards
function getCardMarkup (arr){
    const printArray = [];
    let markup;
    for(let i = 0; i < arr.length; i++){
        const {name, job, email} = arr[i];
        printArray[i] =
        `<div class="col-4 mb-4">
            <div class="card_custom d-flex flex-column flex-lg-row gap-2">
                <img class="card_img" src="https://picsum.photos/id/237/300" alt="">
                <div class="text_card">
                    <h3 id="name">${name}</h3>
                    <span id="job" class="fs-6">${job}</span>
                    <a id="email" class="fs-6" href="">${email}</a>
                </div>
            </div>
        </div>`
    }
    
    return printArray;
}

console.log(getCardMarkup(teamMembers, cardEl));

getCardMarkup(teamMembers,cardEl);

//print array function
function getMembers(markupArr, container) {
    for(let i = 0; i < markupArr.length; i++){
        container.innerHTML += markupArr[i];
    }
    return container.innerHTML
}

getMembers(getCardMarkup(teamMembers), cardEl);

//add object to array function


//add event listener to add names to the array