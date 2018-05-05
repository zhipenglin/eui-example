import React,{Fragment} from 'react';
import IcTag from '../src/index.js';
import renderer from 'react-test-renderer';

jest.mock('ic-iconfont',()=>'mock-icon');

it('more than seven', () => {
    const tree = renderer.create(<Fragment>
        <IcTag className="ic-tag-wrapper" closable={true} >我是大于七个字的可关闭标签</IcTag>
        <IcTag className="ic-tag-wrapper" color="#ffa000" >我是大于七个字的关键词标签</IcTag>
    </Fragment>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('less than four', () => {
    const tree = renderer.create(<Fragment>
        <IcTag className="ic-tag-wrapper" closable={true} >四以下</IcTag>
        <IcTag className="ic-tag-wrapper" color="#ffa000" >四以下</IcTag>
    </Fragment>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('four', () => {
    const tree = renderer.create(<Fragment>
        <IcTag className="ic-tag-wrapper" closable={true} >四字标签</IcTag>
        <IcTag className="ic-tag-wrapper" color="#ffa000" >四字标签</IcTag>
    </Fragment>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('five', () => {
    const tree = renderer.create(<Fragment>
        <IcTag className="ic-tag-wrapper" closable={true} >五个字标签</IcTag>
        <IcTag className="ic-tag-wrapper" color="#ffa000" >五个字标签</IcTag>
    </Fragment>).toJSON();
    expect(tree).toMatchSnapshot();
});
