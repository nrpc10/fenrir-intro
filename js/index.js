// Insert Copyright Text in Footer via JavaScript

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = "Nelson Palacios &copy; " + thisYear;
footer.appendChild(copyright);

// Create array of Skills

let skills = ["HTML", "CSS", "JavaScript", "Web development"];

// Select skills section

let skillsSection = document.getElementById('skills');

// select UL

let skillsList = skillsSection.querySelector('ul');
    for (let i = 0; i < skills.length; i++) {

    // Create li
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
};

// Select message form

const messageForm = document.querySelector('form[name="leave_message"]');
messages.style.display = "none";

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

// let messages = document.getElementById('messages');

const usersName = e.target.usersName.value;
const usersEmail = e.target.usersEmail.value;
const usersMessage = e.target.usersMessage.value;
console.log("Name:" , usersName);
console.log("Email:" , usersEmail);
console.log("Message:" , usersMessage);

const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement('li');
newMessage.innerHTML = `
<a href="mailto:${usersEmail}">${usersName}</a>
<span>wrote:${usersMessage}</span>
`;


// Create edit button

// const editButton = document.createElement('button');
// editButton.textContent = "edit";
// editButton.type = "button";

const removeButton = document.createElement('button');
removeButton.textContent = "remove";
removeButton.type = "button";

    
    messages.style.display = "";
  

    // editButton.addEventListener('click', (e) => {
    //     const newUsersName = messageForm.usersName;
    //     const li = editButton.parentNode;
    //     const entry = editButton.parentNode;
    //     if(editButton.textContent === 'edit') {
    //         const span = entry.querySelector('a');
    //         const input = document.createElement('input');
    //         input.type = 'text';
    //         newUsersName.value = span.textContent;
    //         li.insertBefore (input, span); 
    //         li.removeChild(span);
    //         editButton.textContent = 'save';
    //             } else if (editButton.textContent === 'save ') {
    //                 const input = li.firstElementChild;
    //                 const span = document.createElement('span') ;
    //                 span.textContent = input.value;
    //                 li.insertBefore (span, input);
    //                 li.removeChild(input);
    //                 editButton.textContent = 'edit';
    //         }
    //     });

  
    removeButton.addEventListener('click', (e) => {
        const entry = removeButton.parentNode;
        console.log(messageList.firstChild);
        entry.remove();
            if (messageList.children.length === 0 ) {
                messages.style.display = "none";
            }
    });

    // newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();

});

function fetchData(url) {
    return fetch(url)
        .then(res => res.json())
}

fetchData('https://api.github.com/users/nrpc10/repos')
    .then(data => githubRequest(data))
    .catch(error => console.log('Looks there is a problem!', error))
    
function githubRequest(data) {
    let repositories = data;
    console.log(repositories);
    let projectSection = document.getElementById('projects');
    let projectList = projectSection.querySelector('ul');
        for (let i=0; i<repositories.length; i++) {
            let project = document.createElement('li');
            project.innerHTML = repositories[i].name;
            projectList.appendChild(project);
            }
    }