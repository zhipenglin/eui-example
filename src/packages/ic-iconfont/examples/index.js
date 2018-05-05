import React, { PureComponent,Fragment} from 'react'
import IcIcon from 'ic-iconfont'

export default class extends PureComponent {

    render() {
        return (
            <Fragment>
                <div>单色图标</div>
                <div>
                    <IcIcon className="ic-tag-icon" type="close_small" size={14}></IcIcon>
                </div>
                <div>彩色图标</div>
                <div>
                    <IcIcon className="ic-tag-icon" type="color-nav_map" isColor={true} size={15}></IcIcon>
                </div>
            </Fragment>
        );
    }　
}
