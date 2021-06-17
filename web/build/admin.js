(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin"],{

/***/ "./assets/admin.pack.js":
/*!******************************!*\
  !*** ./assets/admin.pack.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/admin.scss */ "./assets/scss/admin.scss");
/* harmony import */ var _scss_admin_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_admin_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_admin_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/admin/configuration */ "./assets/js/admin/configuration.js");
/* harmony import */ var _js_admin_configuration__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_admin_configuration__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_admin_element_import_element_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/admin/element-import/element-import */ "./assets/js/admin/element-import/element-import.js");
/* harmony import */ var _js_admin_osm_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/admin/osm-tags */ "./assets/js/admin/osm-tags.js");
/* harmony import */ var _js_admin_element_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/admin/element-edit */ "./assets/js/admin/element-edit.js");
/* harmony import */ var _js_admin_source_priority__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/admin/source-priority */ "./assets/js/admin/source-priority.js");
// Styles
 // Javascript







/***/ }),

/***/ "./assets/js/admin/configuration.js":
/*!******************************************!*\
  !*** ./assets/js/admin/configuration.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

// CONFIGURATION ADMIN, disable the whole feature box according to checkbox "feature active"
document.addEventListener('DOMContentLoaded', function () {
  checkCollaborativeVoteActivated();
  $('.collaborative-feature .sonata-ba-field.sonata-ba-field-inline-natural > .form-group:first-child .icheckbox_square-blue .iCheck-helper').click(checkCollaborativeVoteActivated);
  $('.gogo-feature').each(function () {
    checkGoGoFeatureActivated(this);
  });
  $('.gogo-feature .sonata-ba-field.sonata-ba-field-inline-natural > .form-group:first-child .icheckbox_square-blue .iCheck-helper').click(function () {
    var that = this;
    setTimeout(function () {
      checkGoGoFeatureActivated($(that).closest('.gogo-feature'));
    }, 10);
  });
});

function checkCollaborativeVoteActivated() {
  var collabActive = $('.collaborative-feature .sonata-ba-field.sonata-ba-field-inline-natural > .form-group:first-child .icheckbox_square-blue').hasClass('checked');
  var opacity = collabActive ? '1' : '0.4';
  $('.collaborative-moderation-box').css('opacity', opacity);
}

function checkGoGoFeatureActivated(object) {
  var featureActive = $(object).find('.sonata-ba-field.sonata-ba-field-inline-natural > .form-group:first-child .icheckbox_square-blue').hasClass('checked');
  var opacity = featureActive ? '1' : '0.5';
  $(object).css('opacity', opacity);
}

/***/ }),

/***/ "./assets/js/admin/element-edit.js":
/*!*****************************************!*\
  !*** ./assets/js/admin/element-edit.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue/dist/vue.esm */ "./node_modules/vue/dist/vue.esm.js");


document.addEventListener('DOMContentLoaded', function () {
  if ($('.element-data-fields').length > 0) {
    new vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_1__["default"]({
      el: ".element-data-fields",
      data: {
        newFields: [],
        existingProps: existingProps.map(function (prop) {
          return {
            id: prop,
            text: prop
          };
        })
      },
      methods: {
        addField: function addField() {
          this.newFields.push('');
        }
      }
    });
  }
});

/***/ }),

/***/ "./assets/js/admin/element-import/BoundsPicker.vue":
/*!*********************************************************!*\
  !*** ./assets/js/admin/element-import/BoundsPicker.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoundsPicker_vue_vue_type_template_id_cb95b4f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoundsPicker.vue?vue&type=template&id=cb95b4f8& */ "./assets/js/admin/element-import/BoundsPicker.vue?vue&type=template&id=cb95b4f8&");
/* harmony import */ var _BoundsPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoundsPicker.vue?vue&type=script&lang=js& */ "./assets/js/admin/element-import/BoundsPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BoundsPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoundsPicker.vue?vue&type=style&index=0&lang=scss& */ "./assets/js/admin/element-import/BoundsPicker.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BoundsPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BoundsPicker_vue_vue_type_template_id_cb95b4f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BoundsPicker_vue_vue_type_template_id_cb95b4f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/admin/element-import/BoundsPicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/admin/element-import/BoundsPicker.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./assets/js/admin/element-import/BoundsPicker.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BoundsPicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/admin/element-import/BoundsPicker.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./assets/js/admin/element-import/BoundsPicker.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader??ref--4-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./BoundsPicker.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./assets/js/admin/element-import/BoundsPicker.vue?vue&type=template&id=cb95b4f8&":
/*!****************************************************************************************!*\
  !*** ./assets/js/admin/element-import/BoundsPicker.vue?vue&type=template&id=cb95b4f8& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_template_id_cb95b4f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BoundsPicker.vue?vue&type=template&id=cb95b4f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=template&id=cb95b4f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_template_id_cb95b4f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_template_id_cb95b4f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilder.vue":
/*!************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilder.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OsmQueryBuilder_vue_vue_type_template_id_6781daea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true& */ "./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true&");
/* harmony import */ var _OsmQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OsmQueryBuilder.vue?vue&type=script&lang=js& */ "./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OsmQueryBuilder_vue_vue_type_style_index_0_id_6781daea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true& */ "./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OsmQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OsmQueryBuilder_vue_vue_type_template_id_6781daea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OsmQueryBuilder_vue_vue_type_template_id_6781daea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6781daea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/admin/element-import/OsmQueryBuilder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmQueryBuilder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_style_index_0_id_6781daea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader??ref--4-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_style_index_0_id_6781daea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_style_index_0_id_6781daea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_style_index_0_id_6781daea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_style_index_0_id_6781daea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_template_id_6781daea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_template_id_6781daea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_template_id_6781daea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilderCondition.vue":
/*!*********************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilderCondition.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OsmQueryBuilderCondition_vue_vue_type_template_id_04e62b80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80& */ "./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80&");
/* harmony import */ var _OsmQueryBuilderCondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OsmQueryBuilderCondition.vue?vue&type=script&lang=js& */ "./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OsmQueryBuilderCondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OsmQueryBuilderCondition_vue_vue_type_template_id_04e62b80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OsmQueryBuilderCondition_vue_vue_type_template_id_04e62b80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/admin/element-import/OsmQueryBuilderCondition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderCondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmQueryBuilderCondition.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderCondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80&":
/*!****************************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderCondition_vue_vue_type_template_id_04e62b80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderCondition_vue_vue_type_template_id_04e62b80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderCondition_vue_vue_type_template_id_04e62b80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue":
/*!*********************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OsmQueryBuilderTagSearch_vue_vue_type_template_id_357b0e72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72& */ "./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72&");
/* harmony import */ var _OsmQueryBuilderTagSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js& */ "./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OsmQueryBuilderTagSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OsmQueryBuilderTagSearch_vue_vue_type_template_id_357b0e72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OsmQueryBuilderTagSearch_vue_vue_type_template_id_357b0e72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderTagSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderTagSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72&":
/*!****************************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderTagSearch_vue_vue_type_template_id_357b0e72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderTagSearch_vue_vue_type_template_id_357b0e72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderTagSearch_vue_vue_type_template_id_357b0e72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue":
/*!********************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OsmqueryBuilderWikiLink_vue_vue_type_template_id_a92fb356_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true& */ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true&");
/* harmony import */ var _OsmqueryBuilderWikiLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js& */ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OsmqueryBuilderWikiLink_vue_vue_type_style_index_0_id_a92fb356_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css& */ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OsmqueryBuilderWikiLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OsmqueryBuilderWikiLink_vue_vue_type_template_id_a92fb356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OsmqueryBuilderWikiLink_vue_vue_type_template_id_a92fb356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a92fb356",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_style_index_0_id_a92fb356_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_style_index_0_id_a92fb356_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_style_index_0_id_a92fb356_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_style_index_0_id_a92fb356_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_style_index_0_id_a92fb356_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_template_id_a92fb356_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_template_id_a92fb356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_template_id_a92fb356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/admin/element-import/element-import.js":
/*!**********************************************************!*\
  !*** ./assets/js/admin/element-import/element-import.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OsmQueryBuilder_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OsmQueryBuilder.vue */ "./assets/js/admin/element-import/OsmQueryBuilder.vue");
/* harmony import */ var vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue/dist/vue.esm */ "./node_modules/vue/dist/vue.esm.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



document.addEventListener('DOMContentLoaded', function () {
  if ($('#element-import').length > 0) {
    new vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_2__["default"]({
      el: "#element-import",
      data: {
        sourceType: undefined,
        url: undefined,
        osmQueriesJson: undefined,
        formName: ""
      },
      computed: {
        osmQueryInputValue: function osmQueryInputValue() {
          if (!this.osmQueriesJson) return "";
          var result = {};
          result.address = this.osmQueriesJson.address;
          result.bounds = this.osmQueriesJson.bounds;
          result.queries = [];

          var _iterator = _createForOfIteratorHelper(this.osmQueriesJson.queries),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var query = _step.value;
              result.queries.push(query.filter(function (condition) {
                return condition.key;
              }));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return JSON.stringify(result);
        }
      },
      components: {
        OsmQueryBuilder: _OsmQueryBuilder_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
      },
      mounted: function mounted() {
        for (var key in importObject) {
          this[key] = importObject[key];
        }

        this.osmQueriesJson = JSON.parse(this.osmQueriesJson);
        this.sourceType = sourceType;
        this.formName = formName;
        $("#sonata-ba-field-container-".concat(formName, "_file")).appendTo('.file-container');
      },
      watch: {
        sourceType: function sourceType(newVal) {
          $('.input-is-synched').closest('.checkbox').toggle(newVal == 'osm');
        }
      }
    });
  }
});

/***/ }),

/***/ "./assets/js/admin/osm-tags.js":
/*!*************************************!*\
  !*** ./assets/js/admin/osm-tags.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/dist/vue.esm */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _element_import_OsmQueryBuilderCondition_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-import/OsmQueryBuilderCondition.vue */ "./assets/js/admin/element-import/OsmQueryBuilderCondition.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



document.addEventListener('DOMContentLoaded', function () {
  if ($('.osm-tags-field').length > 0) {
    new vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: ".osm-tags-field",
      data: {
        formName: undefined,
        tags: []
      },
      computed: {
        stringifiedTagsHash: function stringifiedTagsHash() {
          var result = {};

          var _iterator = _createForOfIteratorHelper(this.tags),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var tag = _step.value;
              if (tag.key && tag.value) result[tag.key] = tag.value;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return JSON.stringify(result);
        }
      },
      components: {
        OsmCondition: _element_import_OsmQueryBuilderCondition_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
      },
      mounted: function mounted() {
        this.formName = formName;
        console.log(importObject, importObject.osmTags);

        for (var key in importObject.osmTags) {
          this.tags.push({
            key: key,
            value: importObject.osmTags[key]
          });
        }
      }
    });
  }
});

/***/ }),

/***/ "./assets/js/admin/source-priority.js":
/*!********************************************!*\
  !*** ./assets/js/admin/source-priority.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue/dist/vue.esm */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");




vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_2__["default"].directive('sortable', {
  inserted: function inserted(el, binding) {
    new sortablejs__WEBPACK_IMPORTED_MODULE_3__["default"](el, binding.value || {});
  }
});
document.addEventListener('DOMContentLoaded', function () {
  if ($('.source-priority-container').length > 0) {
    new vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_2__["default"]({
      el: ".source-priority-container",
      data: {
        list: undefined,
        value: undefined
      },
      mounted: function mounted() {
        this.list = sourceList;
        this.value = this.list.join(',');
      },
      methods: {
        onUpdate: function onUpdate(event) {
          this.list.splice(event.newIndex, 0, this.list.splice(event.oldIndex, 1)[0]);
          this.value = this.list.join(',');
        },
        textFrom: function textFrom(item) {
          return item ? item : "Cette Carte";
        }
      }
    });
  }
});

