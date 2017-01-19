import * as SearchApiUtil from '../util/search_api_util';

export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const RECEIVE_SEARCH_RESULT = 'RECEIVE_SEARCH_RESULT';

export const receiveSearchResult = res => ({
  type: RECEIVE_SEARCH_RESULT,
  res
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});

export const fetchSearchResult = query => dispatch => (
  SearchApiUtil.fetchSearchResult(query)
    .then(
      res => dispatch(receiveSearchResult(res))
    )
);
