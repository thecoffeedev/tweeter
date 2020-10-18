
function randomString() {
  var length = 28;
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
}

function requestToken(url) {
  const oauth_timestamp = Math.floor(Date.now() / 1000);
  const oauth_nonce = randomString();
  const secret_key = "zjsitpdvTpgR2YSXpQ6Z9fxqmYj8WYuwESscUWtBp8573dIutT";
  const signing_key = `${secret_key}&`;

  let parameters = {
    oauth_consumer_key: "Vt0HPLguS4za6Ha2RcKbKeiqU",
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: oauth_timestamp,
    oauth_nonce: oauth_nonce,
    oauth_version: "1.0",
  };

  let ordered = {};
  Object.keys(parameters)
    .sort()
    .forEach(function (key) {
      ordered[key] = parameters[key];
    });
  let encodedParameters = "";
  for (let k in ordered) {
    const encodedValue = escape(ordered[k]);
    const encodedKey = encodeURIComponent(k);
    if (encodedParameters === "") {
      encodedParameters += encodeURIComponent(`${encodedKey}=${encodedValue}`);
    } else {
      encodedParameters += encodeURIComponent(`&${encodedKey}=${encodedValue}`);
    }
  }
  console.log(encodedParameters);

  const method = "POST";
  const base_url = url;
  const encodedUrl = encodeURIComponent(base_url);
  encodedParameters = encodeURIComponent(encodedParameters);
  const signature_base_string = `${method}&${encodedUrl}&${encodedParameters}`;
  console.log(signature_base_string);

  // const crypto = require("crypto");

  const oauth_signature = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA1, signing_key)
  .update(signature_base_string)
  .finalize()
  .toString(CryptoJS.enc.Hex)
  .toString(CryptoJS.enc.Base64)
  console.log(oauth_signature);

//   const oauth_signature = crypto.createHmac("sha1", signing_key).update(signature_base_string).digest().toString('base64');
// console.log(oauth_signature);

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Authorization: OAuth oauth_consumer_key="Vt0HPLguS4za6Ha2RcKbKeiqU",oauth_signature_method="HMAC-SHA1",oauth_timestamp=${oauth_timestamp},oauth_nonce=${oauth_nonce},oauth_version="1.0",oauth_callback="https%3A%2F%2Ftwitter-clone-tweet.netlify.app%2Fmain.html",oauth_signature=${oauth_signature}`
  );

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.twitter.com/oauth/request_token",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

let redirect = () => {window.location.href = 'https://twitter-clone-tweet.netlify.app/main.html'};

let redirectLocal = () => {window.location.href = 'http://127.0.0.1:5500/main.html'};