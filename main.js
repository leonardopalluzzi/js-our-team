const teamMembers = [
    {
        name: 'MARCO BIANCHI',
        job: 'Designer',
        email: 'marcobianchi@team.com',
        image: 'https://picsum.photos/id/237/300'
    }, {
        name: 'LAURA ROSSI',
        job: 'Front-end Developer',
        email: 'laurarossi@team.com',
        image: 'https://picsum.photos/id/237/300'
    }, {
        name: 'GIORGIO VERDI',
        job: 'Back-end Developer',
        email: 'giorgioverdi@team.com',
        image: 'https://picsum.photos/id/237/300'
    }, {
        name: 'MARTA IPSUM',
        job: 'SEO Specialist',
        email: 'martarossi@team.com',
        image: 'https://picsum.photos/id/237/300'
    }, {
        name: 'ROBERTO LOREM',
        job: 'SEO Specialist',
        email: 'robertolorem@team.com',
        image: 'https://picsum.photos/id/237/300'
    }, {
        name: 'DANIELA AMET',
        job: 'Analyst',
        email: 'danielaamet@team.com',
        image: 'https://picsum.photos/id/237/300'
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
        const { name, job, email, image } = arr[i];
        printArray[i] =
            `<div class="col-4 mb-4">
            <div class="card_custom d-flex flex-column flex-lg-row gap-2">
                <img class="card_img" src="${image}" alt="">
                <div class="text_card">
                    <h3 id="name" class="viga-regular">${name}</h3>
                    <span id="job">${job}</span>
                    <a id="email" class="d-none d-md-block" href="">${email}</a>
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
 * @param {string} image
 * @param {html} container 
 */
function getNewObj (name, job, email, image, arr, container) {
    const newObj = {
        'name': name.toUpperCase(),
        'job': job,
        'email': email,
        'image': image
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
    const imageEl = document.getElementById('image').value;

    console.log(nameEl, jobEl, emailEl, imageEl);

    getNewObj(nameEl, jobEl, emailEl, imageEl, teamMembers, cardEl);
    console.log(teamMembers);
    formEl.reset();
})
