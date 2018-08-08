import React from 'react';
import { shallow } from 'enzyme';
import Bitlink from './Bitlink';

const shalowWithProp = (prop) => {
  return shallow(<Bitlink link={prop} />)
}

describe('Bitlink', () => {
  let link = {
    title: '',
    long_url: '',
    short_url: '',
    global_count: 0
  }

  it('is a React instance', () => {
    let wrapper = shalowWithProp(link);
    expect(wrapper.instance()).toBeTruthy();
  });

  it('renders long link as a title when there is no title', () => {
    link.title = null;
    let wrapper = shalowWithProp(link);
    expect(wrapper.find('.Bitlink__link').length).toBe(1);
  });

  it('renders title and long link when title is present', () => {
    link.title = 'Title';
    let wrapper = shalowWithProp(link);
    expect(wrapper.find('.Bitlink__link').length).toBe(2);
  });

  it('dispay click counter with commas', () => {
    link.global_count = 10000;
    let wrapper = shalowWithProp(link);
    expect(wrapper.find('.Bitlink__counter').text()).toBe('10,000');
  });

})
