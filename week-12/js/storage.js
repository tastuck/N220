//reference variables
const loginFormRef = document.querySelector("#login");
const usernameRef = document.querySelector("#username");
const passwordRef = document.querySelector("#password");

//the e is an event that happens within the function
function loginUser(e) {
    e.preventDefault();
    const usernameValue = usernameRef.value;
    const passwordValue = passwordRef.value;

    const users = JSON.parse(localStorage.getItem("users") || []);

    let userFound = false;
    let correctPassword = false;

    for (let i = 0; i < users.length; i++) {
        const currentUser = users[i];
        if (currentUser.username === usernameValue) {
            userFound = true;

            if (currentUser.password === passwordValue) {
                correctPassword = true;
            }
        }

        {
            if (userFound === false) {
                //make user
                users.push({username: usernameValue, password: passwordValue});
                localStorage.setItem("users", JSON.stringify(users));
            }

            //wrong password
            else if (correctPassword === false) {
                alert("Wrong Password");
            }

            //log in successful
        }
    }

}

//when form is submitted the user should be logged in
loginFormRef.onsubmit = loginUser;

