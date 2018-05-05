'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icIconfont = require('ic-iconfont');

var _icIconfont2 = _interopRequireDefault(_icIconfont);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function colorToRgba(tagColor) {
    if (!tagColor) return;
    var color = tagColor.toLowerCase();
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (color && reg.test(color)) {
        if (color.length === 4) {
            var newColor = "#";
            for (var i = 1; i < 4; i += 1) {
                newColor += color.slice(i, i + 1).concat(color.slice(i, i + 1));
            }
            color = newColor;
        }
        //处理六位的颜色值
        var changeColor = [];
        for (var _i = 1; _i < 7; _i += 2) {
            changeColor.push(parseInt("0x" + color.slice(_i, _i + 2)));
        }
        return "RGB(" + changeColor.join(",") + ",0.08)";
    }
    return color;
} /**
   * @name: ic-tag ;
   * @author: sophiehui ;
   * @description: tag component for ifchenge ;
   * */

var icBasicTag = function (_PureComponent) {
    (0, _inherits3.default)(icBasicTag, _PureComponent);

    function icBasicTag() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, icBasicTag);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = icBasicTag.__proto__ || (0, _getPrototypeOf2.default)(icBasicTag)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            showTag: true
        }, _this.handleTagClose = function () {
            var onClose = _this.props.onClose;

            _this.setState({
                showTag: false
            });
            onClose();
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(icBasicTag, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                closable = _props.closable,
                color = _props.color,
                children = _props.children,
                style = _props.style,
                args = (0, _objectWithoutProperties3.default)(_props, ['className', 'closable', 'color', 'children', 'style']);

            var newColor = colorToRgba(color);
            return _react2.default.createElement(
                _react.Fragment,
                null,
                this.state.showTag ? _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({}, args, { className: (0, _classnames2.default)("ic-tag", className, { "ic-close-tag": closable }), style: (0, _extends3.default)({ background: newColor, color: color }, style) }),
                    _react2.default.createElement(
                        'span',
                        { className: 'ic-tag-inner' },
                        children
                    ),
                    closable ? _react2.default.createElement(_icIconfont2.default, { className: 'ic-tag-icon', type: 'close_small', size: 15, onClick: this.handleTagClose }) : null
                ) : null
            );
        }
    }]);
    return icBasicTag;
}(_react.PureComponent);

icBasicTag.defaultProps = {
    closable: false,
    onClose: function onClose() {},
    color: '#FFA000'
};
icBasicTag.propTypes = {
    closable: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    color: _propTypes2.default.string
};
exports.default = icBasicTag;