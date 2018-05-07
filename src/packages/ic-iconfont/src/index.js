/**
 * @name: ic-iconfont ;
 * @author: sophiehui ;
 * @description: iconfont for ifchange ;
 * */

import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './style.scss'
import './fonts/monochrome/index.scss';
import './fonts/multicolor/iconfont';


export default class IcIcon extends PureComponent {
    static defaultProps = {
        isColor:false
    };

    static propTypes={
        isColor:PropTypes.bool,
        size:PropTypes.number,
        type:PropTypes.string.isRequired,
        style:PropTypes.object,
        className:PropTypes.string
    };

    render() {
        const {
            type,
            isColor,
            className,
            style,
            size,
            ...other
        } = this.props;
        const newClassName = classnames({
            'ic-icon': !isColor,
            'ic-icon-color': isColor
        }, `icon-${type}`, className), newStyle = Object.assign({},style,size?{fontSize: `${size}px`}:{});
        return isColor ? (
            <svg
                {...other}
                className={newClassName}
                style={newStyle}
            >
                <use xlinkHref={`#icon-color-${type}`}></use>
            </svg>
        ) : (
            <i
                {...other}
                style={newStyle}
                className={newClassName}
            ></i>
        )
    }
};


