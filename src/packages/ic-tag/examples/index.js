import React, { PureComponent,Fragment} from 'react'
import IcTag from 'ic-tag'

export default class extends PureComponent {

    render() {
        return (
            <Fragment>
                <div>关键词标签</div>
                <div>
                    <IcTag className="ic-tag-wrapper" color="#11AABB">我是标签最多七个字</IcTag>
                    <IcTag className="ic-tag-wrapper" color="#3B99FF">我三字</IcTag>
                    <IcTag className="ic-tag-wrapper" color="#FC3333">我是四字</IcTag>
                    <IcTag className="ic-tag-wrapper" color="#ffa000">我是五个字</IcTag>
                </div>
                <div>筛选标签</div>
                <div>
                    <IcTag className="ic-tag-wrapper" color="#ffa000" closable={true}>我是标签最多七个字</IcTag>
                    <IcTag className="ic-tag-wrapper" closable={true}>我三字</IcTag>
                    <IcTag className="ic-tag-wrapper" closable={true}>我是四字</IcTag>
                    <IcTag className="ic-tag-wrapper" closable={true}>我是五个字</IcTag>
                </div>
            </Fragment>
        );
    }
}
