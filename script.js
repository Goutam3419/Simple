// Form को पकड़ो
const loginForm = document.getElementById("loginForm");

// Message वाले paragraph को पकड़ो
const message = document.getElementById("message");

// Form Submit होने पर यह Code चलेगा
loginForm.addEventListener("submit", function(event){

    // Page Reload होने से रोको
    event.preventDefault();

    // Email Input को पकड़ो
    const email = document.getElementById("email").value;

    // Password Input को पकड़ो
    const password = document.getElementById("password").value;

    // Validation
    if(email === ""){
        message.innerText = "Please Enter Email";
        return;
    }

    if(password === ""){
        message.innerText = "Please Enter Password";
        return;
    }

    // अगर दोनों सही हैं
    message.style.color = "green";
    message.innerText = "Login Successful (Demo)";
});
