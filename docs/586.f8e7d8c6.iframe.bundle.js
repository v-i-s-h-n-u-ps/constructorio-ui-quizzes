"use strict";(self.webpackChunk_constructor_io_constructorio_ui_quizzes=self.webpackChunk_constructor_io_constructorio_ui_quizzes||[]).push([[586],{"./src/components/RedoButton/RedoSVG.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function RedoSVG(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g",{clipPath:"url(#clip0_7495_177230)",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M0.667969 2.66699V6.66699H4.66797",stroke:"#0A0B0C",strokeWidth:"1.33333",strokeLinecap:"round",strokeLinejoin:"round"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M15.332 13.333V9.33301H11.332",stroke:"#0A0B0C",strokeWidth:"1.33333",strokeLinecap:"round",strokeLinejoin:"round"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M13.6613 6.00038C13.3232 5.0449 12.7485 4.19064 11.991 3.51732C11.2334 2.844 10.3177 2.37355 9.32911 2.14988C8.34056 1.92621 7.31147 1.9566 6.33784 2.23823C5.36422 2.51985 4.4778 3.04352 3.7613 3.76038L0.667969 6.66704M15.3346 9.33371L12.2413 12.2404C11.5248 12.9572 10.6384 13.4809 9.66476 13.7625C8.69114 14.0441 7.66204 14.0745 6.67349 13.8509C5.68495 13.6272 4.76917 13.1568 4.01161 12.4834C3.25406 11.8101 2.67941 10.9559 2.3413 10.0004",stroke:"#0A0B0C",strokeWidth:"1.33333",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("clipPath",{id:"clip0_7495_177230",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]})}RedoSVG.displayName="RedoSVG";const __WEBPACK_DEFAULT_EXPORT__=RedoSVG},"./src/components/ResultCard/ResultCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ResultCard});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ResultCtaButton_ResultCtaButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ResultCtaButton/ResultCtaButton.tsx"),_CioQuiz_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/CioQuiz/context.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ResultCard(props){var _result$data,_result$data2,_result$data3,_result$data4,result=props.result,salePriceKey=props.salePriceKey,regularPriceKey=props.regularPriceKey,resultPosition=props.resultPosition,ratingCountKey=props.ratingCountKey,ratingScoreKey=props.ratingScoreKey,_useContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_CioQuiz_context__WEBPACK_IMPORTED_MODULE_2__.Z),customClickItemCallback=_useContext.customClickItemCallback,getQuizResultButtonProps=_useContext.getQuizResultButtonProps,getQuizResultLinkProps=_useContext.getQuizResultLinkProps,salePrice=salePriceKey&&(null==result||null===(_result$data=result.data)||void 0===_result$data?void 0:_result$data[salePriceKey]),regularPrice=regularPriceKey&&(null==result||null===(_result$data2=result.data)||void 0===_result$data2?void 0:_result$data2[regularPriceKey]),ratingCount=ratingCountKey&&(null==result||null===(_result$data3=result.data)||void 0===_result$data3?void 0:_result$data3[ratingCountKey]),ratingScore=ratingScoreKey&&(null==result||null===(_result$data4=result.data)||void 0===_result$data4?void 0:_result$data4[ratingScoreKey]),resultCardContent=function resultCardContent(){var _result$data5;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"cio-result-card-image",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{src:null===(_result$data5=result.data)||void 0===_result$data5?void 0:_result$data5.image_url,alt:"product"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"cio-result-card-text",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"cio-result-card-title",children:result.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"cio-result-card-details",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"cio-result-card-rating",children:[ratingScore&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{className:"cio-result-card-rating-score",children:[Array(Number(ratingScore)).fill("★"),Array(5-Number(ratingScore)).fill("☆")]}),ratingCount&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{className:"cio-result-card-rating-count",children:["(",ratingCount,")"]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"cio-result-card-prices",children:[salePrice&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{className:"cio-result-card-sale-price",children:["$",salePrice]}),regularPrice&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{className:"cio-result-card-regular-price".concat(salePrice?"--strike-through":""),children:["$",regularPrice]})]})]})]})]})};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"cio-result-card",children:[customClickItemCallback?function resultCardContentWithoutLink(){return getQuizResultButtonProps&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",_objectSpread(_objectSpread({},getQuizResultButtonProps({result,position:resultPosition,type:"button"})),{},{children:resultCardContent()}))}():function resultCardContentWithLink(){return getQuizResultLinkProps&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",_objectSpread(_objectSpread({className:"cio-result-card-anchor"},getQuizResultLinkProps({result,position:resultPosition,type:"link"})),{},{children:resultCardContent()}))}(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ResultCtaButton_ResultCtaButton__WEBPACK_IMPORTED_MODULE_1__.Z,{item:result,price:salePrice||regularPrice})]})}ResultCard.displayName="ResultCard";try{ResultCard.displayName="ResultCard",ResultCard.__docgenInfo={description:"",displayName:"ResultCard",props:{result:{defaultValue:null,description:"",name:"result",required:!0,type:{name:"Partial<QuizResultData>"}},salePriceKey:{defaultValue:null,description:"",name:"salePriceKey",required:!1,type:{name:"string"}},regularPriceKey:{defaultValue:null,description:"",name:"regularPriceKey",required:!1,type:{name:"string"}},ratingCountKey:{defaultValue:null,description:"",name:"ratingCountKey",required:!1,type:{name:"string"}},ratingScoreKey:{defaultValue:null,description:"",name:"ratingScoreKey",required:!1,type:{name:"string"}},resultPosition:{defaultValue:null,description:"",name:"resultPosition",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ResultCard/ResultCard.tsx#ResultCard"]={docgenInfo:ResultCard.__docgenInfo,name:"ResultCard",path:"src/components/ResultCard/ResultCard.tsx#ResultCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ResultContainer/ResultContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ResultContainer});var react=__webpack_require__("./node_modules/react/index.js"),RedoSVG=__webpack_require__("./src/components/RedoButton/RedoSVG.tsx"),context=__webpack_require__("./src/components/CioQuiz/context.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["redoText","disabled"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function RedoButton(props){var _props$redoText=props.redoText,redoText=void 0===_props$redoText?"Redo Quiz":_props$redoText,rest=(props.disabled,_objectWithoutProperties(props,_excluded)),getResetQuizButtonProps=(0,react.useContext)(context.Z).getResetQuizButtonProps;return getResetQuizButtonProps?(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread(_objectSpread({},rest),getResetQuizButtonProps("secondary")),{},{children:[(0,jsx_runtime.jsx)(RedoSVG.Z,{}),(0,jsx_runtime.jsx)("span",{children:redoText})]})):null}const RedoButton_RedoButton=RedoButton;try{RedoButton.displayName="RedoButton",RedoButton.__docgenInfo={description:"",displayName:"RedoButton",props:{redoText:{defaultValue:null,description:"",name:"redoText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RedoButton/RedoButton.tsx#RedoButton"]={docgenInfo:RedoButton.__docgenInfo,name:"RedoButton",path:"src/components/RedoButton/RedoButton.tsx#RedoButton"})}catch(__react_docgen_typescript_loader_error){}var ResultFilters=__webpack_require__("./src/components/ResultFilters/ResultFilters.tsx"),CTAButton=__webpack_require__("./src/components/CTAButton/CTAButton.tsx");function ZeroResults(){var getResetQuizButtonProps=(0,react.useContext)(context.Z).getResetQuizButtonProps;return(0,jsx_runtime.jsxs)("div",{className:"cio-zero-results",children:[(0,jsx_runtime.jsx)("h3",{className:"cio-zero-results-subtitle",children:"Sorry, we couldn’t find products that perfectly match your preferences."}),(0,jsx_runtime.jsx)(CTAButton.Z,{ctaText:"Redo Quiz",propsGetters:getResetQuizButtonProps})]})}ZeroResults.displayName="ZeroResults";const ZeroResults_ZeroResults=ZeroResults;var Results=__webpack_require__("./src/components/Results/Results.tsx");function ResultContainer(props){var _state$quiz$results,_state$quiz$results$r,_state$quiz$results$r2,options=props.options,resultCardSalePriceKey=options.resultCardSalePriceKey,resultCardRegularPriceKey=options.resultCardRegularPriceKey,resultCardRatingCountKey=options.resultCardRatingCountKey,resultCardRatingScoreKey=options.resultCardRatingScoreKey,state=(0,react.useContext)(context.Z).state,zeroResults=!(null!=state&&null!==(_state$quiz$results=state.quiz.results)&&void 0!==_state$quiz$results&&null!==(_state$quiz$results$r=_state$quiz$results.response)&&void 0!==_state$quiz$results$r&&null!==(_state$quiz$results$r2=_state$quiz$results$r.results)&&void 0!==_state$quiz$results$r2&&_state$quiz$results$r2.length),resultsTitle=zeroResults?"":"Here are your results";return null!=state&&state.quiz.results?(0,jsx_runtime.jsxs)("div",{className:"cio-results-container",children:[(0,jsx_runtime.jsx)("h1",{className:"cio-results-title",children:resultsTitle}),(0,jsx_runtime.jsxs)("div",{className:"cio-results-filter-and-redo-container",children:[(0,jsx_runtime.jsx)(ResultFilters.Z,{hasNoResults:zeroResults}),(0,jsx_runtime.jsx)(RedoButton_RedoButton,{})]}),!zeroResults&&(0,jsx_runtime.jsx)(Results.Z,{resultCardSalePriceKey,resultCardRegularPriceKey,resultCardRatingCountKey,resultCardRatingScoreKey}),zeroResults&&(0,jsx_runtime.jsx)(ZeroResults_ZeroResults,{})]}):(0,jsx_runtime.jsx)("div",{children:"Loading"})}ResultContainer.displayName="ResultContainer";try{ResultContainer.displayName="ResultContainer",ResultContainer.__docgenInfo={description:"",displayName:"ResultContainer",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ResultCardProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ResultContainer/ResultContainer.tsx#ResultContainer"]={docgenInfo:ResultContainer.__docgenInfo,name:"ResultContainer",path:"src/components/ResultContainer/ResultContainer.tsx#ResultContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ResultCtaButton/ResultCtaButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ResultCtaButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_CioQuiz_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CioQuiz/context.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ResultCtaButton(props){var item=props.item,price=props.price,getAddToCartButtonProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_CioQuiz_context__WEBPACK_IMPORTED_MODULE_1__.Z).getAddToCartButtonProps;return getAddToCartButtonProps?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",_objectSpread(_objectSpread({},getAddToCartButtonProps(item,price)),{},{children:"Add to Cart"})):null}try{ResultCtaButton.displayName="ResultCtaButton",ResultCtaButton.__docgenInfo={description:"",displayName:"ResultCtaButton",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"Partial<QuizResultData>"}},price:{defaultValue:null,description:"",name:"price",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ResultCtaButton/ResultCtaButton.tsx#ResultCtaButton"]={docgenInfo:ResultCtaButton.__docgenInfo,name:"ResultCtaButton",path:"src/components/ResultCtaButton/ResultCtaButton.tsx#ResultCtaButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ResultFilters/ResultFilters.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_CioQuiz_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CioQuiz/context.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ResultFilters(_ref){var _state$quiz$selectedO,hasNoResults=_ref.hasNoResults,state=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_CioQuiz_context__WEBPACK_IMPORTED_MODULE_1__.Z).state;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"cio-results-filter-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:hasNoResults?"Your preferences":"Because you answered"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"cio-results-filter-options",children:null==state||null===(_state$quiz$selectedO=state.quiz.selectedOptionsWithAttributes)||void 0===_state$quiz$selectedO?void 0:_state$quiz$selectedO.map((function(option){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"cio-results-filter-option",children:option},option)}))})]})}ResultFilters.displayName="ResultFilters";const __WEBPACK_DEFAULT_EXPORT__=ResultFilters;try{ResultFilters.displayName="ResultFilters",ResultFilters.__docgenInfo={description:"",displayName:"ResultFilters",props:{hasNoResults:{defaultValue:null,description:"",name:"hasNoResults",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ResultFilters/ResultFilters.tsx#ResultFilters"]={docgenInfo:ResultFilters.__docgenInfo,name:"ResultFilters",path:"src/components/ResultFilters/ResultFilters.tsx#ResultFilters"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Results/Results.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_CioQuiz_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CioQuiz/context.ts"),_ResultCard_ResultCard__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ResultCard/ResultCard.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Results(props){var _state$quiz,_state$quiz$results,_state$quiz$results$r,_state$quiz$results$r2,resultCardSalePriceKey=props.resultCardSalePriceKey,resultCardRegularPriceKey=props.resultCardRegularPriceKey,resultCardRatingCountKey=props.resultCardRatingCountKey,resultCardRatingScoreKey=props.resultCardRatingScoreKey,state=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_CioQuiz_context__WEBPACK_IMPORTED_MODULE_1__.Z).state;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"cio-results",children:null==state||null===(_state$quiz=state.quiz)||void 0===_state$quiz||null===(_state$quiz$results=_state$quiz.results)||void 0===_state$quiz$results||null===(_state$quiz$results$r=_state$quiz$results.response)||void 0===_state$quiz$results$r||null===(_state$quiz$results$r2=_state$quiz$results$r.results)||void 0===_state$quiz$results$r2?void 0:_state$quiz$results$r2.map((function(result,index){var _result$data;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ResultCard_ResultCard__WEBPACK_IMPORTED_MODULE_2__.Z,{result,salePriceKey:resultCardSalePriceKey,regularPriceKey:resultCardRegularPriceKey,ratingCountKey:resultCardRatingCountKey,ratingScoreKey:resultCardRatingScoreKey,resultPosition:index+1},null===(_result$data=result.data)||void 0===_result$data?void 0:_result$data.id)}))})}Results.displayName="Results";const __WEBPACK_DEFAULT_EXPORT__=Results;try{Results.displayName="Results",Results.__docgenInfo={description:"",displayName:"Results",props:{resultCardSalePriceKey:{defaultValue:null,description:"",name:"resultCardSalePriceKey",required:!1,type:{name:"string"}},resultCardRegularPriceKey:{defaultValue:null,description:"",name:"resultCardRegularPriceKey",required:!1,type:{name:"string"}},resultCardRatingCountKey:{defaultValue:null,description:"",name:"resultCardRatingCountKey",required:!1,type:{name:"string"}},resultCardRatingScoreKey:{defaultValue:null,description:"",name:"resultCardRatingScoreKey",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Results/Results.tsx#Results"]={docgenInfo:Results.__docgenInfo,name:"Results",path:"src/components/Results/Results.tsx#Results"})}catch(__react_docgen_typescript_loader_error){}}}]);