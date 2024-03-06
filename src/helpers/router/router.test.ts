import Routes from '@utils/Routes';
import { navigationRef, pop, push } from './index';
import { StackActions } from '@react-navigation/native';

jest.mock('./navigationRef');

jest.mock('@react-navigation/native', () => ({
  StackActions: {
    push: jest.fn(),
    pop: jest.fn(),
  },
}));

describe('push', () => {
  it('should call navigationRef.current?.dispatch with the provided route name and params', () => {
    const name = Routes.Home;

    push(name );

    expect(navigationRef.isReady).toHaveBeenCalled();
    expect(navigationRef.current?.dispatch).toHaveBeenCalledWith(StackActions.push(name));
  });
});

describe('pop', () => {
  it('should call navigationRef.current?.dispatch with the provided count', () => {
    const count = 1;

    pop(count);

    expect(navigationRef.isReady).toHaveBeenCalled();
    expect(navigationRef.current?.dispatch).toHaveBeenCalledWith(StackActions.pop(count));
  });
});

