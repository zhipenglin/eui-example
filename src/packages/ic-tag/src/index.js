/**
 * @name: ic-tag ;
 * @author: sophiehui ;
 * @description: tag component for ifchenge ;
 * */

import React,{PureComponent,Fragment} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import IcIcon from 'ic-iconfont'
import './style.scss'

function colorToRgba(tagColor) {
    if(!tagColor) return;
    let color = tagColor.toLowerCase();
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if(color && reg.test(color)){
        if (color.length === 4) {
            let newColor = "#";
            for (let i=1; i<4; i+=1) {
                newColor += color.slice(i, i+1).concat(color.slice(i, i+1));
            }
            color = newColor;
        }
        //处理六位的颜色值
        let changeColor = [];
        for (let i=1; i<7; i+=2) {
            changeColor.push(parseInt("0x"+color.slice(i, i+2)));
        }
        return "RGB(" + changeColor.join(",") + ",0.08)";
    }
    return color;
}


class icBasicTag extends PureComponent {
    state = {
        showTag:true,
    }
    static defaultProps={
        closable:false,
        onClose:()=>{},
        color:'#FFA000'
    };
    static propTypes={
        closable:PropTypes.bool,
        className:PropTypes.string,
        style:PropTypes.object,
        color:PropTypes.string
    };
    handleTagClose = () => {
        const {onClose} = this.props;
        this.setState({
            showTag: false
        });
        onClose();
    }
    render() {
        const {className,closable,color,children,style,...args} = this.props;
        let newColor = colorToRgba(color);
        return (
            <Fragment>
                {this.state.showTag?<div {...args} className={classnames("ic-tag",className,{"ic-close-tag":closable})} style={{background:newColor,color:color,...style}}>
                    <span className="ic-tag-inner">{children}</span>
                    {closable?<IcIcon className="ic-tag-icon" type="close_small" size={15}  onClick={this.handleTagClose}></IcIcon>:null}
                </div>:null}
            </Fragment>
        );
    }
}


export default icBasicTag

