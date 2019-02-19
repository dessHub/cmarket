import toplist from '../../../src/store/modules/toplist';
import mockToplist from '../mock/toplist';

const { mutations } = toplist;

describe('Toplist mutations', () => {
  const { fetchingToplist, addToplistToStore, fetchingToplistFailed } = mutations;
  let state

  beforeEach(() => {
    state = {
      isFetching: false,
      success: false,
      errorMessage: null,
      toplist: null,
    };
  });

  it('fetchingToplist', () => {
    fetchingToplist(state);
    expect(state.isFetching).toBe(true);
  })
  it('addToplistToStore', () => {
    const payload = mockToplist;

    addToplistToStore(state, payload);
    expect(state.isFetching).toBe(false);
  })
  it('fetchingToplistFailed', () => {
    const payload = 'Bad request.';
    fetchingToplistFailed(state, payload);
    expect(state.errorMessage).notToBeNull;
  })
})
