import coins from '../../../src/store/modules/coins';
import mockCoins from '../mock/coins';

const { mutations, getters } = coins;

describe("Coins mutations", () => {
  let state
  const { addCoinsToStore, fetchingCoins, fetchingCoinsFail } = mutations;

  beforeEach(() => {
    state = {
      coins: null,
      isFetching: false,
      success: false,
      errorMessage: null
    }
  });

  it('addCoinsToStore', () => {
    const payload = mockCoins;
    addCoinsToStore(state, payload);
    expect(state.coins).toBeNotNull;
  });
  it('fetchingCoins', () => {
    fetchingCoins(state);
    expect(state.isFetching).toBe(true);
  });
  it('fetchingCoinsFail', () => {
    const payload = "Bad request";
    fetchingCoinsFail(state, payload);
    expect(state.errorMessage).notToBeNull;
  });
});

// Getters edge cases
describe('Coins getters', () => {
  const { convertCoinsObjToArray } = getters;

  it('convertCoinsObjToArray', () => {
    const state = {
      coins: mockCoins,
      isFetching: false,
      success: false,
      errorMessage: null
    }
    const coinsArry = convertCoinsObjToArray(state);
    expect(coinsArry.length).toBeGreaterThan(0);
  })
})
