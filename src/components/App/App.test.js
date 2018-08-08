import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import App from './App';

const mockStore = configureMockStore()({
  links: []
});

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <App />
      </Provider>
    )
  });

  it('is a React instance', () => {
    expect(wrapper.instance()).toBeTruthy();
  });

  it('renders Header component', () => {
    expect(wrapper.find('Header').length).toBe(1);
  });

  it('renders ShortenBar component', () => {
    expect(wrapper.find('ShortenBar').length).toBe(1);
  });

  it('renders LinkList component', () => {
    expect(wrapper.find('LinkList').length).toBe(1);
  });
})
