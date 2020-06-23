const graphQLEndpoint = "http://localhost:4000";

/*********************************
    Function to call GraphQL server
**********************************/
function queryGraphQLEndpoint(query) {
  const params = { query };

  return fetch(graphQLEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  }).then((response) => {
    if (response.status === 200) {
      return getGraphQLResponseData(response);
    } else {
      return null;
    }
  });
}

/*********************************
    Set up our query
**********************************/
const getMyShowsQuery = `
{
    myShows {
      title
      watched
      type
    }
}
`;

/*********************************
    Perform query to load initial data
**********************************/
queryGraphQLEndpoint(getMyShowsQuery).then((data) =>
  displayMyShows(data.myShows)
);
