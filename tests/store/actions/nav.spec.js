import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import changeNav from 'Store/actions/nav';

 const middleware = [thunk];

const mockStore = configureStore(middleware);

const initialState = {
  nav: {
    open: false
  },
};


 describe('message actions', () => {

   it('change nav state', (done) => {
      const expectedActions = [
      { type: 'CHANGE_NAV' },
      ];
    const store = mockStore(initialState);
    store.dispatch(changeNav());

      expect(store.getActions()).toEqual(expectedActions);
      done();
  });

});
