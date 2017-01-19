export const fetchSearchResult = query => (
  $.ajax({
    method: "GET",
    url: `/api/search`,
    data: { query }
  })
);
