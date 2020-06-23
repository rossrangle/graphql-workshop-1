const appHolder = document.querySelector("#app");
const newShowForm = document.querySelector("#add-show");

/*********************************
    Process GraphQL response data
**********************************/
function getGraphQLResponseData(response) {
  return response.body.getReader().read().then(processGraphQLResponseBody);
}

function processGraphQLResponseBody({ done, value }) {
  const payload = String.fromCharCode(...value);
  return JSON.parse(payload).data;
}

/*********************************
    UI
**********************************/
function createElement(tag, content) {
  const el = document.createElement(tag);
  if (content) {
    el.innerHTML = content;
  }
  return el;
}

function displayMyShows(myShows) {
  myShows.map((show) => {
    addToApp(createMyShowElem(show));
  });
}

function createMyShowElem(show) {
  return createElement(
    "li",
    `${show.title} <br /> - Type: ${show.type} <br /> - Watched? ${show.watched}`
  );
}

function addToApp(node) {
  appHolder.appendChild(node);
}
