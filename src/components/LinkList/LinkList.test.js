import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import LinkList from './LinkList';

const mockStore = configureMockStore()({
  links: [
    {title: 'Title 1', long_url: ''},
    {title: 'Title 2', long_url: ''}
  ]
});

describe('LinkList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={mockStore}>
        <LinkList/>
      </Provider>
    );
  });

  it('is a React instance', () => {
    expect(wrapper.instance()).toBeTruthy();
  });
})
