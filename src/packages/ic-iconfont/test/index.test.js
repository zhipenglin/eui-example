import React from 'react';
import IcIcon from '../src/index';
import renderer from 'react-test-renderer';

jest.mock('../src/fonts/multicolor/iconfont',()=>'iconfont');

it('renders correctly', () => {
    const tree = renderer.create(<IcIcon className="ic-tag-icon" type="close_small" size={14}></IcIcon>).toJSON();
    expect(tree).toMatchSnapshot();
});
