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
    },
];
const cardEl = document.querySelector('.card_container');


// generate html code for cards
function getCardMarkup (arr){
    let markup;
    for(let i = 0; i < arr.length; i++){
        const {name, job, email} = arr[i];
        markup += 
        `<div class="card_custom d-flex flex-row gap-2">
            <img class="card_img" src="https://picsum.photos/id/237/300" alt="">
            <div class="text_card">
                <h3 id="name">${name}</h3>
                <span id="job">${job}</span>
                <a id="email" href="">${email}</a>
            </div>
        </div>`;
    }
    return markup;
}

console.log(getCardMarkup(teamMembers));

getCardMarkup(teamMembers);

//print array function
function getMembers() {


    


}


//add object to array function


//add event listener to add names to the array