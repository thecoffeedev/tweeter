let mainCont = document.createElement("div");
mainCont.classList.add("container-flex-md");

let row = document.createElement("div");
row.classList.add("row");
mainCont.appendChild(row);

let col1 = document.createElement("div");
col1.classList.add("col-sm-2", "col-3", "pl-md-5");
col1.style.display = "inline-block"

let row1 = document.createElement("div");
row1.classList.add("row")

let cont = document.createElement("div");
cont.classList.add("col" ,"mt-3");

let icon = document.createElement("img");
icon.classList.add("mt-3")
icon.style.display = "block"
icon.src = "./images/tw.svg";
icon.style.width = "40px";
cont.append(icon);

let homeLink = document.createElement("a");
homeLink.href = ""

let iconHome = document.createElement("img");
iconHome.classList.add("mt-4")
iconHome.src = "./images/home.svg";
iconHome.style.display = "block"
iconHome.style.width = "30px";
homeLink.append(iconHome);
cont.append(homeLink)

let exploreLink = document.createElement("a");
exploreLink.href = ""

let iconHash = document.createElement("img");
iconHash.classList.add("mt-4")
iconHash.src = "./images/hashtag-symbol.svg";
iconHash.style.display = "block"
iconHash.style.width = "30px";
exploreLink.append(iconHash);
cont.append(exploreLink)

let notiLink = document.createElement("a");
notiLink.href = ""

let iconNoti = document.createElement("img");
iconNoti.classList.add("mt-4")
iconNoti.src = "./images/notification-bell.svg";
iconNoti.style.display = "block"
iconNoti.style.width = "30px";
notiLink.append(iconNoti);
cont.append(notiLink)

let messageLink = document.createElement("a");
messageLink.href = ""

let iconmessage = document.createElement("img");
iconmessage.classList.add("mt-4")
iconmessage.src = "./images/messages.svg";
iconmessage.style.display = "block"
iconmessage.style.width = "30px";
messageLink.append(iconmessage);
cont.append(messageLink)

let profileLink = document.createElement("a");
profileLink.href = ""

let iconProfile = document.createElement("img");
iconProfile.classList.add("mt-4")
iconProfile.src = "./images/user-profile.svg";
iconProfile.style.display = "block"
iconProfile.style.width = "30px";
profileLink.append(iconProfile);
cont.append(profileLink)

let moreLink = document.createElement("a");
moreLink.href = ""

let iconMore = document.createElement("img");
iconMore.classList.add("mt-4")
iconMore.src = "./images/more.svg";
iconMore.style.display = "block"
iconMore.style.width = "30px";
moreLink.append(iconMore);
cont.append(moreLink)

let button = document.createElement("button");
button.classList.add("btn", "btn-primary", "mt-5", "mb-5");
button.style.borderRadius = "50px";

let tweetIcon = document.createElement("img");
tweetIcon.src = "./images/pen-feather.svg";
tweetIcon.style.width = "30px";
button.append(tweetIcon)

cont.append(button);

let proLink = document.createElement("a");
proLink.href = ""

let iconPro = document.createElement("img");
iconPro.classList.add("mt-4")
iconPro.src = "./images/user.svg";
iconPro.style.display = "block"
iconPro.style.width = "50px";
proLink.append(iconPro);
cont.append(proLink)

let col2 = document.createElement("div");
col2.classList.add("col-lg-6", "col-sm-10", "col-9", "mt-0", "border", "border-secondary", "p-0");
col2.style.display = "inline-block";
col2.style.position = "absolute";
col2.style.top = "30px"

let row2 = document.createElement("div");
row2.classList.add("row")

let cont2 = document.createElement("div");
cont2.classList.add("col");

let topHome = document.createElement("div");
topHome.classList.add("p-2", "border", "border-secondary")
topHome.innerHTML = "<strong>Home</strong>"
topHome.style.fontSize = "1.5rem"
// cont2.append(topHome)

let iconStar = document.createElement("img");
iconStar.src = "./images/3-stars-outlines.svg";
iconStar.style.float = "right"
iconStar.style.width = "30px";
topHome.append(iconStar);
cont2.append(topHome)

let tweet = document.createElement("div");
tweet.classList.add("p-2", "border", "border-secondary");
tweet.style.borderBottomWidth = "thick"

let iconPro2 = document.createElement("img");
iconPro2.classList.add("mr-2")
iconPro2.src = "./images/user.svg";
iconPro2.style.width = "40px";

