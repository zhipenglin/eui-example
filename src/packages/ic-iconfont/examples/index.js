import React, { PureComponent,Fragment} from 'react'
import IcIcon from 'ic-iconfont'
import Markdown from 'ic-markdown'
import singleIcon from './singleIcon.md'
import colorIcon from './colorIcon.md'

export default class extends PureComponent {
    render() {
        return (
            <Fragment>
                <p>单色图标</p>
                <p>
                    <IcIcon type="close_small" size={14}></IcIcon>
                    <IcIcon type="accumulate" size={14}></IcIcon>
                    <IcIcon type="group_selected" size={14}></IcIcon>
                    <IcIcon type="filter" size={14}></IcIcon>
                    <IcIcon type="employ" size={14}></IcIcon>
                    <IcIcon type="download" size={14}></IcIcon>
                </p>
                <p>
                    <Markdown>
                        {singleIcon}
                    </Markdown>
                </p>
                <p>彩色图标</p>
                <p>
                    <IcIcon type="nav_map" isColor={true} size={18}></IcIcon>
                    <IcIcon type="big_data" isColor={true} size={18}></IcIcon>
                    <IcIcon type="neitui" isColor={true} size={18}></IcIcon>
                    <IcIcon type="wanke" isColor={true} size={18}></IcIcon>
                    <IcIcon type="wanke-shangjin" isColor={true} size={18}></IcIcon>
                    <IcIcon type="nav_service" isColor={true} size={18}></IcIcon>
                </p>
                <p>
                    <Markdown>
                        {colorIcon}
                    </Markdown>
                </p>
            </Fragment>
        );
    }　
}
