const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = "Nelson Palacios &copy; " + thisYear;
footer.appendChild(copyright);

let skills = ["HTML", "CSS", "JavaScript"];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsSection.appendChild(skill);
};

const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener('submit', function (e){
    const usersName = e.target.usersName.value;
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;
    console.log("Name:" , usersName);
    console.log("Email:" , usersEmail);
    console.log("Message:" , usersMessage);
    e.preventDefault();

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `
    <a href="mailto: ${usersEmail}">${usersName}</a>
    <span>wrote: ${usersMessage}</span>
    `;
    const editButton = document.createElement('button');
    editButton.innerText = "edit";
    editButton.type = "button";
    editButton.addEventListener('click', (e) => {
        const li = editButton.parentNode;
        // const entry = editButton.parentNode;
        if(editButton.textContent === 'edit') {
            const span = getElementById('li)');
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore (input, span); 
            li.removeChild(span);
            editButton.textContent = 'save';
         } else if(editButton.textContent === 'save ') {
            const input = li.firstlementChild;
            const span = document.createElement('span') ;
            span.textContent = input.value;
            li. insertBefore (span, input);
            li.removeChild(input);
            editButton.textContent = 'edit';
         }

    });

    const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener('click', (e) => {
        const entry = removeButton.parentNode;
        entry.remove();


});
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();

})

