import React,{Fragment} from 'react';
import IcTag from '../src/index.js';
import renderer from 'react-test-renderer';

jest.mock('ic-iconfont',()=>'mock-icon');

it('关键词标签', () => {
    const tree = renderer.create(<Fragment>
        <IcTag className="ic-tag-wrapper" color="#11AABB">我是标签最多七个字</IcTag>
        <IcTag className="ic-tag-wrapper" color="#3B99FF">我三字</IcTag>
        <IcTag className="ic-tag-wrapper" color="#FC3333">我是四字</IcTag>
        <IcTag className="ic-tag-wrapper" color="#ffa000">我是五个字</IcTag>
    </Fragment>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('筛选标签', () => {
    const tree = renderer.create(<Fragment>
        <IcTag className="ic-tag-wrapper" color="#ffa000" closable={true}>我是标签最多七个字</IcTag>
        <IcTag className="ic-tag-wrapper" closable={true}>我三字</IcTag>
        <IcTag className="ic-tag-wrapper" closable={true}>我是四字</IcTag>
        <IcTag className="ic-tag-wrapper" closable={true}>我是五个字</IcTag>
    </Fragment>).toJSON();
    expect(tree).toMatchSnapshot();
});

