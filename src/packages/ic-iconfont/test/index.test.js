import React from 'react';
import IcIcon from '../src/index';
import renderer from 'react-test-renderer';

jest.mock('../src/fonts/multicolor/iconfont',()=>'iconfont');

it('单色图标', () => {
    const tree = renderer.create(<IcIcon type="close_small" size={14}></IcIcon>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('彩色图标', () => {
    const tree = renderer.create(<IcIcon isColor={true} type="color-nav_map" size={14}></IcIcon>).toJSON();
    expect(tree).toMatchSnapshot();
});
