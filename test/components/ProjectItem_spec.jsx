'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProjectItem = require('../../src/components/ProjectItem');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ProjectItem', function () {
	return it('renders a project item with task name', function () {

		var component = (0, _reactAddonsTestUtils.renderIntoDocument)(_react2.default.createElement(_ProjectItem.ProjectItem, { task: 'Do Your Test' }));
		var list = (0, _reactAddonsTestUtils.scryRenderedDOMComponentsWithTag)(component, 'li');
		(0, _chai.expect)(list.textContent).to.equal('Do Your Text');
	});
});