let iconPro3 = document.createElement("img");
iconPro3.classList.add("mr-2")
iconPro3.src = "./images/appedu.jpg";
iconPro3.style.borderRadius = "50%"
iconPro3.style.width = "40px";

let iconPro4 = document.createElement("img");
iconPro4.classList.add("mr-2")
iconPro4.src = "./images/forbes.png";
iconPro4.style.borderRadius = "50%"
iconPro4.style.width = "40px";

tweet.append(iconPro2);
tweet.innerHTML += "What's Happening?"
tweet.style.fontSize = "1.4rem"
tweet.style.color = "grey"

let twbutton = document.createElement("button");
twbutton.classList.add("btn", "btn-primary");
twbutton.style.borderRadius = "50px";
twbutton.style.display = "inline-block"
twbutton.style.float = "right"
twbutton.innerHTML = "Tweet"

tweet.append(twbutton)

let posts = document.createElement("div");
posts.classList.add("border", "border-secondary", "mt-2");

let post1 = document.createElement("div");
post1.classList.add("p-4", "border", "border-secondary");
post1.append(iconPro3);

let p1text = document.createElement("p");
p1text.style.display = "inline-block"
p1text.innerHTML = "&nbsp;<strong>Apple Education</strong>&nbsp;&#10003;&nbsp; @AppleEdu . 2min<br>"


let p1t = document.createElement("p");
p1t.innerHTML = "Clips is a free app that lets teachers and students create and share engaging videos. In this video you’ll learn how to use Clips to create instructional videos — and how students can make videos to share what they’ve learned. #RemoteLearning"

let p1buttons = document.createElement("div");
p1buttons.classList.add("text-justify")

let comment = document.createElement("img");
comment.classList.add("ml-5", "mr-5")
comment.src = "./images/comment.svg"
comment.style.width = "25px"

let rt = document.createElement("img");
rt.classList.add("ml-5", "mr-5")
rt.src = "./images/retweet.svg"
rt.style.width = "30px"

let heart = document.createElement("img");
heart.classList.add("ml-5", "mr-5")
heart.src = "./images/heart.svg"
heart.style.width = "25px"

let share = document.createElement("img");
share.classList.add("ml-5", "mr-5")
share.src = "./images/share.svg"
share.style.width = "23px"

p1buttons.append(comment, rt, heart, share)
post1.append(p1text, p1t, p1buttons)

let post2 = document.createElement("div")
post2.classList.add("p-4", "border", "border-secondary")
post2.append(iconPro4)

let p2text = document.createElement("p");
p2text.style.display = "inline-block"
p2text.innerHTML = "&nbsp;<strong>Forbes</strong>&nbsp;&#10003;&nbsp; @forbes . 8min<br>"

let p2 = document.createElement("div");
p2.classList.add("text-right")


let p2t = document.createElement("p");
p2t.innerHTML = "Here's why your hand sanitizer may be ineffective or tainted by cancer-causing chemicals: <a href='http://on.forbes.com/6016G4Jme'>http://on.forbes.com/6016G4Jme</a>"

let p2image = document.createElement("img");
p2image.src = "./images/forbes-image.jpg"
p2image.classList.add("img-fluid", "mb-4")
p2image.style.width = "90%"

let p2buttons = document.createElement("div");
p2buttons.classList.add("text-justify")

let comment2 = document.createElement("img");
comment2.classList.add("ml-5", "mr-5")
comment2.src = "./images/comment.svg"
comment2.style.width = "25px"

let rt2 = document.createElement("img");
rt2.classList.add("ml-5", "mr-5")
rt2.src = "./images/retweet.svg"
rt2.style.width = "30px"

let heart2 = document.createElement("img");
heart2.classList.add("ml-5", "mr-5")
heart2.src = "./images/heart.svg"
heart2.style.width = "25px"

let share2 = document.createElement("img");
share2.classList.add("ml-5", "mr-5")
share2.src = "./images/share.svg"
share2.style.width = "23px"

p2buttons.append(comment2, rt2, heart2, share2)

p2.append(p2image)
post2.append(p2text, p2t, p2, p2buttons)

posts.append(post1, post2)
cont2.append(tweet, posts)
row1.append(cont)
col1.append(row1)
row2.append(cont2)
col2.append(row2)
mainCont.append(col1, col2)



document.body.appendChild(mainCont);
document.body.style.backgroundColor = "#15202B";
document.body.style.color = "#fff";