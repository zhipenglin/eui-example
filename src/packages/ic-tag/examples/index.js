import React, { PureComponent,Fragment} from 'react'
import IcTag from 'ic-tag'
import Markdown from 'ic-markdown'
import keywordTag from './keywordTag.md'
import closeTag from './closeTag.md'

export default class extends PureComponent {

    render() {
        return (
            <Fragment>
                <p>关键词标签</p>
                <p>
                    <IcTag className="ic-tag-wrapper" color="#11AABB">我是标签最多七个字</IcTag>
                    <IcTag className="ic-tag-wrapper" color="#3B99FF">我三字</IcTag>
                    <IcTag className="ic-tag-wrapper" color="#FC3333">我是四字</IcTag>
                    <IcTag className="ic-tag-wrapper" color="#ffa000">我是五个字</IcTag>
                </p>
                <p>筛选标签</p>
                <p>
                    <Markdown>{keywordTag}</Markdown>
                </p>
                <p>
                    <IcTag className="ic-tag-wrapper" color="#ffa000" closable={true}>我是标签最多七个字</IcTag>
                    <IcTag className="ic-tag-wrapper" closable={true}>我三字</IcTag>
                    <IcTag className="ic-tag-wrapper" closable={true}>我是四字</IcTag>
                    <IcTag className="ic-tag-wrapper" closable={true}>我是五个字</IcTag>
                </p>
                <p>
                    <Markdown>{closeTag}</Markdown>
                </p>
            </Fragment>
        );
    }
}
