/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/custom-slider-block.js":
/*!******************************************!*\
  !*** ./assets/js/custom-slider-block.js ***!
  \******************************************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n// import { registerBlockType } from '@wordpress/blocks';\n// import { useSelect } from '@wordpress/data';\n// import { useBlockProps } from '@wordpress/block-editor';\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n  MediaUpload = _wp$blockEditor.MediaUpload,\n  RichText = _wp$blockEditor.RichText;\nvar Button = wp.components.Button;\nregisterBlockType('custom-slider-block/slider', {\n  title: __('Custom Slider Block'),\n  icon: 'slides',\n  category: 'common',\n  attributes: {\n    images: {\n      type: 'array',\n      \"default\": []\n    },\n    texts: {\n      type: 'array',\n      \"default\": []\n    }\n  },\n  edit: function edit(props) {\n    console.log('Script is running!');\n    var attributes = props.attributes,\n      setAttributes = props.setAttributes;\n    var images = attributes.images,\n      texts = attributes.texts;\n    var onAddImage = function onAddImage(index, newImage) {\n      var newImages = _toConsumableArray(images);\n      newImages[index] = newImage.url;\n      setAttributes({\n        images: newImages\n      });\n    };\n    var onChangeText = function onChangeText(index, newText) {\n      var newTexts = _toConsumableArray(texts);\n      newTexts[index] = newText;\n      setAttributes({\n        texts: newTexts\n      });\n    };\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"custom-slider-block\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"slider\"\n    }, images.map(function (image, index) {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        key: index,\n        className: \"slide\"\n      }, /*#__PURE__*/React.createElement(MediaUpload, {\n        onSelect: function onSelect(newImage) {\n          return onAddImage(index, newImage);\n        },\n        type: \"image\",\n        value: image,\n        render: function render(_ref) {\n          var open = _ref.open;\n          return /*#__PURE__*/React.createElement(Button, {\n            onClick: open\n          }, image ? /*#__PURE__*/React.createElement(\"img\", {\n            src: image,\n            alt: \"Slider Image \".concat(index)\n          }) : __('Select Image'));\n        }\n      }), /*#__PURE__*/React.createElement(RichText, {\n        tagName: \"div\",\n        value: texts[index],\n        onChange: function onChange(newText) {\n          return onChangeText(index, newText);\n        },\n        placeholder: __('Enter text here...')\n      }));\n    })));\n  },\n  save: function save() {\n    // The save function is not necessary in this case, as the rendering is done server-side.\n    // The block content will be saved and rendered by the PHP function render_slider_block().\n    // return render_slider_block();\n    return null;\n  }\n});\n\n//# sourceURL=webpack://custom-slider-block/./assets/js/custom-slider-block.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/custom-slider-block.js"]();
/******/ 	
/******/ })()
;