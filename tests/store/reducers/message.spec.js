import message from '../../../src/store/reducers/message';
import mockData from '../../__mocks__/mockData';

describe('message reducer test', () => {
  it('should set initial state', () => {
    const state = message(undefined, { type: '@@INIT' });
    expect(state).toEqual(mockData.message);
  });

  it('should add message to state', () => {
    const action = {
      type: 'MESSAGE_SET',
      message: mockData.message.message,
    };
    const state = message(undefined, action);
    expect(state).toEqual({
      ...mockData.message,
      message: mockData.message.message,
    });
  });

  it('should add error to state', () => {
    const action = {
      type: 'ERROR_SET',
      error: mockData.message.message,
    };
    const state = message(undefined, action);
    expect(state).toEqual({
      ...mockData.message,
      error: mockData.message.message,
    });
  });

  it('should set all to null', () => {
    const action = {
      type: 'MESSAGE_CLEAR_ALL',
    };
    const state = message(undefined, action);
    expect(state).toEqual({
      ...mockData.message,
      message: null,
      error: null
    });
  });

});
