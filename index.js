'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentIcon = require('@economist/component-icon');

var _economistComponentIcon2 = _interopRequireDefault(_economistComponentIcon);

var _economistComponentUsermenu = require('@economist/component-usermenu');

var _economistComponentUsermenu2 = _interopRequireDefault(_economistComponentUsermenu);

var MoreMenu = (function (_React$Component) {
  _inherits(MoreMenu, _React$Component);

  function MoreMenu(props) {
    _classCallCheck(this, MoreMenu);

    _React$Component.call(this, props);
  }

  MoreMenu.prototype.render = function render() {

    return _react2['default'].createElement(
      'nav',
      { className: 'user-more-menu' },
      _react2['default'].createElement(
        'ul',
        { className: 'mainmenu' },
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            'a',
            { href: '#', className: 'menu', title: 'More from The Economist' },
            _react2['default'].createElement(_economistComponentIcon2['default'], { type: 'hamburger', background: 'none', shape: 'square' })
          ),
          _react2['default'].createElement(
            'ul',
            { className: 'submenu' },
            _react2['default'].createElement(
              'li',
              { className: 'user-menu' },
              _react2['default'].createElement(_economistComponentUsermenu2['default'], null)
            ),
            _react2['default'].createElement(
              'li',
              { className: 'my-subscription-menu' },
              _react2['default'].createElement(
                'h3',
                null,
                'My subscription'
              ),
              _react2['default'].createElement(
                'ul',
                null,
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: 'http://www.economist.com/products/subscribe' },
                    'Subscribe to The Economist'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: 'http://www.economist.com/activate' },
                    'Activate my digital subscription'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: 'http://www.economist.com/user' },
                    'Manage my subscription'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: 'http://www.economist.com/products/renew' },
                    'Renew'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'more-from-economist-menu' },
              _react2['default'].createElement(
                'h3',
                null,
                'More from The Economist'
              ),
              _react2['default'].createElement(
                'ul',
                null,
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: 'http://www.economist.com/digital' },
                    'The Economist digital editions'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: 'http://www.economist.com/newsletters' },
                    'Newsletters'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: 'http://www.economist.com/events' },
                    'Events'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: 'http://jobs.economist.com' },
                    'Jobs.Economist.com'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: 'http://store.economist.com/' },
                    'The Economist Store'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: 'http://www.economist.com/bookmarks', html: '1' },
                    'Timekeeper reading list'
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(
          'li',
          { className: 'subscription-menu' },
          _react2['default'].createElement(
            'a',
            { href: 'https://subscriptions.economist.com/GLB/MAST/T1', target: '_blank' },
            'SUBSCRIBE'
          )
        )
      )
    );
  };

  return MoreMenu;
})(_react2['default'].Component);

exports['default'] = MoreMenu;
module.exports = exports['default'];

