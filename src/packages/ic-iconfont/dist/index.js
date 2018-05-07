'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style.css');

require('./fonts/monochrome/index.css');

require('./fonts/multicolor/iconfont');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name: ic-iconfont ;
 * @author: sophiehui ;
 * @description: iconfont for ifchange ;
 * */

var IcIcon = function (_PureComponent) {
    (0, _inherits3.default)(IcIcon, _PureComponent);

    function IcIcon() {
        (0, _classCallCheck3.default)(this, IcIcon);
        return (0, _possibleConstructorReturn3.default)(this, (IcIcon.__proto__ || (0, _getPrototypeOf2.default)(IcIcon)).apply(this, arguments));
    }

    (0, _createClass3.default)(IcIcon, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                type = _props.type,
                isColor = _props.isColor,
                className = _props.className,
                style = _props.style,
                size = _props.size,
                other = (0, _objectWithoutProperties3.default)(_props, ['type', 'isColor', 'className', 'style', 'size']);

            var newClassName = (0, _classnames2.default)({
                'ic-icon': !isColor,
                'ic-icon-color': isColor
            }, 'icon-' + type, className),
                newStyle = (0, _assign2.default)({}, style, size ? { fontSize: size + 'px' } : {});
            return isColor ? _react2.default.createElement(
                'svg',
                (0, _extends3.default)({}, other, {
                    className: newClassName,
                    style: newStyle
                }),
                _react2.default.createElement('use', { xlinkHref: '#icon-color-' + type })
            ) : _react2.default.createElement('i', (0, _extends3.default)({}, other, {
                style: newStyle,
                className: newClassName
            }));
        }
    }]);
    return IcIcon;
}(_react.PureComponent);

IcIcon.defaultProps = {
    isColor: false
};
IcIcon.propTypes = {
    isColor: _propTypes2.default.bool,
    size: _propTypes2.default.number,
    type: _propTypes2.default.string.isRequired,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string
};
exports.default = IcIcon;
;