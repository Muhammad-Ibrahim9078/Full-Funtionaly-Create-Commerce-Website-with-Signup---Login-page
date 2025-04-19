// Login Function
function LoginButton() {
    let emailEl    = document.querySelector('.email').value.trim();
    let passwordEl = document.querySelector('.password').value.trim();

    let usersData = localStorage.getItem("users"); // "email|pass|name\email2|pass2|name2..."

    if (!usersData) {
        alert("No users found! Please sign up first.");
        return;
    }

    let users = usersData.split("\\");

    for (let i = 0; i < users.length; i++) {
        let [email, password, username] = users[i].split("|");

        if (emailEl === email && passwordEl === password) {
            alert("Login successful!");
            location.href = "E Commerce Website/index.html";
            return;
        } 
        if (emailEl === email && passwordEl !== password) {
            alert("Wrong password.");
            return;
        } 
        if (emailEl !== email && passwordEl === password) {
            alert("Wrong email.");
            return;
        }
    }

    alert("Login failed! Please check your email and password.");
}




// Signup Page Function
function signup() {
    let login  = document.querySelector('.login');
    let signup = document.querySelector('.signup');
    let image  = document.querySelector('.image');

    image.innerHTML = `<img src="Picutres/bg img.png" alt="ecommerwebsite" class="bgImage">`;

    login.innerHTML = `
      <h2>Signup</h2>
      <input type="email"    placeholder="Enter Your Email"    class="email" required>
      <br>
      <input type="password" placeholder="Enter Password"       class="password" required>
      <br>
      <input type="text"     placeholder="User Name"            class="userName" required>
      <br><br>
      <button class="loginButton" onclick="loginPage()">Signup</button>
      <br/>
    `;

    signup.innerHTML = `
      <div class="inlineSignup">
        <p>Have an account?</p>
        <a href="index.html" class="ahref">Login</a>
      </div>
    `;
}

// Signup Logic (for multiple users)
function loginPage() {
    let email    = document.querySelector('.email').value.trim();
    let password = document.querySelector('.password').value.trim();
    let username = document.querySelector('.userName').value.trim();

    if (email && password && username) {
        let userData = email + "|" + password + "|" + username;
        let usersData = localStorage.getItem("users");
        let updated = usersData ? (usersData + "\\" + userData) : userData; // Use newline character to separate users
        localStorage.setItem("users", updated);

        alert("Signup successful! Please login.");
        location.href = "index.html";  // back to login page
    } else {
        alert("Please fill in all fields.");
    }
}