/***/ }),

/***/ "./assets/scss/admin.scss":
/*!********************************!*\
  !*** ./assets/scss/admin.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_shades__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet-shades */ "./node_modules/leaflet-shades/src/js/index.js");
/* harmony import */ var leaflet_shades__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_shades__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var leaflet_shades_src_css_leaflet_shades_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet-shades/src/css/leaflet-shades.css */ "./node_modules/leaflet-shades/src/css/leaflet-shades.css");
/* harmony import */ var leaflet_shades_src_css_leaflet_shades_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet_shades_src_css_leaflet_shades_css__WEBPACK_IMPORTED_MODULE_5__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['osmQueryObject', 'tileLayer', 'defaultBounds'],
  data: function data() {
    return {
      queryType: null,
      // either 'address' or 'bounds'
      inputAddress: undefined,
      geocodedAddress: {},
      geocodeErrorMsg: '',
      mapBounds: null,
      drawnBounds: null,
      // drawn bounds by user with leaflet-shades
      map: undefined,
      currentLayers: undefined,
      mapShades: undefined
    };
  },
  computed: {
    bounds: function bounds() {
      // if (this.addressPresent) return null
      return this.queryType == 'bounds' && this.drawnBounds ? this.drawnBounds : this.mapBounds;
    },
    address: function address() {
      if (this.queryType == 'address' && this.geocodedAddress && this.geocodedAddress.osm_id) return this.inputAddress;else return null;
    },
    // builds the geographical part of the overpass query
    overpassQuery: function overpassQuery() {
      if (this.address) {
        var areaRef = 1 * this.geocodedAddress.osm_id;
        if (this.geocodedAddress.osm_type == "way") areaRef += 2400000000;
        if (this.geocodedAddress.osm_type == "relation") areaRef += 3600000000;
        return "(area:".concat(areaRef, ")");
      } else {
        var b = this.bounds;
        return "(".concat(b.getSouth(), ",").concat(b.getWest(), ",").concat(b.getNorth(), ",").concat(b.getEast(), ")");
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    // Init map
    this.map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"](this.$refs.map, {
      editable: true
    });
    leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"](this.tileLayer).addTo(this.map);
    this.map.on('moveend', function () {
      return _this.mapBounds = _this.map.getBounds();
    });
    this.currentLayers = new leaflet__WEBPACK_IMPORTED_MODULE_2__["layerGroup"]();
    this.currentLayers.addTo(this.map); // Initialise state from saved osmQueryObject

    var initialBounds = this.defaultBounds;

    if (this.osmQueryObject && this.osmQueryObject.address) {
      this.inputAddress = this.osmQueryObject.address;
      this.geocodeAddress();
      this.queryType = 'address';
    } else if (this.osmQueryObject && this.osmQueryObject.bounds) {
      initialBounds = new leaflet__WEBPACK_IMPORTED_MODULE_2__["latLngBounds"](this.osmQueryObject.bounds);
      this.drawnBounds = initialBounds;
      this.queryType = 'bounds';
    } // Init map position


    this.map.fitBounds(initialBounds);
    this.mapBounds = this.map.getBounds();
  },
  watch: {
    // When switching query type we need to turn on/off leaflet shades plugin
    queryType: function queryType() {
      var _this2 = this;

      if (this.mapShades) {
        this.mapShades.onRemove(this.map); // See https://github.com/mkong0216/leaflet-shades/issues/3

        this.mapShades = null;
      }

      this.currentLayers.clearLayers();

      if (this.queryType == 'bounds') {
        if (this.drawnBounds) {
          var rect = leaflet__WEBPACK_IMPORTED_MODULE_2__["rectangle"](this.drawnBounds);
          this.currentLayers.addLayer(rect);
          rect.enableEdit();
        } else {
          this.currentLayers.addLayer(this.map.editTools.startRectangle());
        } // Init shades


        this.mapShades = new leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletShades"]();
        this.mapShades.addTo(this.map);
        this.mapShades.on('shades:bounds-changed', function (event) {
          _this2.drawnBounds = event.bounds;
        });
      }
    }
  },
  methods: {
    geocodeAddress: function geocodeAddress() {
      var _this3 = this;

      if (!this.inputAddress) {
        this.geocodeErrorMsg = "Veuillez entrer une adresse";
        return;
      }

      var url = "https://nominatim.openstreetmap.org/search.php?q=".concat(this.inputAddress, "&polygon_geojson=1&format=jsonv2");
      $.getJSON(url, function (results) {
        if (!results || results.length == 0) {
          _this3.geocodeErrorMsg = "Aucune r\xE9sultat trouv\xE9 pour ".concat(_this3.inputAddress);
          return;
        }

        _this3.geocodeErrorMsg = '';

        _this3.currentLayers.clearLayers();

        _this3.geocodedAddress = results[0];
        var layer = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](_this3.geocodedAddress.geojson, {
          style: function style(feature) {
            color: 'blue';
          }
        });

        _this3.currentLayers.addLayer(layer);

        _this3.map.fitBounds(layer.getBounds());
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _OsmQueryBuilderCondition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OsmQueryBuilderCondition */ "./assets/js/admin/element-import/OsmQueryBuilderCondition.vue");
/* harmony import */ var _OsmQueryBuilderTagSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OsmQueryBuilderTagSearch */ "./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue");
/* harmony import */ var _BoundsPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoundsPicker */ "./assets/js/admin/element-import/BoundsPicker.vue");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['osmQueryObject', 'tileLayer', 'defaultBounds'],
  components: {
    OsmCondition: _OsmQueryBuilderCondition__WEBPACK_IMPORTED_MODULE_3__["default"],
    OsmTagSearch: _OsmQueryBuilderTagSearch__WEBPACK_IMPORTED_MODULE_4__["default"],
    BoundsPicker: _BoundsPicker__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      queries: []
    };
  },
  computed: {
    // Transform queries array into an Overpass query
    overpassQuery: function overpassQuery() {
      var result = '';

      var _iterator = _createForOfIteratorHelper(this.queries),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var query = _step.value;
          var queryString = '';

          var _iterator2 = _createForOfIteratorHelper(query),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var condition = _step2.value;

              if (condition.operator == "" || condition.operator == "!") {
                queryString += "[".concat(condition.operator, "\"").concat(condition.key, "\"]");
              } else if (condition.value) {
                var value = condition.value.replace(/,/g, '|'); // transform multi input into reg expr

                queryString += "[\"".concat(condition.key, "\"").concat(condition.operator, "\"").concat(value, "\"]");
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          queryString += this.$refs.boundsPicker.overpassQuery;
          if (query != '') result += "node".concat(queryString, ";way").concat(queryString, ";relation").concat(queryString, ";");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    },
    overpassApiUrl: function overpassApiUrl() {
      // out meta provide extra data, out center provide center of way or relation
      return "https://overpass-api.de/api/interpreter?data=[out:json][timeout:1000];(".concat(this.overpassQuery, ");out%20meta%20center;");
    }
  },
  watch: {
    overpassApiUrl: function overpassApiUrl(url) {
      this.$emit('osm-url-changed', url);
      this.$emit('update:osmQueryObject', {
        queries: this.queries,
        bounds: [this.$refs.boundsPicker.bounds.getSouthWest(), this.$refs.boundsPicker.bounds.getNorthEast()],
        address: this.$refs.boundsPicker.address
      });
    }
  },
  mounted: function mounted() {
    if (this.osmQueryObject && this.osmQueryObject.queries) this.queries = this.osmQueryObject.queries;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _OsmqueryBuilderWikiLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OsmqueryBuilderWikiLink */ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue");








function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['condition'],
  components: {
    OsmWikiLink: _OsmqueryBuilderWikiLink__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      prevalentValues: []
    };
  },
  computed: {
    operator: function operator() {
      return this.condition.operator;
    },
    isMultipleCondition: function isMultipleCondition() {
      return this.operator && this.operator.includes('~');
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.condition.key) {
      // get prevalentValues using first result, i.e. perfect match
      $.getJSON(this.keyInfoUrl(this.condition.key), function (response) {
        if (response.data.length > 0) {
          _this.prevalentValues = response.data[0].prevalent_values;

          _this.initInputValue();
        }
      });
    } else {
      this.initSearchKeyInput();
    }
  },
  watch: {
    operator: function operator(newVal, oldVal) {
      var newValIsArray = newVal && newVal.includes('~');
      var oldValIsArray = oldVal && oldVal.includes('~');

      if (newValIsArray != oldValIsArray) {
        if (!newValIsArray && this.condition.value) {
          // transform array value to single value
          this.condition.value = this.condition.value.split(',')[0];
          $(this.$refs.inputValue).val(this.condition.value).trigger('change'); // needed for select2 to be updated
        }

        this.initInputValue();
      }
    }
  },
  methods: {
    keyInfoUrl: function keyInfoUrl(key) {
      return "https://taginfo.openstreetmap.org/api/4/keys/all?query=".concat(key, "&include=prevalent_values&sortname=count_all&sortorder=desc&page=1&rp=20&qtype=key&format=json_pretty");
    },
    initSearchKeyInput: function initSearchKeyInput() {
      var _this2 = this;

      $(this.$refs.inputKey).select2({
        minimumInputLength: 2,
        ajax: {
          url: function url(term) {
            return _this2.keyInfoUrl(term);
          },
          dataType: 'json',
          processResults: function processResults(response) {
            return {
              results: response.data
            };
          }
        },
        id: function id(item) {
          return item.key;
        },
        formatResult: function formatResult(item) {
          return item.key;
        },
        formatSelection: function formatSelection(item) {
          return _this2.onKeySelectedFromSearchResults(item);
        }
      });
    },
    onKeySelectedFromSearchResults: function onKeySelectedFromSearchResults(item) {
      this.prevalentValues = item.prevalent_values;
      this.initInputValue();
      this.condition.key = item.key;
      return item.key;
    },
    initInputValue: function initInputValue() {
      var _this3 = this;

      var data = this.prevalentValues;

      if (this.condition.value) {
        if (this.isMultipleCondition) {
          var _iterator = _createForOfIteratorHelper(this.condition.value.split(',')),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var value = _step.value;
              data.unshift({
                value: value
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          data.unshift({
            value: this.condition.value
          });
        }
      } // Format to select2 style


      data = data.map(function (v) {
        return {
          id: v.value,
          text: v.value.charAt(0).toUpperCase() + v.value.slice(1)
        };
      }); // Init Value Input from prevalent values

      $(this.$refs.inputValue).select2({
        createSearchChoice: function createSearchChoice(term, data) {
          if ($(data).filter(function () {
            return this.text.localeCompare(term) === 0;
          }).length === 0) {
            return {
              id: term,
              text: term
            };
          }
        },
        multiple: this.isMultipleCondition,
        data: data
      }).on('change', function () {
        _this3.condition.value = $(_this3.$refs.inputValue).val();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);






function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    $('.tag-search').select2({
      minimumInputLength: 2,
      ajax: {
        url: function url(term) {
          return "https://tagfinder.herokuapp.com/api/search?query=".concat(term);
        },
        dataType: 'json',
        processResults: function processResults(data) {
          return {
            results: data
          };
        }
      },
      id: function id(item) {
        return item.subject;
      },
      formatResult: function formatResult(item) {
        return "<b>".concat(item.prefLabel, "</b> : ").concat(item.scopeNote.en);
      },
      formatSelection: function formatSelection(item) {
        var query = [];
        if (item.isTag) query.push({
          key: item.prefLabel.split('=')[0],
          operator: '=',
          value: item.prefLabel.split('=')[1]
        });else query.push({
          key: item.prefLabel,
          operator: '=',
          value: ''
        });
        var combinesTags = {};

        var _iterator = _createForOfIteratorHelper(item.combines),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var combine = _step.value;
            var combineKey = combine.label.split('=')[0];
            var combineValue = combine.label.split('=')[1]; // Ignore some keys not used for filtering

            if (['name', 'website', 'wikipedia', 'opening_hours'].includes(combineKey)) continue;
            if (combinesTags[combineKey]) combinesTags[combineKey] += ",".concat(combineValue);else combinesTags[combineKey] = combineValue;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        for (var key in combinesTags) {
          var value = combinesTags[key];
          if (value == '*') query.push({
            key: key,
            operator: '',
            value: ''
          });else query.push({
            key: key,
            operator: value.includes(',') ? '~' : '=',
            value: value
          });
        }

        _this.$parent.queries.push(query);

        return null;
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['condition'],
  computed: {
    isTag: function isTag() {
      if (this.condition.key && this.condition.operator == '=' && this.condition.value) return true;
      return false;
    },
    url: function url() {
      if (this.isTag) {
        return "https://wiki.openstreetmap.org/wiki/Tag:".concat(this.tag);
      } else {
        return "https://wiki.openstreetmap.org/wiki/Key:".concat(this.condition.key);
      }
    },
    tag: function tag() {
      return "".concat(this.condition.key, "=").concat(this.condition.value);
    },
    title: function title() {
      return "Lien vers la fiche Wiki de \"".concat(this.isTag ? this.tag : this.condition.key, "\"");
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=template&id=cb95b4f8&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=template&id=cb95b4f8& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bounds-picker-container" }, [
    _c("label", [_vm._v("Zone Géographique de la requete")]),
    _vm._v(" "),
    _c("div", { staticClass: "input-group" }, [
      _c("span", { staticClass: "input-group-btn" }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.queryType,
                expression: "queryType"
              }
            ],
            staticClass: "form-control",
            staticStyle: { width: "auto" },
            attrs: { "data-sonata-select2": "false" },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.queryType = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              }
            }
          },
          [
            _c("option", { attrs: { value: "address" } }, [
              _vm._v("Chercher par adresse")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "bounds" } }, [
              _vm._v("Dessiner un rectangle sur la carte")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.inputAddress,
            expression: "inputAddress"
          }
        ],
        ref: "inputAddress",
        staticClass: "form-control",
        attrs: {
          disabled: _vm.queryType != "address",
          placeholder: "Une ville, une région, un pays..."
        },
        domProps: { value: _vm.inputAddress },
        on: {
          keypress: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            $event.preventDefault()
            return _vm.geocodeAddress($event)
          },
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.inputAddress = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "input-group-btn" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { type: "button", disabled: _vm.queryType != "address" },
            on: { click: _vm.geocodeAddress }
          },
          [_vm._v("\n                Chercher\n            ")]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.geocodeErrorMsg,
            expression: "geocodeErrorMsg"
          }
        ],
        staticClass: "alert alert-danger"
      },
      [_vm._v(_vm._s(_vm.geocodeErrorMsg))]
    ),
    _vm._v(" "),
    _c("div", { ref: "map", staticClass: "bounds-picker-map" })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "osm-query-builder" },
    [
      _c("label", [_vm._v("Liste des requêtes dans la base OpenStreetMap")]),
      _vm._v(" "),
      _c("osm-tag-search"),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-default",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              return _vm.queries.push([{ key: "", operator: "=", value: "" }])
            }
          }
        },
        [_vm._v("\n        Ou ajouter une requête manuellement\n    ")]
      ),
      _vm._v(" "),
      _vm._l(_vm.queries, function(query, queryIndex) {
        return _c(
          "div",
          { key: queryIndex, staticClass: "bs-callout" },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-default remove-query btn-icon",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.queries.splice(queryIndex, 1)
                  }
                }
              },
              [_c("i", { staticClass: "fa fa-trash" })]
            ),
            _vm._v(" "),
            _vm._l(query, function(condition, conditionIndex) {
              return _c(
                "div",
                { key: conditionIndex, staticClass: "condition-container" },
                [
                  _c("osm-condition", {
                    key: "Query" + queryIndex,
                    attrs: { condition: condition }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default btn-icon remove-condition",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return query.splice(conditionIndex, 1)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-trash remove-condition" })]
                  )
                ],
                1
              )
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default btn-add-condition btn-sm",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return query.push({ key: "", operator: "=", value: "" })
                  }
                }
              },
              [_vm._v("Ajouter une condition")]
            )
          ],
          2
        )
      }),
      _vm._v(" "),
      _c("bounds-picker", {
        ref: "boundsPicker",
        attrs: {
          "osm-query-object": _vm.osmQueryObject,
          tileLayer: _vm.tileLayer,
          "default-bounds": _vm.defaultBounds
        }
      }),
      _vm._v(" "),
      _c(
        "label",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.overpassQuery,
              expression: "overpassQuery"
            }
          ]
        },
        [
          _vm._v(
            "Code automatiquement généré pour la requête OpenStreetMap (via OverPass)"
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "pre",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.overpassQuery,
              expression: "overpassQuery"
            }
          ]
        },
        [_vm._v(_vm._s(_vm.overpassQuery))]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "condition" },
    [
      _c("osm-wiki-link", {
        ref: "wikiLink",
        attrs: { condition: _vm.condition }
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.condition.key,
            expression: "condition.key"
          }
        ],
        ref: "inputKey",
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "Chercher une clé" },
        domProps: { value: _vm.condition.key },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.condition, "key", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.condition.operator,
              expression: "condition.operator"
            }
          ],
          ref: "selectOperator",
          staticClass: "condition-operator form-control",
          attrs: {
            "data-sonata-select2": "false",
            placeholder: "Condition..."
          },
          on: {
            change: function($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function(o) {
                  return o.selected
                })
                .map(function(o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.$set(
                _vm.condition,
                "operator",
                $event.target.multiple ? $$selectedVal : $$selectedVal[0]
              )
            }
          }
        },
        [
          _c("option", { attrs: { value: "" } }, [_vm._v("Existe")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "!" } }, [_vm._v("N'existe pas")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "=" } }, [_vm._v("Est égal à")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "!=" } }, [_vm._v("Différent de")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "~" } }, [
            _vm._v("Est l'une des valeurs")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "!~" } }, [
            _vm._v("N'est aucune des valeurs")
          ])
        ]
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.condition.value,
            expression: "condition.value"
          }
        ],
        ref: "inputValue",
        staticClass: "form-control",
        attrs: { disabled: ["", "!"].includes(_vm.condition.operator) },
        domProps: { value: _vm.condition.value },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.condition, "value", $event.target.value)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("input", {
        staticClass: "form-control tag-search",
        attrs: {
          type: "text",
          placeholder:
            "Recherche rapide dans OpenSteetMap en Anglais (restaurant, organic, second hand...)"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.condition.key
    ? _c(
        "a",
        {
          staticClass: "btn btn-default btn-icon",
          attrs: { href: _vm.url, target: "_blank", title: _vm.title }
        },
        [
          _c("i", {
            staticClass:
              "fa fa-external-link-square fas fa-external-link-square-alt"
          })
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["./assets/admin.pack.js","runtime","vendors~admin"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4ucGFjay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vY29uZmlndXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1lZGl0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Cb3VuZHNQaWNrZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Cb3VuZHNQaWNrZXIudnVlPzVhNzgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L0JvdW5kc1BpY2tlci52dWU/ZjI0NyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvQm91bmRzUGlja2VyLnZ1ZT9hYjA1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXIudnVlP2JlYzYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L09zbVF1ZXJ5QnVpbGRlci52dWU/YzQ1ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtUXVlcnlCdWlsZGVyLnZ1ZT81ZTBmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXJDb25kaXRpb24udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXJDb25kaXRpb24udnVlPzIyMTYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L09zbVF1ZXJ5QnVpbGRlckNvbmRpdGlvbi52dWU/ZDNjNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtUXVlcnlCdWlsZGVyVGFnU2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtUXVlcnlCdWlsZGVyVGFnU2VhcmNoLnZ1ZT82MGQ2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXJUYWdTZWFyY2gudnVlPzE3ZDkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L09zbXF1ZXJ5QnVpbGRlcldpa2lMaW5rLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtcXVlcnlCdWlsZGVyV2lraUxpbmsudnVlPzAyMTgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L09zbXF1ZXJ5QnVpbGRlcldpa2lMaW5rLnZ1ZT9mMGIzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21xdWVyeUJ1aWxkZXJXaWtpTGluay52dWU/YjhhZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvZWxlbWVudC1pbXBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL29zbS10YWdzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9zb3VyY2UtcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvYWRtaW4uc2NzcyIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L0JvdW5kc1BpY2tlci52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXIudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtUXVlcnlCdWlsZGVyQ29uZGl0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L09zbVF1ZXJ5QnVpbGRlclRhZ1NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21xdWVyeUJ1aWxkZXJXaWtpTGluay52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L0JvdW5kc1BpY2tlci52dWU/OThhYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtUXVlcnlCdWlsZGVyLnZ1ZT84ZTRiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21xdWVyeUJ1aWxkZXJXaWtpTGluay52dWU/Njk0ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvQm91bmRzUGlja2VyLnZ1ZT9iODM2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXIudnVlPzhhMmMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L09zbVF1ZXJ5QnVpbGRlckNvbmRpdGlvbi52dWU/NTY2YiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtUXVlcnlCdWlsZGVyVGFnU2VhcmNoLnZ1ZT8zOGFjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21xdWVyeUJ1aWxkZXJXaWtpTGluay52dWU/YmFmYyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0NvbGxhYm9yYXRpdmVWb3RlQWN0aXZhdGVkIiwiJCIsImNsaWNrIiwiZWFjaCIsImNoZWNrR29Hb0ZlYXR1cmVBY3RpdmF0ZWQiLCJ0aGF0Iiwic2V0VGltZW91dCIsImNsb3Nlc3QiLCJjb2xsYWJBY3RpdmUiLCJoYXNDbGFzcyIsIm9wYWNpdHkiLCJjc3MiLCJvYmplY3QiLCJmZWF0dXJlQWN0aXZlIiwiZmluZCIsImxlbmd0aCIsIlZ1ZSIsImVsIiwiZGF0YSIsIm5ld0ZpZWxkcyIsImV4aXN0aW5nUHJvcHMiLCJtYXAiLCJwcm9wIiwiaWQiLCJ0ZXh0IiwibWV0aG9kcyIsImFkZEZpZWxkIiwicHVzaCIsInNvdXJjZVR5cGUiLCJ1bmRlZmluZWQiLCJ1cmwiLCJvc21RdWVyaWVzSnNvbiIsImZvcm1OYW1lIiwiY29tcHV0ZWQiLCJvc21RdWVyeUlucHV0VmFsdWUiLCJyZXN1bHQiLCJhZGRyZXNzIiwiYm91bmRzIiwicXVlcmllcyIsInF1ZXJ5IiwiZmlsdGVyIiwiY29uZGl0aW9uIiwia2V5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbXBvbmVudHMiLCJPc21RdWVyeUJ1aWxkZXIiLCJtb3VudGVkIiwiaW1wb3J0T2JqZWN0IiwicGFyc2UiLCJhcHBlbmRUbyIsIndhdGNoIiwibmV3VmFsIiwidG9nZ2xlIiwidGFncyIsInN0cmluZ2lmaWVkVGFnc0hhc2giLCJ0YWciLCJ2YWx1ZSIsIk9zbUNvbmRpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJvc21UYWdzIiwiZGlyZWN0aXZlIiwiaW5zZXJ0ZWQiLCJiaW5kaW5nIiwiU29ydGFibGUiLCJsaXN0Iiwic291cmNlTGlzdCIsImpvaW4iLCJvblVwZGF0ZSIsImV2ZW50Iiwic3BsaWNlIiwibmV3SW5kZXgiLCJvbGRJbmRleCIsInRleHRGcm9tIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBQSxRQUFRLENBQUNDLGdCQUFULENB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3R5bGVzXG5pbXBvcnQgJy4vc2Nzcy9hZG1pbi5zY3NzJ1xuXG4vLyBKYXZhc2NyaXB0XG5pbXBvcnQgJy4vanMvYWRtaW4vY29uZmlndXJhdGlvbidcbmltcG9ydCAnLi9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9lbGVtZW50LWltcG9ydCdcbmltcG9ydCAnLi9qcy9hZG1pbi9vc20tdGFncydcbmltcG9ydCAnLi9qcy9hZG1pbi9lbGVtZW50LWVkaXQnXG5pbXBvcnQgJy4vanMvYWRtaW4vc291cmNlLXByaW9yaXR5J1xuIiwiLy8gQ09ORklHVVJBVElPTiBBRE1JTiwgZGlzYWJsZSB0aGUgd2hvbGUgZmVhdHVyZSBib3ggYWNjb3JkaW5nIHRvIGNoZWNrYm94IFwiZmVhdHVyZSBhY3RpdmVcIlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGNoZWNrQ29sbGFib3JhdGl2ZVZvdGVBY3RpdmF0ZWQoKTtcbiAgICAkKCcuY29sbGFib3JhdGl2ZS1mZWF0dXJlIC5zb25hdGEtYmEtZmllbGQuc29uYXRhLWJhLWZpZWxkLWlubGluZS1uYXR1cmFsID4gLmZvcm0tZ3JvdXA6Zmlyc3QtY2hpbGQgLmljaGVja2JveF9zcXVhcmUtYmx1ZSAuaUNoZWNrLWhlbHBlcicpLmNsaWNrKGNoZWNrQ29sbGFib3JhdGl2ZVZvdGVBY3RpdmF0ZWQpO1xuXG4gICAgJCgnLmdvZ28tZmVhdHVyZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNoZWNrR29Hb0ZlYXR1cmVBY3RpdmF0ZWQodGhpcyk7XG4gICAgfSk7XG4gICAgJCgnLmdvZ28tZmVhdHVyZSAuc29uYXRhLWJhLWZpZWxkLnNvbmF0YS1iYS1maWVsZC1pbmxpbmUtbmF0dXJhbCA+IC5mb3JtLWdyb3VwOmZpcnN0LWNoaWxkIC5pY2hlY2tib3hfc3F1YXJlLWJsdWUgLmlDaGVjay1oZWxwZXInKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjaGVja0dvR29GZWF0dXJlQWN0aXZhdGVkKCQodGhhdCkuY2xvc2VzdCgnLmdvZ28tZmVhdHVyZScpKTsgwqB9LCAxMCk7XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gY2hlY2tDb2xsYWJvcmF0aXZlVm90ZUFjdGl2YXRlZCgpIHtcbiAgICB2YXIgY29sbGFiQWN0aXZlID0gJCgnLmNvbGxhYm9yYXRpdmUtZmVhdHVyZSAuc29uYXRhLWJhLWZpZWxkLnNvbmF0YS1iYS1maWVsZC1pbmxpbmUtbmF0dXJhbCA+IC5mb3JtLWdyb3VwOmZpcnN0LWNoaWxkIC5pY2hlY2tib3hfc3F1YXJlLWJsdWUnKS5oYXNDbGFzcygnY2hlY2tlZCcpO1xuICAgIHZhciBvcGFjaXR5ID0gY29sbGFiQWN0aXZlID8gJzEnIDogJzAuNCc7XG4gICAgJCgnLmNvbGxhYm9yYXRpdmUtbW9kZXJhdGlvbi1ib3gnKS5jc3MoJ29wYWNpdHknLCBvcGFjaXR5KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tHb0dvRmVhdHVyZUFjdGl2YXRlZChvYmplY3QpIHtcbiAgICB2YXIgZmVhdHVyZUFjdGl2ZSA9ICQob2JqZWN0KS5maW5kKCcuc29uYXRhLWJhLWZpZWxkLnNvbmF0YS1iYS1maWVsZC1pbmxpbmUtbmF0dXJhbCA+IC5mb3JtLWdyb3VwOmZpcnN0LWNoaWxkIC5pY2hlY2tib3hfc3F1YXJlLWJsdWUnKS5oYXNDbGFzcygnY2hlY2tlZCcpO1xuICAgIHZhciBvcGFjaXR5ID0gZmVhdHVyZUFjdGl2ZSA/ICcxJyA6ICcwLjUnO1xuICAgICQob2JqZWN0KS5jc3MoJ29wYWNpdHknLCBvcGFjaXR5KTtcbn0iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZS9kaXN0L3Z1ZS5lc20nXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmVsZW1lbnQtZGF0YS1maWVsZHMnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5ldyBWdWUoe1xuICAgICAgICAgICAgZWw6IFwiLmVsZW1lbnQtZGF0YS1maWVsZHNcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBuZXdGaWVsZHM6IFtdLFxuICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHM6IGV4aXN0aW5nUHJvcHMubWFwKCBwcm9wID0+IHsgcmV0dXJuIHtpZDogcHJvcCwgdGV4dDogcHJvcH0gfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgYWRkRmllbGQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3RmllbGRzLnB1c2goJycpICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICB9XG59KSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQm91bmRzUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYjk1YjRmOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Cb3VuZHNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Cb3VuZHNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0JvdW5kc1BpY2tlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3VzZXIvQnVyZWF1L3Rlc3QvcHJvamVjdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjYjk1YjRmOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjYjk1YjRmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjYjk1YjRmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQm91bmRzUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYjk1YjRmOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjYjk1YjRmOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L0JvdW5kc1BpY2tlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0JvdW5kc1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQm91bmRzUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Cb3VuZHNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0JvdW5kc1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2I5NWI0ZjgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL09zbVF1ZXJ5QnVpbGRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc4MWRhZWEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vT3NtUXVlcnlCdWlsZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vT3NtUXVlcnlCdWlsZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Pc21RdWVyeUJ1aWxkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Njc4MWRhZWEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2NzgxZGFlYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3VzZXIvQnVyZWF1L3Rlc3QvcHJvamVjdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NzgxZGFlYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NzgxZGFlYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NzgxZGFlYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vT3NtUXVlcnlCdWlsZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzgxZGFlYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NzgxZGFlYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L09zbVF1ZXJ5QnVpbGRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09zbVF1ZXJ5QnVpbGRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3NtUXVlcnlCdWlsZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Pc21RdWVyeUJ1aWxkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Njc4MWRhZWEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09zbVF1ZXJ5QnVpbGRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc4MWRhZWEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL09zbVF1ZXJ5QnVpbGRlckNvbmRpdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDRlNjJiODAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vT3NtUXVlcnlCdWlsZGVyQ29uZGl0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vT3NtUXVlcnlCdWlsZGVyQ29uZGl0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdXNlci9CdXJlYXUvdGVzdC9wcm9qZWN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA0ZTYyYjgwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA0ZTYyYjgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA0ZTYyYjgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Pc21RdWVyeUJ1aWxkZXJDb25kaXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA0ZTYyYjgwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA0ZTYyYjgwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtUXVlcnlCdWlsZGVyQ29uZGl0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3NtUXVlcnlCdWlsZGVyQ29uZGl0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Pc21RdWVyeUJ1aWxkZXJDb25kaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09zbVF1ZXJ5QnVpbGRlckNvbmRpdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDRlNjJiODAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL09zbVF1ZXJ5QnVpbGRlclRhZ1NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzU3YjBlNzImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vT3NtUXVlcnlCdWlsZGVyVGFnU2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vT3NtUXVlcnlCdWlsZGVyVGFnU2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdXNlci9CdXJlYXUvdGVzdC9wcm9qZWN0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM1N2IwZTcyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM1N2IwZTcyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM1N2IwZTcyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Pc21RdWVyeUJ1aWxkZXJUYWdTZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1N2IwZTcyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM1N2IwZTcyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtUXVlcnlCdWlsZGVyVGFnU2VhcmNoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3NtUXVlcnlCdWlsZGVyVGFnU2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Pc21RdWVyeUJ1aWxkZXJUYWdTZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09zbVF1ZXJ5QnVpbGRlclRhZ1NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzU3YjBlNzImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL09zbXF1ZXJ5QnVpbGRlcldpa2lMaW5rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hOTJmYjM1NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Pc21xdWVyeUJ1aWxkZXJXaWtpTGluay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL09zbXF1ZXJ5QnVpbGRlcldpa2lMaW5rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Pc21xdWVyeUJ1aWxkZXJXaWtpTGluay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hOTJmYjM1NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYTkyZmIzNTZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS91c2VyL0J1cmVhdS90ZXN0L3Byb2plY3Qvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYTkyZmIzNTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTkyZmIzNTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTkyZmIzNTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL09zbXF1ZXJ5QnVpbGRlcldpa2lMaW5rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hOTJmYjM1NiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhOTJmYjM1NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L09zbXF1ZXJ5QnVpbGRlcldpa2lMaW5rLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3NtcXVlcnlCdWlsZGVyV2lraUxpbmsudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09zbXF1ZXJ5QnVpbGRlcldpa2lMaW5rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Pc21xdWVyeUJ1aWxkZXJXaWtpTGluay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hOTJmYjM1NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Pc21xdWVyeUJ1aWxkZXJXaWtpTGluay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTkyZmIzNTYmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgT3NtUXVlcnlCdWlsZGVyIGZyb20gJy4vT3NtUXVlcnlCdWlsZGVyLnZ1ZSdcbmltcG9ydCBWdWUgZnJvbSAndnVlL2Rpc3QvdnVlLmVzbSdcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcjZWxlbWVudC1pbXBvcnQnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5ldyBWdWUoe1xuICAgICAgICAgICAgZWw6IFwiI2VsZW1lbnQtaW1wb3J0XCIsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc291cmNlVHlwZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHVybDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIG9zbVF1ZXJpZXNKc29uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgZm9ybU5hbWU6IFwiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgICAgICBvc21RdWVyeUlucHV0VmFsdWUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5vc21RdWVyaWVzSnNvbikgcmV0dXJuIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hZGRyZXNzID0gdGhpcy5vc21RdWVyaWVzSnNvbi5hZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5ib3VuZHMgPSB0aGlzLm9zbVF1ZXJpZXNKc29uLmJvdW5kc1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucXVlcmllcyA9IFtdXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgcXVlcnkgb2YgdGhpcy5vc21RdWVyaWVzSnNvbi5xdWVyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucXVlcmllcy5wdXNoKHF1ZXJ5LmZpbHRlcihjb25kaXRpb24gPT4gY29uZGl0aW9uLmtleSkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcG9uZW50czogeyBPc21RdWVyeUJ1aWxkZXIgfSxcbiAgICAgICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gaW1wb3J0T2JqZWN0KSB0aGlzW2tleV0gPSBpbXBvcnRPYmplY3Rba2V5XVxuICAgICAgICAgICAgICAgIHRoaXMub3NtUXVlcmllc0pzb24gPSBKU09OLnBhcnNlKHRoaXMub3NtUXVlcmllc0pzb24pXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VUeXBlID0gc291cmNlVHlwZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1OYW1lID0gZm9ybU5hbWVcbiAgICAgICAgICAgICAgICAkKGAjc29uYXRhLWJhLWZpZWxkLWNvbnRhaW5lci0ke2Zvcm1OYW1lfV9maWxlYCkuYXBwZW5kVG8oJy5maWxlLWNvbnRhaW5lcicpXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICAgICAgc291cmNlVHlwZShuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmlucHV0LWlzLXN5bmNoZWQnKS5jbG9zZXN0KCcuY2hlY2tib3gnKS50b2dnbGUobmV3VmFsID09ICdvc20nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59KVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUvZGlzdC92dWUuZXNtJ1xuaW1wb3J0IE9zbUNvbmRpdGlvbiBmcm9tICcuL2VsZW1lbnQtaW1wb3J0L09zbVF1ZXJ5QnVpbGRlckNvbmRpdGlvbi52dWUnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLm9zbS10YWdzLWZpZWxkJykubGVuZ3RoID4gMCkge1xuICAgICAgICBuZXcgVnVlKHtcbiAgICAgICAgICAgIGVsOiBcIi5vc20tdGFncy1maWVsZFwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGZvcm1OYW1lOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdGFnczogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgICAgIHN0cmluZ2lmaWVkVGFnc0hhc2goKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB7fVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHRhZyBvZiB0aGlzLnRhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWcua2V5ICYmIHRhZy52YWx1ZSkgcmVzdWx0W3RhZy5rZXldID0gdGFnLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcG9uZW50czogeyBPc21Db25kaXRpb24gfSxcbiAgICAgICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtTmFtZSA9IGZvcm1OYW1lXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1wb3J0T2JqZWN0LCBpbXBvcnRPYmplY3Qub3NtVGFncylcbiAgICAgICAgICAgICAgICBmb3IobGV0IGtleSBpbiBpbXBvcnRPYmplY3Qub3NtVGFncykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhZ3MucHVzaCh7a2V5OiBrZXksIHZhbHVlOiBpbXBvcnRPYmplY3Qub3NtVGFnc1trZXldfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSlcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlL2Rpc3QvdnVlLmVzbSdcbmltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJ1xuXG5WdWUuZGlyZWN0aXZlKCdzb3J0YWJsZScsIHtcbiAgaW5zZXJ0ZWQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZykge1xuICAgIG5ldyBTb3J0YWJsZShlbCwgYmluZGluZy52YWx1ZSB8fCB7fSlcbiAgfVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuc291cmNlLXByaW9yaXR5LWNvbnRhaW5lcicpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbmV3IFZ1ZSh7XG4gICAgICAgICAgICBlbDogXCIuc291cmNlLXByaW9yaXR5LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGxpc3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IHNvdXJjZUxpc3RcbiAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmxpc3Quam9pbignLCcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgIG9uVXBkYXRlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKGV2ZW50Lm5ld0luZGV4LCAwLCB0aGlzLmxpc3Quc3BsaWNlKGV2ZW50Lm9sZEluZGV4LCAxKVswXSlcbiAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmxpc3Quam9pbignLCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGV4dEZyb20oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSA/IGl0ZW0gOiBcIkNldHRlIENhcnRlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn0pXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImJvdW5kcy1waWNrZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxsYWJlbD5ab25lIEfDqW9ncmFwaGlxdWUgZGUgbGEgcmVxdWV0ZTwvbGFiZWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInF1ZXJ5VHlwZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGF0YS1zb25hdGEtc2VsZWN0Mj1cImZhbHNlXCIgc3R5bGU9XCJ3aWR0aDphdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZGRyZXNzXCI+Q2hlcmNoZXIgcGFyIGFkcmVzc2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJvdW5kc1wiPkRlc3NpbmVyIHVuIHJlY3RhbmdsZSBzdXIgbGEgY2FydGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dCBAa2V5cHJlc3MuZW50ZXIucHJldmVudD1cImdlb2NvZGVBZGRyZXNzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiaW5wdXRBZGRyZXNzXCIgOmRpc2FibGVkPVwicXVlcnlUeXBlICE9ICdhZGRyZXNzJ1wiIFxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVW5lIHZpbGxlLCB1bmUgcsOpZ2lvbiwgdW4gcGF5cy4uLlwiIHJlZj1cImlucHV0QWRkcmVzc1wiLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwiZ2VvY29kZUFkZHJlc3NcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cInF1ZXJ5VHlwZSAhPSAnYWRkcmVzcydcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2hlcmNoZXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiB2LXNob3c9XCJnZW9jb2RlRXJyb3JNc2dcIj57eyBnZW9jb2RlRXJyb3JNc2cgfX08L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmRzLXBpY2tlci1tYXBcIiByZWY9XCJtYXBcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyBMIGZyb20gJ2xlYWZsZXQnXG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcydcbmltcG9ydCAnbGVhZmxldC1zaGFkZXMnXG5pbXBvcnQgJ2xlYWZsZXQtc2hhZGVzL3NyYy9jc3MvbGVhZmxldC1zaGFkZXMuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsgJ29zbVF1ZXJ5T2JqZWN0JywgJ3RpbGVMYXllcicsICdkZWZhdWx0Qm91bmRzJyBdLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBxdWVyeVR5cGU6IG51bGwsIC8vIGVpdGhlciAnYWRkcmVzcycgb3IgJ2JvdW5kcydcbiAgICAgICAgICAgIGlucHV0QWRkcmVzczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZ2VvY29kZWRBZGRyZXNzOiB7fSxcbiAgICAgICAgICAgIGdlb2NvZGVFcnJvck1zZzogJycsXG4gICAgICAgICAgICBtYXBCb3VuZHM6IG51bGwsXG4gICAgICAgICAgICBkcmF3bkJvdW5kczogbnVsbCwgLy8gZHJhd24gYm91bmRzIGJ5IHVzZXIgd2l0aCBsZWFmbGV0LXNoYWRlc1xuICAgICAgICAgICAgbWFwOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjdXJyZW50TGF5ZXJzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXBTaGFkZXM6IHVuZGVmaW5lZCxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgYm91bmRzKCkge1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuYWRkcmVzc1ByZXNlbnQpIHJldHVybiBudWxsXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyeVR5cGUgPT0gJ2JvdW5kcycgJiYgdGhpcy5kcmF3bkJvdW5kcyA/IHRoaXMuZHJhd25Cb3VuZHMgOiB0aGlzLm1hcEJvdW5kc1xuICAgICAgICB9LFxuICAgICAgICBhZGRyZXNzKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucXVlcnlUeXBlID09ICdhZGRyZXNzJyAmJiB0aGlzLmdlb2NvZGVkQWRkcmVzcyAmJiB0aGlzLmdlb2NvZGVkQWRkcmVzcy5vc21faWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRBZGRyZXNzXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gYnVpbGRzIHRoZSBnZW9ncmFwaGljYWwgcGFydCBvZiB0aGUgb3ZlcnBhc3MgcXVlcnlcbiAgICAgICAgb3ZlcnBhc3NRdWVyeSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJlYVJlZiA9IDEgKiB0aGlzLmdlb2NvZGVkQWRkcmVzcy5vc21faWQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2VvY29kZWRBZGRyZXNzLm9zbV90eXBlID09IFwid2F5XCIpIGFyZWFSZWYgKz0gMjQwMDAwMDAwMDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZW9jb2RlZEFkZHJlc3Mub3NtX3R5cGUgPT0gXCJyZWxhdGlvblwiKSBhcmVhUmVmICs9IDM2MDAwMDAwMDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAoYXJlYToke2FyZWFSZWZ9KWBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGIgPSB0aGlzLmJvdW5kc1xuICAgICAgICAgICAgICAgIHJldHVybiBgKCR7Yi5nZXRTb3V0aCgpfSwke2IuZ2V0V2VzdCgpfSwke2IuZ2V0Tm9ydGgoKX0sJHtiLmdldEVhc3QoKX0pYFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICAvLyBJbml0IG1hcFxuICAgICAgICB0aGlzLm1hcCA9IEwubWFwKHRoaXMuJHJlZnMubWFwLCB7ZWRpdGFibGU6IHRydWV9KTtcbiAgICAgICAgTC50aWxlTGF5ZXIodGhpcy50aWxlTGF5ZXIpLmFkZFRvKHRoaXMubWFwKTsgICAgICAgICBcbiAgICAgICAgdGhpcy5tYXAub24oJ21vdmVlbmQnLCAoKSA9PiB0aGlzLm1hcEJvdW5kcyA9IHRoaXMubWFwLmdldEJvdW5kcygpKVxuICAgICAgICB0aGlzLmN1cnJlbnRMYXllcnMgPSBuZXcgTC5sYXllckdyb3VwKClcbiAgICAgICAgdGhpcy5jdXJyZW50TGF5ZXJzLmFkZFRvKHRoaXMubWFwKVxuXG4gICAgICAgIC8vIEluaXRpYWxpc2Ugc3RhdGUgZnJvbSBzYXZlZCBvc21RdWVyeU9iamVjdFxuICAgICAgICBsZXQgaW5pdGlhbEJvdW5kcyA9IHRoaXMuZGVmYXVsdEJvdW5kc1xuICAgICAgICBpZiAodGhpcy5vc21RdWVyeU9iamVjdCAmJiB0aGlzLm9zbVF1ZXJ5T2JqZWN0LmFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRBZGRyZXNzID0gdGhpcy5vc21RdWVyeU9iamVjdC5hZGRyZXNzXG4gICAgICAgICAgICB0aGlzLmdlb2NvZGVBZGRyZXNzKCkgICBcbiAgICAgICAgICAgIHRoaXMucXVlcnlUeXBlID0gJ2FkZHJlc3MnICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vc21RdWVyeU9iamVjdCAmJiB0aGlzLm9zbVF1ZXJ5T2JqZWN0LmJvdW5kcykge1xuICAgICAgICAgICAgaW5pdGlhbEJvdW5kcyA9IG5ldyBMLmxhdExuZ0JvdW5kcyh0aGlzLm9zbVF1ZXJ5T2JqZWN0LmJvdW5kcylcbiAgICAgICAgICAgIHRoaXMuZHJhd25Cb3VuZHMgPSBpbml0aWFsQm91bmRzXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5VHlwZSA9ICdib3VuZHMnIFxuICAgICAgICB9ICAgXG5cbiAgICAgICAgLy8gSW5pdCBtYXAgcG9zaXRpb25cbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGluaXRpYWxCb3VuZHMpOyAgICAgICAgXG4gICAgICAgIHRoaXMubWFwQm91bmRzID0gdGhpcy5tYXAuZ2V0Qm91bmRzKClcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIC8vIFdoZW4gc3dpdGNoaW5nIHF1ZXJ5IHR5cGUgd2UgbmVlZCB0byB0dXJuIG9uL29mZiBsZWFmbGV0IHNoYWRlcyBwbHVnaW5cbiAgICAgICAgcXVlcnlUeXBlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWFwU2hhZGVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBTaGFkZXMub25SZW1vdmUodGhpcy5tYXApIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWtvbmcwMjE2L2xlYWZsZXQtc2hhZGVzL2lzc3Vlcy8zXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBTaGFkZXMgPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMYXllcnMuY2xlYXJMYXllcnMoKVxuICAgICAgICAgICAgaWYgKHRoaXMucXVlcnlUeXBlID09ICdib3VuZHMnKSB7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHJhd25Cb3VuZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IEwucmVjdGFuZ2xlKHRoaXMuZHJhd25Cb3VuZHMpOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExheWVycy5hZGRMYXllcihyZWN0KVxuICAgICAgICAgICAgICAgICAgICByZWN0LmVuYWJsZUVkaXQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMYXllcnMuYWRkTGF5ZXIodGhpcy5tYXAuZWRpdFRvb2xzLnN0YXJ0UmVjdGFuZ2xlKCkpO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSW5pdCBzaGFkZXNcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFNoYWRlcyA9IG5ldyBMLkxlYWZsZXRTaGFkZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFNoYWRlcy5hZGRUbyh0aGlzLm1hcCk7ICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFNoYWRlcy5vbignc2hhZGVzOmJvdW5kcy1jaGFuZ2VkJywgKGV2ZW50KSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXduQm91bmRzID0gZXZlbnQuYm91bmRzICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZW9jb2RlQWRkcmVzcygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbnB1dEFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdlb2NvZGVFcnJvck1zZyA9IFwiVmV1aWxsZXogZW50cmVyIHVuZSBhZHJlc3NlXCJcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9ub21pbmF0aW0ub3BlbnN0cmVldG1hcC5vcmcvc2VhcmNoLnBocD9xPSR7dGhpcy5pbnB1dEFkZHJlc3N9JnBvbHlnb25fZ2VvanNvbj0xJmZvcm1hdD1qc29udjJgXG4gICAgICAgICAgICAkLmdldEpTT04odXJsLCByZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdHMgfHwgcmVzdWx0cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlb2NvZGVFcnJvck1zZyA9IGBBdWN1bmUgcsOpc3VsdGF0IHRyb3V2w6kgcG91ciAke3RoaXMuaW5wdXRBZGRyZXNzfWBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2VvY29kZUVycm9yTXNnID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMYXllcnMuY2xlYXJMYXllcnMoKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2VvY29kZWRBZGRyZXNzID0gcmVzdWx0c1swXVxuICAgICAgICAgICAgICAgIGxldCBsYXllciA9IEwuZ2VvSlNPTih0aGlzLmdlb2NvZGVkQWRkcmVzcy5nZW9qc29uLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBmZWF0dXJlID0+IHtjb2xvcjogJ2JsdWUnfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGF5ZXJzLmFkZExheWVyKGxheWVyKVxuICAgICAgICAgICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhsYXllci5nZXRCb3VuZHMoKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gICAgLmJvdW5kcy1waWNrZXItY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICAuYWxlcnQtZGFuZ2VyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMS41cmVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJvdW5kcy1waWNrZXItbWFwIHtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDEuNXJlbSAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5sZWFmbGV0LXBhbmUge1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgIH0gICAgXG4gICAgYS5sZWFmbGV0LWNvbnRyb2wtem9vbS1pbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzNkM2QzZDtcbiAgICB9XG4gICAgYS5sZWFmbGV0LWNvbnRyb2wtem9vbS1vdXQge1xuICAgICAgICBmb250LXNpemU6IDI1cHghIGltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6ICMzZDNkM2Q7XG4gICAgICAgIHRleHQtaW5kZW50OiAwO1xuICAgIH0gICAgXG4gICAgLmxlYWZsZXQtdG9wLCAubGVhZmxldC1ib3R0b20ge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgICA8ZGl2IGNsYXNzPVwib3NtLXF1ZXJ5LWJ1aWxkZXJcIj5cbiAgICAgICAgPGxhYmVsPkxpc3RlIGRlcyByZXF1w6p0ZXMgZGFucyBsYSBiYXNlIE9wZW5TdHJlZXRNYXA8L2xhYmVsPlxuICAgICAgICBcbiAgICAgICAgPG9zbS10YWctc2VhcmNoPjwvb3NtLXRhZy1zZWFyY2g+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJxdWVyaWVzLnB1c2goW3trZXk6ICcnLCBvcGVyYXRvcjogJz0nLCB2YWx1ZTogJyd9XSlcIj5cbiAgICAgICAgICAgIE91IGFqb3V0ZXIgdW5lIHJlcXXDqnRlIG1hbnVlbGxlbWVudFxuICAgICAgICA8L2J1dHRvbj4gXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnMtY2FsbG91dFwiIHYtZm9yPVwiKHF1ZXJ5LCBxdWVyeUluZGV4KSBpbiBxdWVyaWVzXCIgOmtleT1cInF1ZXJ5SW5kZXhcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cInF1ZXJpZXMuc3BsaWNlKHF1ZXJ5SW5kZXgsMSlcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCByZW1vdmUtcXVlcnkgYnRuLWljb25cIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKGNvbmRpdGlvbiwgY29uZGl0aW9uSW5kZXgpIGluIHF1ZXJ5XCIgY2xhc3M9XCJjb25kaXRpb24tY29udGFpbmVyXCIgOmtleT1cImNvbmRpdGlvbkluZGV4XCI+XG4gICAgICAgICAgICAgICAgPG9zbS1jb25kaXRpb24gOmNvbmRpdGlvbj1cImNvbmRpdGlvblwiIDprZXk9XCInUXVlcnknICsgcXVlcnlJbmRleFwiPjwvb3NtLWNvbmRpdGlvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJxdWVyeS5zcGxpY2UoY29uZGl0aW9uSW5kZXgsMSlcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4taWNvbiByZW1vdmUtY29uZGl0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2ggcmVtb3ZlLWNvbmRpdGlvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWFkZC1jb25kaXRpb24gYnRuLXNtXCIgXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInF1ZXJ5LnB1c2goe2tleTogJycsIG9wZXJhdG9yOiAnPScsIHZhbHVlOiAnJ30pXCI+QWpvdXRlciB1bmUgY29uZGl0aW9uPC9idXR0b24+ICAgICAgICBcbiAgICAgICAgPC9kaXY+ICAgICAgICAgIFxuXG4gICAgICAgIDxib3VuZHMtcGlja2VyIHJlZj1cImJvdW5kc1BpY2tlclwiIDpvc20tcXVlcnktb2JqZWN0PVwib3NtUXVlcnlPYmplY3RcIiA6dGlsZUxheWVyPVwidGlsZUxheWVyXCIgOmRlZmF1bHQtYm91bmRzPVwiZGVmYXVsdEJvdW5kc1wiPjwvYm91bmRzLXBpY2tlcj5cblxuICAgICAgICA8bGFiZWwgdi1zaG93PVwib3ZlcnBhc3NRdWVyeVwiPkNvZGUgYXV0b21hdGlxdWVtZW50IGfDqW7DqXLDqSBwb3VyIGxhIHJlcXXDqnRlIE9wZW5TdHJlZXRNYXAgKHZpYSBPdmVyUGFzcyk8L2xhYmVsPlxuICAgICAgICA8cHJlIHYtc2hvdz1cIm92ZXJwYXNzUXVlcnlcIj57eyBvdmVycGFzc1F1ZXJ5IH19PC9wcmU+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE9zbUNvbmRpdGlvbiBmcm9tIFwiLi9Pc21RdWVyeUJ1aWxkZXJDb25kaXRpb25cIlxuaW1wb3J0IE9zbVRhZ1NlYXJjaCBmcm9tIFwiLi9Pc21RdWVyeUJ1aWxkZXJUYWdTZWFyY2hcIlxuaW1wb3J0IEJvdW5kc1BpY2tlciBmcm9tIFwiLi9Cb3VuZHNQaWNrZXJcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsgJ29zbVF1ZXJ5T2JqZWN0JywgJ3RpbGVMYXllcicsICdkZWZhdWx0Qm91bmRzJyBdLFxuICAgIGNvbXBvbmVudHM6IHsgT3NtQ29uZGl0aW9uLCBPc21UYWdTZWFyY2gsIEJvdW5kc1BpY2tlciB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBxdWVyaWVzOiBbXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICAvLyBUcmFuc2Zvcm0gcXVlcmllcyBhcnJheSBpbnRvIGFuIE92ZXJwYXNzIHF1ZXJ5XG4gICAgICAgIG92ZXJwYXNzUXVlcnkoKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJydcbiAgICAgICAgICAgIGZvcihsZXQgcXVlcnkgb2YgdGhpcy5xdWVyaWVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gJydcbiAgICAgICAgICAgICAgICBmb3IobGV0IGNvbmRpdGlvbiBvZiBxdWVyeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uLm9wZXJhdG9yID09IFwiXCIgfHwgY29uZGl0aW9uLm9wZXJhdG9yID09IFwiIVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0cmluZyArPSBgWyR7Y29uZGl0aW9uLm9wZXJhdG9yfVwiJHtjb25kaXRpb24ua2V5fVwiXWBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb25kaXRpb24udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNvbmRpdGlvbi52YWx1ZS5yZXBsYWNlKC8sL2csICd8JykgLy8gdHJhbnNmb3JtIG11bHRpIGlucHV0IGludG8gcmVnIGV4cHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGBbXCIke2NvbmRpdGlvbi5rZXl9XCIke2NvbmRpdGlvbi5vcGVyYXRvcn1cIiR7dmFsdWV9XCJdYFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IHRoaXMuJHJlZnMuYm91bmRzUGlja2VyLm92ZXJwYXNzUXVlcnlcbiAgICAgICAgICAgICAgICBpZiAocXVlcnkgIT0gJycpIHJlc3VsdCArPSBgbm9kZSR7cXVlcnlTdHJpbmd9O3dheSR7cXVlcnlTdHJpbmd9O3JlbGF0aW9uJHtxdWVyeVN0cmluZ307YCAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9LFxuICAgICAgICBvdmVycGFzc0FwaVVybCgpIHtcbiAgICAgICAgICAgIC8vIG91dCBtZXRhIHByb3ZpZGUgZXh0cmEgZGF0YSwgb3V0IGNlbnRlciBwcm92aWRlIGNlbnRlciBvZiB3YXkgb3IgcmVsYXRpb25cbiAgICAgICAgICAgIHJldHVybiBgaHR0cHM6Ly9vdmVycGFzcy1hcGkuZGUvYXBpL2ludGVycHJldGVyP2RhdGE9W291dDpqc29uXVt0aW1lb3V0OjEwMDBdOygke3RoaXMub3ZlcnBhc3NRdWVyeX0pO291dCUyMG1ldGElMjBjZW50ZXI7YFxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBvdmVycGFzc0FwaVVybCh1cmwpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29zbS11cmwtY2hhbmdlZCcsIHVybClcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTpvc21RdWVyeU9iamVjdCcsIHtcbiAgICAgICAgICAgICAgICBxdWVyaWVzOiB0aGlzLnF1ZXJpZXMsIFxuICAgICAgICAgICAgICAgIGJvdW5kczogW3RoaXMuJHJlZnMuYm91bmRzUGlja2VyLmJvdW5kcy5nZXRTb3V0aFdlc3QoKSwgdGhpcy4kcmVmcy5ib3VuZHNQaWNrZXIuYm91bmRzLmdldE5vcnRoRWFzdCgpXSwgXG4gICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy4kcmVmcy5ib3VuZHNQaWNrZXIuYWRkcmVzc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMub3NtUXVlcnlPYmplY3QgJiYgdGhpcy5vc21RdWVyeU9iamVjdC5xdWVyaWVzKVxuICAgICAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5vc21RdWVyeU9iamVjdC5xdWVyaWVzXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbiAgICAuY29uZGl0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5idG4taWNvbiB7IHBhZGRpbmc6IDRweCAxMHB4O31cbiAgICB9XG4gICAgLmNvbmRpdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5idG4uYnRuLWljb24gaSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLnJlbW92ZS1xdWVyeSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgfVxuICAgIC5idG4tYWRkLWNvbmRpdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbmRpdGlvblwiPlxuICAgICAgICA8b3NtLXdpa2ktbGluayA6Y29uZGl0aW9uPVwiY29uZGl0aW9uXCIgcmVmPVwid2lraUxpbmtcIj48L29zbS13aWtpLWxpbms+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZWY9XCJpbnB1dEtleVwiIHYtbW9kZWw9XCJjb25kaXRpb24ua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaGVyY2hlciB1bmUgY2zDqVwiLz5cbiAgICAgICAgXG4gICAgICAgIDxzZWxlY3QgZGF0YS1zb25hdGEtc2VsZWN0Mj1cImZhbHNlXCIgY2xhc3M9XCJjb25kaXRpb24tb3BlcmF0b3IgZm9ybS1jb250cm9sXCIgcmVmPVwic2VsZWN0T3BlcmF0b3JcIiBcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY29uZGl0aW9uLm9wZXJhdG9yXCIgcGxhY2Vob2xkZXI9XCJDb25kaXRpb24uLi5cIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5FeGlzdGU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIhXCI+TidleGlzdGUgcGFzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiPVwiPkVzdCDDqWdhbCDDoDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiE9XCI+RGlmZsOpcmVudCBkZTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIn5cIj5Fc3QgbCd1bmUgZGVzIHZhbGV1cnM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIhflwiPk4nZXN0IGF1Y3VuZSBkZXMgdmFsZXVyczwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiY29uZGl0aW9uLnZhbHVlXCIgcmVmPVwiaW5wdXRWYWx1ZVwiXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XCJbJycsICchJ10uaW5jbHVkZXMoY29uZGl0aW9uLm9wZXJhdG9yKVwiIC8+ICAgICAgICAgICAgXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE9zbVdpa2lMaW5rIGZyb20gXCIuL09zbXF1ZXJ5QnVpbGRlcldpa2lMaW5rXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbJ2NvbmRpdGlvbiddLFxuICAgIGNvbXBvbmVudHM6IHsgT3NtV2lraUxpbmsgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJldmFsZW50VmFsdWVzOiBbXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBvcGVyYXRvcigpIHsgcmV0dXJuIHRoaXMuY29uZGl0aW9uLm9wZXJhdG9yIH0sXG4gICAgICAgIGlzTXVsdGlwbGVDb25kaXRpb24oKSB7IHJldHVybiB0aGlzLm9wZXJhdG9yICYmIHRoaXMub3BlcmF0b3IuaW5jbHVkZXMoJ34nKX1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbi5rZXkpIHtcbiAgICAgICAgICAgIC8vIGdldCBwcmV2YWxlbnRWYWx1ZXMgdXNpbmcgZmlyc3QgcmVzdWx0LCBpLmUuIHBlcmZlY3QgbWF0Y2hcbiAgICAgICAgICAgICQuZ2V0SlNPTih0aGlzLmtleUluZm9VcmwodGhpcy5jb25kaXRpb24ua2V5KSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZhbGVudFZhbHVlcyA9IHJlc3BvbnNlLmRhdGFbMF0ucHJldmFsZW50X3ZhbHVlc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRJbnB1dFZhbHVlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbml0U2VhcmNoS2V5SW5wdXQoKVxuICAgICAgICB9ICAgICAgICBcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIG9wZXJhdG9yKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICAgICAgICBsZXQgbmV3VmFsSXNBcnJheSA9IG5ld1ZhbCAmJiBuZXdWYWwuaW5jbHVkZXMoJ34nKVxuICAgICAgICAgICAgbGV0IG9sZFZhbElzQXJyYXkgPSBvbGRWYWwgJiYgb2xkVmFsLmluY2x1ZGVzKCd+JylcbiAgICAgICAgICAgIGlmIChuZXdWYWxJc0FycmF5ICE9IG9sZFZhbElzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbElzQXJyYXkgJiYgdGhpcy5jb25kaXRpb24udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtIGFycmF5IHZhbHVlIHRvIHNpbmdsZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvbi52YWx1ZSA9IHRoaXMuY29uZGl0aW9uLnZhbHVlLnNwbGl0KCcsJylbMF1cbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLiRyZWZzLmlucHV0VmFsdWUpLnZhbCh0aGlzLmNvbmRpdGlvbi52YWx1ZSkudHJpZ2dlcignY2hhbmdlJykgLy8gbmVlZGVkIGZvciBzZWxlY3QyIHRvIGJlIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0SW5wdXRWYWx1ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAga2V5SW5mb1VybChrZXkpIHsgXG4gICAgICAgICAgICByZXR1cm4gYGh0dHBzOi8vdGFnaW5mby5vcGVuc3RyZWV0bWFwLm9yZy9hcGkvNC9rZXlzL2FsbD9xdWVyeT0ke2tleX0maW5jbHVkZT1wcmV2YWxlbnRfdmFsdWVzJnNvcnRuYW1lPWNvdW50X2FsbCZzb3J0b3JkZXI9ZGVzYyZwYWdlPTEmcnA9MjAmcXR5cGU9a2V5JmZvcm1hdD1qc29uX3ByZXR0eWBcbiAgICAgICAgfSxcbiAgICAgICAgaW5pdFNlYXJjaEtleUlucHV0KCkge1xuICAgICAgICAgICAgJCh0aGlzLiRyZWZzLmlucHV0S2V5KS5zZWxlY3QyKHtcbiAgICAgICAgICAgICAgICBtaW5pbXVtSW5wdXRMZW5ndGg6IDIsXG4gICAgICAgICAgICAgICAgYWpheDoge1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICh0ZXJtKSA9PiB0aGlzLmtleUluZm9VcmwodGVybSksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsICAgXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHsgcmVzdWx0czogcmVzcG9uc2UuZGF0YSB9OyB9IFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaWQ6IChpdGVtKSA9PiBpdGVtLmtleSwgXG4gICAgICAgICAgICAgICAgZm9ybWF0UmVzdWx0OiAoaXRlbSkgPT4gaXRlbS5rZXksXG4gICAgICAgICAgICAgICAgZm9ybWF0U2VsZWN0aW9uOiAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vbktleVNlbGVjdGVkRnJvbVNlYXJjaFJlc3VsdHMoaXRlbSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBvbktleVNlbGVjdGVkRnJvbVNlYXJjaFJlc3VsdHMoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2YWxlbnRWYWx1ZXMgPSBpdGVtLnByZXZhbGVudF92YWx1ZXMgICBcbiAgICAgICAgICAgIHRoaXMuaW5pdElucHV0VmFsdWUoKSAgICAgXG4gICAgICAgICAgICB0aGlzLmNvbmRpdGlvbi5rZXkgPSBpdGVtLmtleSAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ua2V5XG4gICAgICAgIH0sXG4gICAgICAgIGluaXRJbnB1dFZhbHVlKCkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnByZXZhbGVudFZhbHVlc1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZUNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiB0aGlzLmNvbmRpdGlvbi52YWx1ZS5zcGxpdCgnLCcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS51bnNoaWZ0KHt2YWx1ZTogdmFsdWV9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudW5zaGlmdCh7dmFsdWU6IHRoaXMuY29uZGl0aW9uLnZhbHVlfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGb3JtYXQgdG8gc2VsZWN0MiBzdHlsZVxuICAgICAgICAgICAgZGF0YSA9IGRhdGEubWFwKCh2KSA9PiB7IHJldHVybiB7aWQ6IHYudmFsdWUsIHRleHQ6IHYudmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2LnZhbHVlLnNsaWNlKDEpfSB9KVxuICAgICAgICAgICAgLy8gSW5pdCBWYWx1ZSBJbnB1dCBmcm9tIHByZXZhbGVudCB2YWx1ZXNcbiAgICAgICAgICAgICQodGhpcy4kcmVmcy5pbnB1dFZhbHVlKS5zZWxlY3QyKHtcbiAgICAgICAgICAgICAgICBjcmVhdGVTZWFyY2hDaG9pY2U6ZnVuY3Rpb24odGVybSwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJChkYXRhKS5maWx0ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0LmxvY2FsZUNvbXBhcmUodGVybSk9PT0wO1xuICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGg9PT0wKVxuICAgICAgICAgICAgICAgICAgICB7cmV0dXJuIHtpZDp0ZXJtLCB0ZXh0OnRlcm19O31cbiAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogdGhpcy5pc011bHRpcGxlQ29uZGl0aW9uLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgIH0pLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25kaXRpb24udmFsdWUgPSAkKHRoaXMuJHJlZnMuaW5wdXRWYWx1ZSkudmFsKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPHA+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHRhZy1zZWFyY2hcIiBcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlIHJhcGlkZSBkYW5zIE9wZW5TdGVldE1hcCBlbiBBbmdsYWlzIChyZXN0YXVyYW50LCBvcmdhbmljLCBzZWNvbmQgaGFuZC4uLilcIi8+XG4gICAgPC9wPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtb3VudGVkKCkge1xuICAgICAgICAkKCcudGFnLXNlYXJjaCcpLnNlbGVjdDIoe1xuICAgICAgICAgICAgbWluaW11bUlucHV0TGVuZ3RoOiAyLFxuICAgICAgICAgICAgYWpheDoge1xuICAgICAgICAgICAgICAgIHVybDogKHRlcm0pID0+IGBodHRwczovL3RhZ2ZpbmRlci5oZXJva3VhcHAuY29tL2FwaS9zZWFyY2g/cXVlcnk9JHt0ZXJtfWAsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgICAgIFxuICAgICAgICAgICAgICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4geyByZXN1bHRzOiBkYXRhIH07IH0gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWQ6IChpdGVtKSA9PiBpdGVtLnN1YmplY3QsIFxuICAgICAgICAgICAgZm9ybWF0UmVzdWx0OiAoaXRlbSkgPT4gYDxiPiR7aXRlbS5wcmVmTGFiZWx9PC9iPiA6ICR7aXRlbS5zY29wZU5vdGUuZW59YCxcbiAgICAgICAgICAgIGZvcm1hdFNlbGVjdGlvbjogKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcXVlcnkgPSBbXVxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzVGFnKSBxdWVyeS5wdXNoKHtrZXk6IGl0ZW0ucHJlZkxhYmVsLnNwbGl0KCc9JylbMF0sIG9wZXJhdG9yOiAnPScsIHZhbHVlOiBpdGVtLnByZWZMYWJlbC5zcGxpdCgnPScpWzFdfSlcbiAgICAgICAgICAgICAgICBlbHNlIHF1ZXJ5LnB1c2goe2tleTogaXRlbS5wcmVmTGFiZWwsIG9wZXJhdG9yOiAnPScsIHZhbHVlOiAnJ30pXG4gICAgICAgICAgICAgICAgbGV0IGNvbWJpbmVzVGFncyA9IHt9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29tYmluZSBvZiBpdGVtLmNvbWJpbmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21iaW5lS2V5ID0gY29tYmluZS5sYWJlbC5zcGxpdCgnPScpWzBdXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21iaW5lVmFsdWUgPSBjb21iaW5lLmxhYmVsLnNwbGl0KCc9JylbMV1cbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIHNvbWUga2V5cyBub3QgdXNlZCBmb3IgZmlsdGVyaW5nXG4gICAgICAgICAgICAgICAgICAgIGlmIChbJ25hbWUnLCAnd2Vic2l0ZScsICd3aWtpcGVkaWEnLCAnb3BlbmluZ19ob3VycyddLmluY2x1ZGVzKGNvbWJpbmVLZXkpKSBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbWJpbmVzVGFnc1tjb21iaW5lS2V5XSkgY29tYmluZXNUYWdzW2NvbWJpbmVLZXldICs9IGAsJHtjb21iaW5lVmFsdWV9YFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbWJpbmVzVGFnc1tjb21iaW5lS2V5XSA9IGNvbWJpbmVWYWx1ZSAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGNvbWJpbmVzVGFncykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBjb21iaW5lc1RhZ3Nba2V5XVxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gJyonKSBxdWVyeS5wdXNoKHtrZXk6IGtleSwgb3BlcmF0b3I6ICcnLCB2YWx1ZTogJyd9KVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHF1ZXJ5LnB1c2goe2tleToga2V5LCBvcGVyYXRvcjogdmFsdWUuaW5jbHVkZXMoJywnKSA/ICd+JyA6ICc9JywgdmFsdWU6IHZhbHVlfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LnF1ZXJpZXMucHVzaChxdWVyeSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfSwgICAgICAgICBcbiAgICAgICAgfSk7ICAgICBcbiAgICB9XG59XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGEgOmhyZWY9XCJ1cmxcIiB2LWlmPVwiY29uZGl0aW9uLmtleVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1pY29uXCIgXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiA6dGl0bGU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1leHRlcm5hbC1saW5rLXNxdWFyZSBmYXMgZmEtZXh0ZXJuYWwtbGluay1zcXVhcmUtYWx0XCI+PC9pPlxuICAgIDwvYT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsnY29uZGl0aW9uJ10sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgaXNUYWcoKSB7IFxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uLmtleSAmJiAodGhpcy5jb25kaXRpb24ub3BlcmF0b3IgPT0gJz0nKSAmJiB0aGlzLmNvbmRpdGlvbi52YWx1ZSkgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB1cmwoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1RhZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgaHR0cHM6Ly93aWtpLm9wZW5zdHJlZXRtYXAub3JnL3dpa2kvVGFnOiR7dGhpcy50YWd9YFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYGh0dHBzOi8vd2lraS5vcGVuc3RyZWV0bWFwLm9yZy93aWtpL0tleToke3RoaXMuY29uZGl0aW9uLmtleX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRhZygpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmNvbmRpdGlvbi5rZXl9PSR7dGhpcy5jb25kaXRpb24udmFsdWV9YFxuICAgICAgICB9LFxuICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBgTGllbiB2ZXJzIGxhIGZpY2hlIFdpa2kgZGUgXCIke3RoaXMuaXNUYWcgPyB0aGlzLnRhZyA6IHRoaXMuY29uZGl0aW9uLmtleX1cImAgXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAuYnRuLmJ0bi1pY29uIGkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5idG4taWNvbiB7IHBhZGRpbmc6IDRweCAxMHB4O31cbjwvc3R5bGU+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdW5kcy1waWNrZXItY29udGFpbmVyXCIgfSwgW1xuICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlpvbmUgR8Opb2dyYXBoaXF1ZSBkZSBsYSByZXF1ZXRlXCIpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYnRuXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnF1ZXJ5VHlwZSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInF1ZXJ5VHlwZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcImF1dG9cIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXNvbmF0YS1zZWxlY3QyXCI6IFwiZmFsc2VcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgX3ZtLnF1ZXJ5VHlwZSA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiYWRkcmVzc1wiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJDaGVyY2hlciBwYXIgYWRyZXNzZVwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJib3VuZHNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiRGVzc2luZXIgdW4gcmVjdGFuZ2xlIHN1ciBsYSBjYXJ0ZVwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmlucHV0QWRkcmVzcyxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaW5wdXRBZGRyZXNzXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlZjogXCJpbnB1dEFkZHJlc3NcIixcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgZGlzYWJsZWQ6IF92bS5xdWVyeVR5cGUgIT0gXCJhZGRyZXNzXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiVW5lIHZpbGxlLCB1bmUgcsOpZ2lvbiwgdW4gcGF5cy4uLlwiXG4gICAgICAgIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uaW5wdXRBZGRyZXNzIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAga2V5cHJlc3M6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIilcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBfdm0uZ2VvY29kZUFkZHJlc3MoJGV2ZW50KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3ZtLmlucHV0QWRkcmVzcyA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWJ0blwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIGRpc2FibGVkOiBfdm0ucXVlcnlUeXBlICE9IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmdlb2NvZGVBZGRyZXNzIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgQ2hlcmNoZXJcXG4gICAgICAgICAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmdlb2NvZGVFcnJvck1zZyxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZ2VvY29kZUVycm9yTXNnXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXG4gICAgICB9LFxuICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmdlb2NvZGVFcnJvck1zZykpXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHJlZjogXCJtYXBcIiwgc3RhdGljQ2xhc3M6IFwiYm91bmRzLXBpY2tlci1tYXBcIiB9KVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm9zbS1xdWVyeS1idWlsZGVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJMaXN0ZSBkZXMgcmVxdcOqdGVzIGRhbnMgbGEgYmFzZSBPcGVuU3RyZWV0TWFwXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJvc20tdGFnLXNlYXJjaFwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnF1ZXJpZXMucHVzaChbeyBrZXk6IFwiXCIsIG9wZXJhdG9yOiBcIj1cIiwgdmFsdWU6IFwiXCIgfV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBPdSBham91dGVyIHVuZSByZXF1w6p0ZSBtYW51ZWxsZW1lbnRcXG4gICAgXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLnF1ZXJpZXMsIGZ1bmN0aW9uKHF1ZXJ5LCBxdWVyeUluZGV4KSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsga2V5OiBxdWVyeUluZGV4LCBzdGF0aWNDbGFzczogXCJicy1jYWxsb3V0XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCByZW1vdmUtcXVlcnkgYnRuLWljb25cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5xdWVyaWVzLnNwbGljZShxdWVyeUluZGV4LCAxKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoXCIgfSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbChxdWVyeSwgZnVuY3Rpb24oY29uZGl0aW9uLCBjb25kaXRpb25JbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IGtleTogY29uZGl0aW9uSW5kZXgsIHN0YXRpY0NsYXNzOiBcImNvbmRpdGlvbi1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwib3NtLWNvbmRpdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJRdWVyeVwiICsgcXVlcnlJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29uZGl0aW9uOiBjb25kaXRpb24gfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLWljb24gcmVtb3ZlLWNvbmRpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnkuc3BsaWNlKGNvbmRpdGlvbkluZGV4LCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoIHJlbW92ZS1jb25kaXRpb25cIiB9KV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLWFkZC1jb25kaXRpb24gYnRuLXNtXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeS5wdXNoKHsga2V5OiBcIlwiLCBvcGVyYXRvcjogXCI9XCIsIHZhbHVlOiBcIlwiIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiQWpvdXRlciB1bmUgY29uZGl0aW9uXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImJvdW5kcy1waWNrZXJcIiwge1xuICAgICAgICByZWY6IFwiYm91bmRzUGlja2VyXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJvc20tcXVlcnktb2JqZWN0XCI6IF92bS5vc21RdWVyeU9iamVjdCxcbiAgICAgICAgICB0aWxlTGF5ZXI6IF92bS50aWxlTGF5ZXIsXG4gICAgICAgICAgXCJkZWZhdWx0LWJvdW5kc1wiOiBfdm0uZGVmYXVsdEJvdW5kc1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5vdmVycGFzc1F1ZXJ5LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm92ZXJwYXNzUXVlcnlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiQ29kZSBhdXRvbWF0aXF1ZW1lbnQgZ8OpbsOpcsOpIHBvdXIgbGEgcmVxdcOqdGUgT3BlblN0cmVldE1hcCAodmlhIE92ZXJQYXNzKVwiXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInByZVwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5vdmVycGFzc1F1ZXJ5LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm92ZXJwYXNzUXVlcnlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLm92ZXJwYXNzUXVlcnkpKV1cbiAgICAgIClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvbmRpdGlvblwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJvc20td2lraS1saW5rXCIsIHtcbiAgICAgICAgcmVmOiBcIndpa2lMaW5rXCIsXG4gICAgICAgIGF0dHJzOiB7IGNvbmRpdGlvbjogX3ZtLmNvbmRpdGlvbiB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5jb25kaXRpb24ua2V5LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb25kaXRpb24ua2V5XCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlZjogXCJpbnB1dEtleVwiLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkNoZXJjaGVyIHVuZSBjbMOpXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jb25kaXRpb24ua2V5IH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNvbmRpdGlvbiwgXCJrZXlcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbmRpdGlvbi5vcGVyYXRvcixcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb25kaXRpb24ub3BlcmF0b3JcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVmOiBcInNlbGVjdE9wZXJhdG9yXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29uZGl0aW9uLW9wZXJhdG9yIGZvcm0tY29udHJvbFwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBcImRhdGEtc29uYXRhLXNlbGVjdDJcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ29uZGl0aW9uLi4uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICBfdm0uY29uZGl0aW9uLFxuICAgICAgICAgICAgICAgIFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiXCIgfSB9LCBbX3ZtLl92KFwiRXhpc3RlXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIiFcIiB9IH0sIFtfdm0uX3YoXCJOJ2V4aXN0ZSBwYXNcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiPVwiIH0gfSwgW192bS5fdihcIkVzdCDDqWdhbCDDoFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIhPVwiIH0gfSwgW192bS5fdihcIkRpZmbDqXJlbnQgZGVcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiflwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiRXN0IGwndW5lIGRlcyB2YWxldXJzXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIiF+XCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJOJ2VzdCBhdWN1bmUgZGVzIHZhbGV1cnNcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbmRpdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29uZGl0aW9uLnZhbHVlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlZjogXCJpbnB1dFZhbHVlXCIsXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogW1wiXCIsIFwiIVwiXS5pbmNsdWRlcyhfdm0uY29uZGl0aW9uLm9wZXJhdG9yKSB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbmRpdGlvbi52YWx1ZSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5jb25kaXRpb24sIFwidmFsdWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5fbSgwKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgdGFnLXNlYXJjaFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOlxuICAgICAgICAgICAgXCJSZWNoZXJjaGUgcmFwaWRlIGRhbnMgT3BlblN0ZWV0TWFwIGVuIEFuZ2xhaXMgKHJlc3RhdXJhbnQsIG9yZ2FuaWMsIHNlY29uZCBoYW5kLi4uKVwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5jb25kaXRpb24ua2V5XG4gICAgPyBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLWljb25cIixcbiAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0udXJsLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIHRpdGxlOiBfdm0udGl0bGUgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcImZhIGZhLWV4dGVybmFsLWxpbmstc3F1YXJlIGZhcyBmYS1leHRlcm5hbC1saW5rLXNxdWFyZS1hbHRcIlxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==