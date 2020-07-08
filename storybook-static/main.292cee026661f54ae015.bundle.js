(window.webpackJsonp = window.webpackJsonp || []).push([
	[0],
	{
		1326: function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				function(module) {
					var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
					(module._StorybookPreserveDecorators = !0),
						Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(
							[__webpack_require__(1328)],
							module
						);
				}.call(this, __webpack_require__(1327)(module));
		},
		1328: function(module, exports, __webpack_require__) {
			var map = {
				'./components/Buttons.stories.mdx': 1329,
				'./components/SignUpModals.stories.mdx': 1362,
			};
			function webpackContext(req) {
				var id = webpackContextResolve(req);
				return __webpack_require__(id);
			}
			function webpackContextResolve(req) {
				if (!__webpack_require__.o(map, req)) {
					var e = new Error("Cannot find module '" + req + "'");
					throw ((e.code = 'MODULE_NOT_FOUND'), e);
				}
				return map[req];
			}
			(webpackContext.keys = function webpackContextKeys() {
				return Object.keys(map);
			}),
				(webpackContext.resolve = webpackContextResolve),
				(module.exports = webpackContext),
				(webpackContext.id = 1328);
		},
		1329: function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, 'primary', function() {
					return primary;
				}),
				__webpack_require__.d(__webpack_exports__, 'secondary', function() {
					return secondary;
				}),
				__webpack_require__.d(__webpack_exports__, 'tertiary', function() {
					return tertiary;
				});
			__webpack_require__(0);
			var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7),
				_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45),
				_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60),
				_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(129),
				_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85);
			function _extends() {
				return (_extends =
					Object.assign ||
					function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					}).apply(this, arguments);
			}
			const layoutProps = {};
			function MDXContent({ components: components, ...props }) {
				return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
					'wrapper',
					_extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
					Object(
						_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx
					)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta, {
						title: 'Design System|Buttons',
						component: _Buttons__WEBPACK_IMPORTED_MODULE_3__.a,
						mdxType: 'Meta',
					}),
					Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
						'h1',
						{ id: 'buttons' },
						'Buttons'
					),
					Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
						'p',
						null,
						'Buttons are used to trigger actions within an application.'
					),
					Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)('h2', { id: 'usage' }, 'Usage'),
					Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
						'p',
						null,
						'Buttons are used to trigger internal actions within your web applications.'
					),
					Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
						'h2',
						{ id: 'primary-buttons' },
						'Primary Buttons'
					),
					Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
						'p',
						null,
						'Primary buttons are used as a call to action and indicate the most important action on a page.'
					),
					Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
						_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
						{ withToolbar: !0, mdxType: 'Preview' },
						Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
							_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
							{ name: 'primary', mdxType: 'Story' },
							Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
								_Buttons__WEBPACK_IMPORTED_MODULE_3__.a,
								{
									disabled: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)(
										'Disabled',
										!1
									),
									onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)(
										'button-click'
									),
									mdxType: 'PrimaryButton',
								},
								'Hello world'
							)
						)
					),
					Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
						'h2',
						{ id: 'secondary-buttons' },
						'Secondary Buttons'
					),
					Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
						'p',
						null,
						'Primary buttons are used as a call to action and indicate the most important action on a page.'
					),
					Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
						_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
						{ name: 'secondary', mdxType: 'Story' },
						Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
							_Buttons__WEBPACK_IMPORTED_MODULE_3__.b,
							{ mdxType: 'SecondaryButton' },
							'Hello world'
						)
					),
					Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
						'h2',
						{ id: 'tertiary-buttons' },
						'Tertiary Buttons'
					),
					Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
						'p',
						null,
						'Primary buttons are used as a call to action and indicate the most important action on a page.'
					),
					Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
						_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
						{ name: 'tertiary', mdxType: 'Story' },
						Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
							_Buttons__WEBPACK_IMPORTED_MODULE_3__.c,
							{ mdxType: 'TertiaryButton' },
							'Hello world'
						)
					)
				);
			}
			MDXContent.isMDXComponent = !0;
			const primary = () =>
				Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
					_Buttons__WEBPACK_IMPORTED_MODULE_3__.a,
					{
						disabled: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)(
							'Disabled',
							!1
						),
						onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)(
							'button-click'
						),
					},
					'Hello world'
				);
			(primary.story = {}),
				(primary.story.name = 'primary'),
				(primary.story.parameters = {
					mdxSource:
						'<PrimaryButton disabled={boolean("Disabled", false)} onClick={action(\'button-click\')}>Hello world</PrimaryButton>',
				});
			const secondary = () =>
				Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
					_Buttons__WEBPACK_IMPORTED_MODULE_3__.b,
					null,
					'Hello world'
				);
			(secondary.story = {}),
				(secondary.story.name = 'secondary'),
				(secondary.story.parameters = {
					mdxSource: '<SecondaryButton>Hello world</SecondaryButton>',
				});
			const tertiary = () =>
				Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
					_Buttons__WEBPACK_IMPORTED_MODULE_3__.c,
					null,
					'Hello world'
				);
			(tertiary.story = {}),
				(tertiary.story.name = 'tertiary'),
				(tertiary.story.parameters = { mdxSource: '<TertiaryButton>Hello world</TertiaryButton>' });
			const componentMeta = {
					title: 'Design System|Buttons',
					includeStories: ['primary', 'secondary', 'tertiary'],
				},
				mdxStoryNameToKey = { primary: 'primary', secondary: 'secondary', tertiary: 'tertiary' };
			(componentMeta.parameters = componentMeta.parameters || {}),
				(componentMeta.parameters.docs = {
					...(componentMeta.parameters.docs || {}),
					page: () =>
						Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
							_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
							{ mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
							Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(MDXContent, null)
						),
				}),
				(__webpack_exports__.default = componentMeta),
				(primary.__docgenInfo = { description: '', methods: [], displayName: 'primary' }),
				'undefined' != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES['src/components/Buttons.stories.mdx'] = {
						name: 'primary',
						docgenInfo: primary.__docgenInfo,
						path: 'src/components/Buttons.stories.mdx',
					}),
				(secondary.__docgenInfo = { description: '', methods: [], displayName: 'secondary' }),
				'undefined' != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES['src/components/Buttons.stories.mdx'] = {
						name: 'secondary',
						docgenInfo: secondary.__docgenInfo,
						path: 'src/components/Buttons.stories.mdx',
					}),
				(tertiary.__docgenInfo = { description: '', methods: [], displayName: 'tertiary' }),
				'undefined' != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES['src/components/Buttons.stories.mdx'] = {
						name: 'tertiary',
						docgenInfo: tertiary.__docgenInfo,
						path: 'src/components/Buttons.stories.mdx',
					});
		},
		1362: function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, 'signUp', function() {
					return signUp;
				});
			var react = __webpack_require__(0),
				react_default = __webpack_require__.n(react),
				esm = __webpack_require__(7),
				blocks = __webpack_require__(45),
				Buttons = __webpack_require__(60),
				taggedTemplateLiteral = __webpack_require__(48),
				SignUp = __webpack_require__(486),
				SignUp_default = __webpack_require__.n(SignUp),
				styled_components_browser_esm = __webpack_require__(43);
			function _templateObject() {
				var data = Object(taggedTemplateLiteral.a)(['\n\twidth: 100%;\n\theight: 100%;\n']);
				return (
					(_templateObject = function _templateObject() {
						return data;
					}),
					data
				);
			}
			var Icon = styled_components_browser_esm.c.svg(_templateObject()),
				CloseIcon_CloseIcon = function CloseIcon() {
					return react_default.a.createElement(
						Icon,
						{
							xmlns: 'http://www.w3.org/2000/svg',
							'data-name': 'Layer 1',
							viewBox: '0 0 64 80',
							x: '0px',
							y: '0px',
						},
						react_default.a.createElement('path', {
							d:
								'M57.41406,6.58594a1.99927,1.99927,0,0,0-2.82812,0L32,29.17188,9.41406,6.58594A1.99979,1.99979,0,0,0,6.58594,9.41406L29.17188,32,6.58594,54.58594a1.99979,1.99979,0,1,0,2.82813,2.82813L32,34.82813,54.58594,57.41406a1.99979,1.99979,0,0,0,2.82813-2.82812L34.82813,32,57.41406,9.41406A1.99927,1.99927,0,0,0,57.41406,6.58594Z',
						}),
						react_default.a.createElement('text', {
							x: '0',
							y: '79',
							fill: '#000000',
							'font-size': '5px',
							'font-weight': 'bold',
							'font-family': "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif",
						}),
						react_default.a.createElement('text', {
							x: '0',
							y: '84',
							fill: '#000000',
							'font-size': '5px',
							'font-weight': 'bold',
							'font-family': "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif",
						})
					);
				};
			(CloseIcon_CloseIcon.__docgenInfo = {
				description: '',
				methods: [],
				displayName: 'CloseIcon',
			}),
				'undefined' != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES['src/assets/icons/CloseIcon.js'] = {
						name: 'CloseIcon',
						docgenInfo: CloseIcon_CloseIcon.__docgenInfo,
						path: 'src/assets/icons/CloseIcon.js',
					});
			var Illustrations = { SignUp: SignUp_default.a },
				utils = __webpack_require__(72),
				web = __webpack_require__(210);
			function _templateObject4() {
				var data = Object(taggedTemplateLiteral.a)([
					'\n\tcursor: pointer;\n\tbackground: none;\n\tborder: none;\n\tpadding: 0;\n\tposition: absolute;\n\ttop: 40px;\n\tright: 40px;\n\theight: 24px;\n\twidth: 24px;\n',
				]);
				return (
					(_templateObject4 = function _templateObject4() {
						return data;
					}),
					data
				);
			}
			function _templateObject3() {
				var data = Object(taggedTemplateLiteral.a)([
					'\n\tmax-width: 70%;\n\tfont-size: ',
					';\n\ttext-align: center;\n',
				]);
				return (
					(_templateObject3 = function _templateObject3() {
						return data;
					}),
					data
				);
			}
			function _templateObject2() {
				var data = Object(taggedTemplateLiteral.a)(['\n\tfont-size: ', ';\n']);
				return (
					(_templateObject2 = function _templateObject2() {
						return data;
					}),
					data
				);
			}
			function SignUpModal_templateObject() {
				var data = Object(taggedTemplateLiteral.a)([
					'\n\tbox-shadow: 0 5px 16px rgba(0, 0, 0.2);\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 2px;\n\twidth: 800px;\n\theight: 500px;\n\tbackground-color: ',
					';\n\tcolor: ',
					';\n\tposition: relative;\n',
				]);
				return (
					(SignUpModal_templateObject = function _templateObject() {
						return data;
					}),
					data
				);
			}
			var SignUpModalWrapper = styled_components_browser_esm.c.div(
					SignUpModal_templateObject(),
					function(props) {
						return props.theme.formElementBackground;
					},
					function(props) {
						return props.theme.textFormElementBackground;
					}
				),
				SignUpHeader = styled_components_browser_esm.c.h3(_templateObject2(), utils.c.header3),
				SignUpText = styled_components_browser_esm.c.p(_templateObject3(), utils.c.paragraph),
				CloseSignUpModalButton = styled_components_browser_esm.c.button(_templateObject4());
			function SignUpModal(_ref) {
				var showSignUpModal = _ref.showSignUpModal,
					animation = Object(web.c)({
						opacity: showSignUpModal ? 1 : 0,
						transform: showSignUpModal ? 'translateY(0)' : 'translateY(-200%)',
						config: web.b.slow,
					});
				return react_default.a.createElement(
					web.a.div,
					{ style: animation },
					react_default.a.createElement(
						SignUpModalWrapper,
						null,
						react_default.a.createElement('img', {
							height: '280px',
							width: '280px',
							alt: 'SignUp For Account',
							'aria-hidden': 'true',
							src: Illustrations.SignUp,
						}),
						react_default.a.createElement(SignUpHeader, null, 'Sign Up!'),
						react_default.a.createElement(SignUpText, null, 'Sign Up Today To Get Access!'),
						react_default.a.createElement(Buttons.a, null, 'Sign Up'),
						react_default.a.createElement(
							CloseSignUpModalButton,
							null,
							react_default.a.createElement(CloseIcon_CloseIcon, null)
						)
					)
				);
			}
			(SignUpModal.__docgenInfo = { description: '', methods: [], displayName: 'SignUpModal' }),
				'undefined' != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES['src/components/SignUpModal.js'] = {
						name: 'SignUpModal',
						docgenInfo: SignUpModal.__docgenInfo,
						path: 'src/components/SignUpModal.js',
					});
			var dist = __webpack_require__(129),
				addon_knobs_dist = __webpack_require__(85);
			function _extends() {
				return (_extends =
					Object.assign ||
					function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
						}
						return target;
					}).apply(this, arguments);
			}
			const layoutProps = {};
			function MDXContent({ components: components, ...props }) {
				return Object(esm.mdx)(
					'wrapper',
					_extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
					Object(esm.mdx)(blocks.Meta, {
						title: 'Design System|SignUpModals',
						component: Buttons.a,
						mdxType: 'Meta',
					}),
					Object(esm.mdx)('h1', { id: 'SignUpModals' }, 'SignUpModals'),
					Object(esm.mdx)(
						'p',
						null,
						'SignUpModals are used to trigger actions within an application.'
					),
					Object(esm.mdx)('h2', { id: 'usage' }, 'Usage'),
					Object(esm.mdx)(
						'p',
						null,
						'SignUpModals are used to trigger internal actions within your web applications.'
					),
					Object(esm.mdx)(
						blocks.Preview,
						{ withToolbar: !0, mdxType: 'Preview' },
						Object(esm.mdx)(
							blocks.Story,
							{ name: 'signUp', mdxType: 'Story' },
							Object(esm.mdx)(
								SignUpModal,
								{
									showSignUpModal: Object(addon_knobs_dist.boolean)('Show SignUpModal', !1),
									onClick: Object(dist.action)('button-click'),
									mdxType: 'SignUpModal',
								},
								'Toggle SignUpModal'
							)
						)
					)
				);
			}
			MDXContent.isMDXComponent = !0;
			const signUp = () =>
				Object(esm.mdx)(
					SignUpModal,
					{
						showSignUpModal: Object(addon_knobs_dist.boolean)('Show SignUpModal', !1),
						onClick: Object(dist.action)('button-click'),
					},
					'Toggle SignUpModal'
				);
			(signUp.story = {}),
				(signUp.story.name = 'signUp'),
				(signUp.story.parameters = {
					mdxSource:
						'<SignUpModal showSignUpModal={boolean("Show SignUpModal", false)} onClick={action(\'button-click\')}>Toggle SignUpModal</SignUpModal>',
				});
			const componentMeta = { title: 'Design System|SignUpModals', includeStories: ['signUp'] },
				mdxStoryNameToKey = { signUp: 'signUp' };
			(componentMeta.parameters = componentMeta.parameters || {}),
				(componentMeta.parameters.docs = {
					...(componentMeta.parameters.docs || {}),
					page: () =>
						Object(esm.mdx)(
							blocks.AddContext,
							{ mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
							Object(esm.mdx)(MDXContent, null)
						),
				});
			__webpack_exports__.default = componentMeta;
			(signUp.__docgenInfo = { description: '', methods: [], displayName: 'signUp' }),
				'undefined' != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES['src/components/SignUpModals.stories.mdx'] = {
						name: 'signUp',
						docgenInfo: signUp.__docgenInfo,
						path: 'src/components/SignUpModals.stories.mdx',
					});
		},
		1363: function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			__webpack_require__.r(__webpack_exports__);
			var client = __webpack_require__(100),
				react = __webpack_require__(483),
				styled_components_browser_esm = __webpack_require__(43),
				utils = __webpack_require__(72),
				contexts = [
					{
						icon: 'box',
						title: 'Themes',
						components: [styled_components_browser_esm.a],
						params: [
							{ name: 'Default theme', props: { theme: utils.b }, default: !0 },
							{ name: 'Dark theme', props: { theme: utils.a } },
						],
						options: { deep: !0, disable: !1, cancelable: !1 },
					},
				],
				dist = __webpack_require__(85),
				addon_a11y_dist = __webpack_require__(485);
			Object(client.addParameters)({
				backgrounds: [
					{ name: 'Default theme', value: '#ffffff', default: !0 },
					{ name: 'Dark theme', value: '#050449' },
				],
			}),
				Object(client.addDecorator)(Object(react.a)(contexts)),
				Object(client.addDecorator)(dist.withKnobs),
				Object(client.addDecorator)(addon_a11y_dist.withA11y);
		},
		486: function(module, exports, __webpack_require__) {
			module.exports = __webpack_require__.p + 'static/media/SignUp.81d6dc70.svg';
		},
		487: function(module, exports, __webpack_require__) {
			__webpack_require__(488),
				__webpack_require__(635),
				__webpack_require__(636),
				__webpack_require__(1278),
				__webpack_require__(1363),
				__webpack_require__(1325),
				(module.exports = __webpack_require__(1326));
		},
		554: function(module, exports) {},
		60: function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			__webpack_require__.d(__webpack_exports__, 'a', function() {
				return PrimaryButton;
			}),
				__webpack_require__.d(__webpack_exports__, 'b', function() {
					return SecondaryButton;
				}),
				__webpack_require__.d(__webpack_exports__, 'c', function() {
					return TertiaryButton;
				});
			var _home_shardul_Documents_Design_System_my_component_library_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					48
				),
				styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43),
				_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72),
				styled_components_modifiers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(209);
			function _templateObject4() {
				var data = Object(
					_home_shardul_Documents_Design_System_my_component_library_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
				)([
					'\n\tcolor: ',
					';\n\tborder: none;\n\tbackground: none;\n\n\t&:disabled {\n\t\tcolor: ',
					';\n\t\tbackground: none;\n\t\tcursor: not-allowed;\n\t}\n\t',
					'\n',
				]);
				return (
					(_templateObject4 = function _templateObject4() {
						return data;
					}),
					data
				);
			}
			function _templateObject3() {
				var data = Object(
					_home_shardul_Documents_Design_System_my_component_library_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
				)([
					'\n\tcolor: ',
					';\n\tborder: 2px solid ',
					';\n\tbackground: none;\n\t&:disabled {\n\t\tbackground: none;\n\t\tcolor: ',
					';\n\t\tborder-color: ',
					';\n\t\tcursor: not-allowed;\n\t}\n\t',
					'\n',
				]);
				return (
					(_templateObject3 = function _templateObject3() {
						return data;
					}),
					data
				);
			}
			function _templateObject2() {
				var data = Object(
					_home_shardul_Documents_Design_System_my_component_library_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
				)([
					'\n\tbackground-color: ',
					';\n\tborder: none;\n\tcolor: ',
					';\n\t&:disabled {\n\t\tbackground-color: ',
					';\n\t\tcolor: ',
					';\n\t\tcursor: not-allowed;\n\t}\n\n\t',
					'\n',
				]);
				return (
					(_templateObject2 = function _templateObject2() {
						return data;
					}),
					data
				);
			}
			function _templateObject() {
				var data = Object(
					_home_shardul_Documents_Design_System_my_component_library_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a
				)([
					"\n\t@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');\n\tpadding: 12px 24px;\n\tfont-size: ",
					";\n\tborder-radius: 2px;\n\tmin-width: 100px; /** It is really useFul for small screens */\n\tcursor: pointer;\n\tfont-family: 'Roboto Slab', monospace;\n\tmargin-right: 10px;\n\ttransition: background-color 0.2s linear, color 0.2s linear;\n\n\t&:hover {\n\t\tbackground-color: ",
					';\n\t\tcolor: ',
					';\n\t}\n\t&:focus {\n\t\toutline: 3px solid ',
					';\n\t\toutline-offset: 2px;\n\t}\n\t&:active {\n\t\tbackground-color: ',
					';\n\t\tborder-color: ',
					';\n\t\tcolor: ',
					';\n\t}\n',
				]);
				return (
					(_templateObject = function _templateObject() {
						return data;
					}),
					data
				);
			}
			var BUTTON_MODIFIERS = {
					small: function small(_ref) {
						_ref.props;
						return '\n\tfont-size:'.concat(
							_utils__WEBPACK_IMPORTED_MODULE_2__.c.helperText,
							';\n\tpadding: 8px;\n\t'
						);
					},
					large: function large(_ref2) {
						_ref2.props;
						return '\n\t font-size:'.concat(
							_utils__WEBPACK_IMPORTED_MODULE_2__.c.header5,
							';\n\t padding:16px 24px;\n\t'
						);
					},
					warning: function warning(_ref3) {
						var props = _ref3.props;
						return '\n\t  background-color:'
							.concat(
								props.theme.status.warningColor,
								';\n\n\t  &:hover,&:focus{\n\t\t  background-color:'
							)
							.concat(props.theme.status.warningColorHover, ';\n\t\t  outline:3px solid ')
							.concat(
								props.theme.status.warningColorHover,
								';\n\t\t  outline-offset: 2px;\n\t\t}\n\t\t&:active{\n\t\t\tborder:2px solid '
							)
							.concat(props.theme.status.warningColorActive, ';\n\t\t    background-color:')
							.concat(props.theme.status.warningColorActive, ';\n\t  }\n\t');
					},
					warningSecondary: function warningSecondary(_ref4) {
						var props = _ref4.props;
						return '\n\t   color:'
							.concat(props.theme.status.warningColor, ';\n\t   border:2px solid ')
							.concat(props.theme.status.warningColor, ';\n\t   background:none;\n\t');
					},
					warningTertiary: function warningTertiary(_ref5) {
						var props = _ref5.props;
						return '\n\tbackground:none;\n\tcolor:'.concat(
							props.theme.status.warningColor,
							';\n\t'
						);
					},
					error: function error(_ref6) {
						var props = _ref6.props;
						return '\n\tbackground-color:'
							.concat(
								props.theme.status.errorColor,
								';\n\n\t&:hover,&:focus{\n\t\tbackground-color:'
							)
							.concat(props.theme.status.errorColorHover, ';\n\t\toutline:3px solid ')
							.concat(
								props.theme.status.errorColorHover,
								';\n\t\toutline-offset: 2px;\n\t  }\n\t  &:active{\n\t\t  border:2px solid '
							)
							.concat(props.theme.status.errorColorActive, ';\n\t\t  background-color:')
							.concat(props.theme.status.errorColorActive, ';\n\t}\n\t');
					},
					errorSecondary: function errorSecondary(_ref7) {
						var props = _ref7.props;
						return '\n\t\tcolor:'
							.concat(props.theme.status.errorColor, ';\n\t\tborder:2px solid ')
							.concat(props.theme.status.errorColor, ';\n\t\tbackground:none;\n\t');
					},
					errorTertiary: function errorTertiary(_ref8) {
						var props = _ref8.props;
						return '\n\tbackground:none;\n\tcolor:'.concat(props.theme.status.errorColor, ';\n\t');
					},
					success: function success(_ref9) {
						var props = _ref9.props;
						return '\n\tbackground-color:'
							.concat(
								props.theme.status.successColor,
								';\n\n\t&:hover,&:focus{\n\t\tbackground-color:'
							)
							.concat(props.theme.status.successColorHover, ';\n\t\toutline:3px solid ')
							.concat(
								props.theme.status.successColorHover,
								';\n\t\toutline-offset: 2px;\n\t  }\n\t  &:active{\n\t\t  border:2px solid '
							)
							.concat(props.theme.status.successColorActive, ';\n\t\t  background-color:')
							.concat(props.theme.status.successColorActive, ';\n\t}\n\t');
					},
					successSecondary: function successSecondary(_ref10) {
						var props = _ref10.props;
						return '\n\t\tcolor:'
							.concat(props.theme.status.successColor, ';\n\t\tborder:2px solid ')
							.concat(props.theme.status.successColor, ';\n\t\tbackground:none;\n\t');
					},
					successTertiary: function successTertiary(_ref11) {
						var props = _ref11.props;
						return '\n\tbackground:none;\n\tcolor:'.concat(
							props.theme.status.successColor,
							';\n\t'
						);
					},
				},
				Button = styled_components__WEBPACK_IMPORTED_MODULE_1__.c.button(
					_templateObject(),
					_utils__WEBPACK_IMPORTED_MODULE_2__.c.paragraph,
					function(props) {
						return props.theme.primaryColorHover;
					},
					function(props) {
						return props.theme.textColorOnPrimary;
					},
					function(props) {
						return props.theme.primaryColorHover;
					},
					function(props) {
						return props.theme.primaryColorActive;
					},
					function(props) {
						return props.theme.primaryColorActive;
					},
					function(props) {
						return props.theme.textColorOnPrimary;
					}
				),
				PrimaryButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(Button)(
					_templateObject2(),
					function(props) {
						return props.theme.primaryColor;
					},
					function(props) {
						return props.theme.textColorOnPrimary;
					},
					function(props) {
						return props.theme.disabled;
					},
					function(props) {
						return props.theme.textOnDisabled;
					},
					Object(styled_components_modifiers__WEBPACK_IMPORTED_MODULE_3__.applyStyleModifiers)(
						BUTTON_MODIFIERS
					)
				),
				SecondaryButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(Button)(
					_templateObject3(),
					function(props) {
						return props.theme.primaryColor;
					},
					function(props) {
						return props.theme.primaryColor;
					},
					function(props) {
						return props.theme.disabled;
					},
					function(props) {
						return props.theme.disabled;
					},
					Object(styled_components_modifiers__WEBPACK_IMPORTED_MODULE_3__.applyStyleModifiers)(
						BUTTON_MODIFIERS
					)
				),
				TertiaryButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(Button)(
					_templateObject4(),
					function(props) {
						return props.theme.primaryColor;
					},
					function(props) {
						return props.theme.disabled;
					},
					Object(styled_components_modifiers__WEBPACK_IMPORTED_MODULE_3__.applyStyleModifiers)(
						BUTTON_MODIFIERS
					)
				);
		},
		72: function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			__webpack_require__.d(__webpack_exports__, 'b', function() {
				return defaultTheme;
			}),
				__webpack_require__.d(__webpack_exports__, 'a', function() {
					return darkTheme;
				}),
				__webpack_require__.d(__webpack_exports__, 'c', function() {
					return typeScale;
				});
			var blue_100 = '#3a36e0',
				blue_300 = '#030086',
				green_100 = '#529e66',
				green_200 = '#367b48',
				green_300 = '#276738',
				yellow_100 = '#e1c542',
				yellow_200 = '#cab23f',
				yellow_300 = '#b49e35',
				red_100 = '#d0454c',
				red_200 = '#b54248',
				red_300 = '#95353a',
				neutral_100 = '#ffffff',
				neutral_300 = '#e1e1e1',
				neutral_400 = '#737581',
				neutral_600 = '#000000',
				primaryFont = '"Roboto Slab",monospace',
				typeScale = {
					header1: '3.052rem',
					header2: '2.442rem',
					header3: '1.953rem',
					header4: '1.563rem',
					header5: '1.25rem',
					paragraph: '1rem',
					helperText: '.8rem',
					copyrightText: '.7rem',
				},
				defaultTheme = {
					primaryColor: blue_300,
					primaryColorHover: '#0804b8',
					primaryColorActive: blue_100,
					formElementBackground: neutral_100,
					textFormElementBackground: neutral_600,
					textColorOnPrimary: neutral_100,
					textColor: neutral_600,
					disabled: neutral_400,
					textOnDisabled: neutral_300,
					textColorInverted: neutral_100,
					primaryFont: primaryFont,
					status: {
						warningColor: yellow_100,
						warningColorHover: yellow_200,
						warningColorActive: yellow_300,
						errorColor: red_100,
						errorColorHover: red_200,
						errorColorActive: red_300,
						successColor: green_100,
						successColorHover: green_200,
						successColorActive: green_300,
					},
				},
				darkTheme = {
					primaryColor: neutral_300,
					primaryColorHover: '#f4f5f7',
					primaryColorActive: neutral_100,
					formElementBackground: blue_100,
					textFormElementBackground: neutral_100,
					textColorOnPrimary: blue_300,
					textColor: blue_300,
					disabled: neutral_400,
					textOnDisabled: neutral_300,
					textColorInverted: neutral_100,
					primaryFont: primaryFont,
					status: {
						warningColor: yellow_100,
						warningColorHover: yellow_200,
						warningColorActive: yellow_300,
						errorColor: red_100,
						errorColorHover: red_200,
						errorColorActive: red_300,
						successColor: green_100,
						successColorHover: green_200,
						successColorActive: green_300,
					},
				},
				taggedTemplateLiteral = __webpack_require__(48),
				styled_components_browser_esm = __webpack_require__(43),
				polished_esm = __webpack_require__(42);
			function _templateObject() {
				var data = Object(taggedTemplateLiteral.a)([
					'\n',
					'\nhtml{\n    font-size:16px;\n    box-sizing:border-box;\n}\n*,*:after,*:before{\n    box-sizing:inherit;\n}\nbody{\n    margin:0;\n    font-family:',
					';\n}\nmain{\n    width:90%;\n    margin:0 auto;\n}\n\n',
				]);
				return (
					(_templateObject = function _templateObject() {
						return data;
					}),
					data
				);
			}
			Object(styled_components_browser_esm.b)(
				_templateObject(),
				Object(polished_esm.normalize)(),
				primaryFont
			);
		},
	},
	[[487, 1, 2]],
]);
//# sourceMappingURL=main.292cee026661f54ae015.bundle.js.map
