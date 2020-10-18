let mainCont = document.createElement("div");
mainCont.classList.add("container-md");

let row = document.createElement("div");
row.classList.add("row");
mainCont.appendChild(row);

let col = document.createElement("div");
col.classList.add("col-md-6", "offset-md-3");

let cont = document.createElement("div");
cont.classList.add("mt-5", "text-center");
cont.style.height = "400px";

let icon = document.createElement("img");
icon.src = "./images/tw.svg";
icon.style.width = "80px";
cont.append(icon);

let title = document.createElement("h3");
title.innerHTML = "Log in to Twitter Clone";
title.style.fontWeight = "bold";
title.style.color = "#fff";
title.classList.add("mt-4", "mb-4");
cont.append(title);

let note = document.createElement("div");
note.setAttribute("role", "alert");
note.classList.add("alert", "alert-warning");
note.innerHTML = "<strong> Note : </strong> Your authentication with Twitter is safe and we don't take your credentials.<br>Your data is fetched through twitter API.";
cont.appendChild(note);

let note2 = document.createElement("div");
note2.setAttribute("role", "alert");
note2.classList.add("alert", "alert-danger");
note2.innerHTML = "<strong> Note : </strong> Due to some API issues you will not be logged in.";
cont.appendChild(note2);

let button = document.createElement("button");
button.type = "button";
button.classList.add("btn", "btn-primary", "btn-lg", "btn-block", "mt-4", "mb-3");
button.innerHTML = "Login with Twitter";
button.style.borderRadius = "50px";
button.onclick = function() {redirect()}//{requestToken("https://twitter-clone-tweet.netlify.app/main.html")}
cont.append(button);

let createAccount = document.createElement("p");
createAccount.style.display = "inline-block";
createAccount.style.color = "#0069D9";
createAccount.innerHTML = "Don't have twitter account? &nbsp;";
cont.append(createAccount);

let link = document.createElement("a");
link.style.display = "inline-block";
link.href = "https://twitter.com/i/flow/signup";
link.innerHTML = "Create one here...";
cont.append(link);

col.append(cont);

row.append(col);

document.body.appendChild(mainCont);
document.body.style.backgroundColor = "#15202B";