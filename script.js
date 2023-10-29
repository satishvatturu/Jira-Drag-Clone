const createIssue = document.getElementById("create-issue");
const issueInput = document.getElementById("issue-input");
const todoContainer = document.getElementById("todo");

createIssue.addEventListener("click", onCreateClick);

issueInput.addEventListener("blur", onBlurCreateIssueInput);
issueInput.addEventListener("keyup", onEnterInput);

function toggleCreateIssueOptions() {
    // toggle => if class is present then remove it (or) not present then add it.
    createIssue.classList.toggle("hide");
    issueInput.classList.toggle("hide");

    // To auto focus on element
    if(!issueInput.classList.contains("hide"))
    {
        // if user sees the textarea then we need to autofocus onto it.
        issueInput.focus();
    }
}

function onCreateClick() {
    toggleCreateIssueOptions();
}

function onBlurCreateIssueInput() {
    if(!issueInput.classList.contains("hide"))
    {
        toggleCreateIssueOptions();
    }
}

function onEnterInput(e) {
    if(e.keyCode===13)
    {
        // Clicked on enter key.
        const issueName = issueInput.value;
        if(!issueName)
        {
            return;
        }
        console.log(issueName);

        // Create an issue card with the issueName
        const issueCard = document.createElement("div");
        issueCard.className = "card";
        issueCard.innerHTML = `
        <span>${issueName}</span>
        <span class="material-icons" onclick="deleteCard(this)">delete</span>
        `;

        issueInput.value = "";
        todoContainer.appendChild(issueCard);
        toggleCreateIssueOptions();

    }
}

function deleteCard(deleteButton) {
    const card = deleteButton.parentNode;
    card.remove();
}