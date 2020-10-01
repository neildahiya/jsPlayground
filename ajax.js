function changeText() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("tochangetext").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "lorem.txt", true);
  xhttp.send();
}
// Steps
/*
    1. An event occurs in a web page (the page is loaded, a button is clicked)
    2. An XMLHttpRequest object is created by JavaScript
    3. The XMLHttpRequest object sends a request to a web server
    4. The server processes the request
    5. The server sends a response back to the web page
    6. The response is read by JavaScript
    7. Proper action (like page update) is performed by JavaScript
*/
/*

onreadystatechange	Defines a function to be called when the readyState property changes
readyState	Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
responseText  ->   Returns the response data as a string
responseXML	-> Returns the response data as XML data
status	Returns the status-number of a request
200: "OK"
403: "Forbidden"
404: "Not Found"
statusText	Returns the status-text (e.g. "OK" or "Not Found")


*/
// Exapmple Post req -> Third param is async
// xhttp.open("POST", "ajax_test.asp", true);
// xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xhttp.send("fname=Henry&lname=Ford");

// Using jQuery
// $("input").keyup(function () {
//   var txt = $("input").val();
//   $.post("demo_ajax_gethint.asp", { suggest: txt }, function (result) {
//     $("span").html(result);
//   });
// });

// setTimeout(() => {
//   $.get("https://jsonplaceholder.typicode.com/todos/1", (res) => {
//     document.getElementById("tochangetext").innerHTML = JSON.stringify(res);
//   });

// }, 2000);

// fetch API
// let promise = fetch(url, {
//   method: "GET", // POST, PUT, DELETE, etc.
//   headers: {
//     // the content type header value is usually auto-set
//     // depending on the request body
//     "Content-Type": "text/plain;charset=UTF-8"
//   },
//   body: undefined // string, FormData, Blob, BufferSource, or URLSearchParams
//   referrer: "about:client", // or "" to send no Referer header,
//   // or an url from the current origin
//   referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
//   mode: "cors", // same-origin, no-cors
//   credentials: "same-origin", // omit, include
//   cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
//   redirect: "follow", // manual, error
//   integrity: "", // a hash, like "sha256-abcdef1234567890"
//   keepalive: false, // true
//   signal: undefined, // AbortController to abort request
//   window: window // null
// });
