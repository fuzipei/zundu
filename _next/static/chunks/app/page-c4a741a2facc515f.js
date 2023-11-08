(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
	[931], {
		6012: function(e, s, t) {
			Promise.resolve()
				.then(t.bind(t, 7151))
		},
		7151: function(e, s, t) {
			"use strict";
			t.r(s);
			var l = t(7437),
				a = t(2265),
				r = t(5151),
				n = t(2390),
				c = t.n(n);
			s.default = () => {
				let [e, s] = (0, a.useState)(""), [t, n] = (0, a.useState)(""), [o, i] = (0, a.useState)(!0), [d, m] = (0, a.useState)(!1), [u, x] = (0, a.useState)(!1), h = () => {
					n(""), s(""), m(!1), x(!1)
				};
				return (0, l.jsx)("div", {
					className: "min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8",
					children: (0, l.jsxs)("div", {
						className: "sm:mx-auto sm:w-full sm:max-w-md",
						children: [(0, l.jsx)("h1", {
							className: "text-3xl font-bold text-center",
							children: "尊嘟假嘟翻译器O.o"
						}), (0, l.jsx)("div", {
							className: "bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 m-2",
							children: (0, l.jsxs)("div", {
								className: "space-y-6",
								children: [(0, l.jsxs)("p", {
									className: "text-gray-500 text-sm",
									children: ["这是一个尊嘟语和人语互相翻译的工具。可以把翻译出的尊嘟语发给你不好好说话的朋友。", (0, l.jsx)("br", {}), "本工具为", (0, l.jsx)("a", {
										className: "underline",
										target: "_blank",
										href: "https://github.com/fuzipei/zundu",
										children: "zdjd"
									}), "的源代码,原作者SnailSword", (0, l.jsx)("br", {}), "bug反馈请联系", (0, l.jsx)("a", {
										className: "underline",
										target: "_blank",
										href: "mailto:help@richedev.cn",
										children: "help@richedev.cn"
									}), "。"]
								}), (0, l.jsxs)("div", {
									className: "space-y-2",
									children: [(0, l.jsx)("label", {
										htmlFor: "selectLanguage",
										className: "block text-sm font-medium text-gray-700",
										children: "翻译为"
									}), (0, l.jsxs)("div", {
										className: "flex items-center space-x-4",
										children: [(0, l.jsxs)("label", {
											htmlFor: "human",
											className: "inline-flex items-center",
											children: [(0, l.jsx)("input", {
												id: "human",
												type: "radio",
												className: "h-4 w-4 text-blue-600",
												name: "language",
												value: "human",
												checked: !o,
												onChange: () => {
													i(!1), h()
												}
											}), (0, l.jsx)("span", {
												className: "ml-2 text-gray-700",
												children: "人语"
											})]
										}), (0, l.jsxs)("label", {
											htmlFor: "dog",
											className: "inline-flex items-center",
											children: [(0, l.jsx)("input", {
												id: "dog",
												type: "radio",
												className: "h-4 w-4 text-blue-600",
												name: "language",
												value: "dog",
												checked: o,
												onChange: () => {
													i(!0), h()
												}
											}), (0, l.jsx)("span", {
												className: "ml-2 text-gray-700",
												children: "尊嘟语"
											})]
										})]
									})]
								}), (0, l.jsxs)("div", {
									children: [(0, l.jsx)("label", {
										htmlFor: "inputText",
										className: "block text-sm font-medium text-gray-700",
										children: o ? "请输入人语" : "请输入尊嘟语"
									}), (0, l.jsxs)("div", {
										className: "mt-1",
										children: [(0, l.jsx)("textarea", {
											id: "inputText",
											name: "inputText",
											rows: "3",
											className: "shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ".concat(u ? "border-red-500" : ""),
											placeholder: o ? "请输入人语" : "请输入尊嘟语",
											value: e,
											onChange: e => {
												s(e.target.value)
											}
										}), u && (0, l.jsx)("p", {
											className: "text-red-500 text-sm mt-1",
											children: "你输入的是假嘟语，请重新输入"
										})]
									})]
								}), (0, l.jsx)("div", {
									children: (0, l.jsx)("button", {
										type: "button",
										className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ".concat("" === e.trim() ? "opacity-50 cursor-not-allowed" : ""),
										onClick: () => {
											try {
												if (!o && !r.Z.isZdjd(e.trim())) throw Error("输入的是假嘟语，请重新输入");
												let s = o ? r.Z.encode(e) : r.Z.decode(e.trim());
												n(s), m(!1), x(!1)
											} catch (e) {
												m(!1), x(!0), s(""), n("")
											}
										},
										disabled: "" === e.trim(),
										children: "翻译"
									})
								}), "" !== t && (0, l.jsxs)("div", {
									className: "space-y-2",
									children: [(0, l.jsx)("label", {
										htmlFor: "outputText",
										className: "block text-sm font-medium text-gray-700",
										children: o ? "翻译结果" : "尊嘟假嘟语"
									}), (0, l.jsxs)("div", {
										className: "relative",
										children: [(0, l.jsx)("textarea", {
											id: "outputText",
											name: "outputText",
											rows: "3",
											className: "shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ".concat(u ? "border-red-500" : ""),
											readOnly: !0,
											value: t
										}), (0, l.jsx)("div", {
											className: "absolute inset-y-0 right-0 flex items-center",
											children: (0, l.jsx)("button", {
												type: "button",
												className: "inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ".concat(d ? "bg-green-600" : "bg-gray-300"),
												onClick: () => {
													c()(t), m(!0), x(!1)
												},
												children: d ? "已复制" : "复制"
											})
										})]
									})]
								})]
							})
						})]
					})
				})
			}
		}
	},
	function(e) {
		e.O(0, [112, 971, 596, 744], function() {
			return e(e.s = 6012)
		}), _N_E = e.O()
	}
]);