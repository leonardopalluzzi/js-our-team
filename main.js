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
const formEl = document.querySelector('.add_form');


// 
/**
 * generate html code for cards
 * @param {array} arr 
 * @returns {array} returns an array of html code to display on page as cards
 */
function getCardMarkup(arr) {
    const printArray = [];
    let markup;
    for (let i = 0; i < arr.length; i++) {
        const { name, job, email } = arr[i];
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


/**
 * reset page content and print array function
 * @param {array} markupArr 
 * @param {html} container 
 * @returns {html} push the html code from the array to the html document
 */
function getMembers(markupArr, container) {
    container.innerHTML = '';
    for (let i = 0; i < markupArr.length; i++) {
        container.innerHTML += markupArr[i];
    }
    return container.innerHTML
}



/**
 * get a new object and pushes it into the initial array and re-execute the code to print updated array
 * @param {string} name 
 * @param {string} job 
 * @param {string} email 
 * @param {array} arr 
 * @param {html} container 
 */
function getNewObj (name, job, email, arr, container) {
    const newObj = {
        'name': name,
        'job': job,
        'email': email
    }
    arr.push(newObj);
    getCardMarkup(arr);
    getMembers(getCardMarkup(arr), container);
}


// funcitons recall
getCardMarkup(teamMembers);
getMembers(getCardMarkup(teamMembers), cardEl);

//add new obj to array when click on the form submit
formEl.addEventListener('submit', e => {
    e.preventDefault();
    const nameEl = document.getElementById('name').value;
    const jobEl = document.getElementById('job').value;
    const emailEl = document.getElementById('email').value;

    console.log(nameEl, jobEl, emailEl);

    getNewObj(nameEl, jobEl, emailEl, teamMembers, cardEl);
    console.log(teamMembers);
    

})