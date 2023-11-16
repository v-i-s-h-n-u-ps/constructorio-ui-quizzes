/*! For license information please see stories-Quiz-Component-QuestionTypes-MultipleSelectQuestion-stories.5a554430.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_constructor_io_constructorio_ui_quizzes=self.webpackChunk_constructor_io_constructorio_ui_quizzes||[]).push([[687],{"./src/stories/Quiz/Component/QuestionTypes/MultipleSelectQuestion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithImages:()=>WithImages,WithoutImages:()=>WithoutImages,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _WithImages$parameter,_WithImages$parameter2,_WithoutImages$parame,_WithoutImages$parame2,_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/CioQuiz/actions.ts"),_components_SelectTypeQuestion_SelectTypeQuestion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/SelectTypeQuestion/SelectTypeQuestion.tsx"),_tests_mocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Quiz/tests/mocks.tsx"),_QuestionTypeDecorator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/Quiz/Component/QuestionTypes/QuestionTypeDecorator.tsx");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var multipleSelectQuestionWithImages=_objectSpread(_objectSpread({},(0,_tests_mocks__WEBPACK_IMPORTED_MODULE_2__.RK)(_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_0__.L.MultipleSelect)),{},{options:_tests_mocks__WEBPACK_IMPORTED_MODULE_2__.CT}),multipleSelectQuestionWithoutImages=_objectSpread(_objectSpread({},(0,_tests_mocks__WEBPACK_IMPORTED_MODULE_2__.RW)(_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_0__.L.MultipleSelect)),{},{options:_tests_mocks__WEBPACK_IMPORTED_MODULE_2__.nx});const __WEBPACK_DEFAULT_EXPORT__={title:"Quiz/Component/Questions/MultipleSelectQuestion",component:_components_SelectTypeQuestion_SelectTypeQuestion__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{}};var WithImages={decorators:[function(story){return(0,_QuestionTypeDecorator__WEBPACK_IMPORTED_MODULE_3__.Z)(story,[multipleSelectQuestionWithImages])}]},WithoutImages={decorators:[function(story){return(0,_QuestionTypeDecorator__WEBPACK_IMPORTED_MODULE_3__.Z)(story,[multipleSelectQuestionWithoutImages])}]};WithImages.parameters=_objectSpread(_objectSpread({},WithImages.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithImages$parameter=WithImages.parameters)||void 0===_WithImages$parameter?void 0:_WithImages$parameter.docs),{},{source:_objectSpread({originalSource:"{\n  decorators: [story => QuestionTypeDecorator(story, [(multipleSelectQuestionWithImages as SelectQuestion)])]\n}"},null===(_WithImages$parameter2=WithImages.parameters)||void 0===_WithImages$parameter2||null===(_WithImages$parameter2=_WithImages$parameter2.docs)||void 0===_WithImages$parameter2?void 0:_WithImages$parameter2.source)})}),WithoutImages.parameters=_objectSpread(_objectSpread({},WithoutImages.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithoutImages$parame=WithoutImages.parameters)||void 0===_WithoutImages$parame?void 0:_WithoutImages$parame.docs),{},{source:_objectSpread({originalSource:"{\n  decorators: [story => QuestionTypeDecorator(story, [(multipleSelectQuestionWithoutImages as SelectQuestion)])]\n}"},null===(_WithoutImages$parame2=WithoutImages.parameters)||void 0===_WithoutImages$parame2||null===(_WithoutImages$parame2=_WithoutImages$parame2.docs)||void 0===_WithoutImages$parame2?void 0:_WithoutImages$parame2.source)})});var __namedExportsOrder=["WithImages","WithoutImages"]},"./src/components/QuestionDescription/QuestionDescription.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function QuestionDescription(props){var description=props.description;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"cio-question-description",children:description})}QuestionDescription.displayName="QuestionDescription";const __WEBPACK_DEFAULT_EXPORT__=QuestionDescription;try{QuestionDescription.displayName="QuestionDescription",QuestionDescription.__docgenInfo={description:"",displayName:"QuestionDescription",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuestionDescription/QuestionDescription.tsx#QuestionDescription"]={docgenInfo:QuestionDescription.__docgenInfo,name:"QuestionDescription",path:"src/components/QuestionDescription/QuestionDescription.tsx#QuestionDescription"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/QuestionTitle/QuestionTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function QuestionTitle(props){var title=props.title;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1",{className:"cio-question-title",children:title})}QuestionTitle.displayName="QuestionTitle";const __WEBPACK_DEFAULT_EXPORT__=QuestionTitle;try{QuestionTitle.displayName="QuestionTitle",QuestionTitle.__docgenInfo={description:"",displayName:"QuestionTitle",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuestionTitle/QuestionTitle.tsx#QuestionTitle"]={docgenInfo:QuestionTitle.__docgenInfo,name:"QuestionTitle",path:"src/components/QuestionTitle/QuestionTitle.tsx#QuestionTitle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SelectTypeQuestion/SelectTypeQuestion.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_QuestionTitle_QuestionTitle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/QuestionTitle/QuestionTitle.tsx"),_QuestionDescription_QuestionDescription__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/QuestionDescription/QuestionDescription.tsx"),_CioQuiz_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/CioQuiz/context.ts"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils.tsx"),_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/CioQuiz/actions.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__=function SelectTypeQuestion(){var question,instructions,_question,_question2,_question3,_question4,_useContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_CioQuiz_context__WEBPACK_IMPORTED_MODULE_3__.Z),state=_useContext.state,getSelectInputProps=_useContext.getSelectInputProps,hasImages=!1;return null!=state&&state.quiz.currentQuestion&&(hasImages=null===(_question=question=state.quiz.currentQuestion.next_question)||void 0===_question?void 0:_question.options.some((function(option){return option.images})),instructions=(null===(_question2=question)||void 0===_question2?void 0:_question2.type)===_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_5__.L.MultipleSelect&&"Select one or more options"),question?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"cio-select-question-container","data-question-key":question.key,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"cio-select-question-text",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_QuestionTitle_QuestionTitle__WEBPACK_IMPORTED_MODULE_1__.Z,{title:question.title}),null!==(_question3=question)&&void 0!==_question3&&_question3.description?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_QuestionDescription_QuestionDescription__WEBPACK_IMPORTED_MODULE_2__.Z,{description:question.description}):""]}),instructions&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"cio-select-question-instructions",children:instructions}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"".concat(hasImages?"cio-question-options-container":"cio-question-options-container-text-only"),children:null===(_question4=question)||void 0===_question4||null===(_question4=_question4.options)||void 0===_question4?void 0:_question4.map((function(option){return getSelectInputProps&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",_objectSpread(_objectSpread({},getSelectInputProps(option)),{},{children:[option.images?(0,_utils__WEBPACK_IMPORTED_MODULE_4__.xl)(option.images,"cio-question-option-image"):"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"cio-question-option-value",children:null==option?void 0:option.value})]}))}))})]}):null}},"./src/stories/Quiz/Component/QuestionTypes/QuestionTypeDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>QuestionTypeDecorator});var _components_CioQuiz_context__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/CioQuiz/context.ts"),_tests_mocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Quiz/tests/mocks.tsx"),_utils_StoryPreview__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Quiz/utils/StoryPreview.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-dom/index.js");function QuestionTypeDecorator(Story,questions){var question=_slicedToArray(questions,1)[0],contextValue=(0,_tests_mocks__WEBPACK_IMPORTED_MODULE_1__.lk)(question);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"cio-quiz",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_CioQuiz_context__WEBPACK_IMPORTED_MODULE_0__.Z.Provider,{value:contextValue,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_utils_StoryPreview__WEBPACK_IMPORTED_MODULE_2__.Z,{Component:Story})})})}QuestionTypeDecorator.displayName="QuestionTypeDecorator"},"./src/stories/Quiz/utils/StoryPreview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>StoryPreview});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function StoryBox(props){var size=props.size,children=props.children,className=size?"box box-".concat(size):"box";return(0,jsx_runtime.jsx)("div",{className,children})}StoryBox.displayName="StoryBox";try{StoryBox.displayName="StoryBox",StoryBox.__docgenInfo={description:"",displayName:"StoryBox",props:{children:{defaultValue:null,description:"",name:"children",required:!0,type:{name:"any"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/utils/StoryBox.tsx#StoryBox"]={docgenInfo:StoryBox.__docgenInfo,name:"StoryBox",path:"src/stories/Quiz/utils/StoryBox.tsx#StoryBox"})}catch(__react_docgen_typescript_loader_error){}function StoryBoxWrapper(props){var children=props.children,title=props.title;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{children:title}),(0,jsx_runtime.jsx)("div",{className:"box-wrapper",children:(0,jsx_runtime.jsx)(StoryBox,{children})})]})}try{StoryBoxWrapper.displayName="StoryBoxWrapper",StoryBoxWrapper.__docgenInfo={description:"",displayName:"StoryBoxWrapper",props:{children:{defaultValue:null,description:"",name:"children",required:!0,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/utils/StoryBoxWrapper.tsx#StoryBoxWrapper"]={docgenInfo:StoryBoxWrapper.__docgenInfo,name:"StoryBoxWrapper",path:"src/stories/Quiz/utils/StoryBoxWrapper.tsx#StoryBoxWrapper"})}catch(__react_docgen_typescript_loader_error){}function StoryVariations(props){var Component=props.Component;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h1",{className:"story-title",children:"Variations 🌈"}),(0,jsx_runtime.jsxs)("div",{className:"story-variations",children:[(0,jsx_runtime.jsx)(StoryBoxWrapper,{title:"Small Mobile 📱",children:(0,jsx_runtime.jsx)(StoryBox,{size:"small-mobile",children:(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsx)(Component,{})})},"small-mobile")}),(0,jsx_runtime.jsx)(StoryBoxWrapper,{title:"Mobile 📱",children:(0,jsx_runtime.jsx)(StoryBox,{size:"mobile",children:(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsx)(Component,{})})},"mobile")}),(0,jsx_runtime.jsx)(StoryBoxWrapper,{title:"Small Tablet 📔",children:(0,jsx_runtime.jsx)(StoryBox,{size:"small-tablet",children:(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsx)(Component,{})})},"small-tablet")}),(0,jsx_runtime.jsx)(StoryBoxWrapper,{title:"Big Tablet 📔",children:(0,jsx_runtime.jsx)(StoryBox,{size:"big-tablet",children:(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsx)(Component,{})})},"big-tablet")}),(0,jsx_runtime.jsx)(StoryBoxWrapper,{title:"Desktop 🖥️",children:(0,jsx_runtime.jsx)(StoryBox,{size:"desktop",children:(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsx)(Component,{})})},"desktop")})]})]})}try{StoryVariations.displayName="StoryVariations",StoryVariations.__docgenInfo={description:"",displayName:"StoryVariations",props:{Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"(props: any) => Element"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/utils/StoryVariations.tsx#StoryVariations"]={docgenInfo:StoryVariations.__docgenInfo,name:"StoryVariations",path:"src/stories/Quiz/utils/StoryVariations.tsx#StoryVariations"})}catch(__react_docgen_typescript_loader_error){}function StoryPreview(props){var Component=props.Component;return(0,jsx_runtime.jsxs)("div",{className:"story-preview",children:[(0,jsx_runtime.jsx)("h1",{className:"story-title",children:"Primary"}),(0,jsx_runtime.jsx)("div",{className:"box",children:(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsx)(Component,{})})}),(0,jsx_runtime.jsx)(StoryVariations,{Component})]})}StoryPreview.displayName="StoryPreview";try{StoryPreview.displayName="StoryPreview",StoryPreview.__docgenInfo={description:"",displayName:"StoryPreview",props:{Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"(props: any) => Element"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/utils/StoryPreview.tsx#StoryPreview"]={docgenInfo:StoryPreview.__docgenInfo,name:"StoryPreview",path:"src/stories/Quiz/utils/StoryPreview.tsx#StoryPreview"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FM:()=>getStateFromSessionStorage,Nu:()=>resetQuizSessionStorageState,_v:()=>sleep,ik:()=>convertPrimaryColorsToString,iv:()=>getQuestionTypes,kg:()=>logger,lC:()=>rgbToHsl,mf:()=>isFunction,xl:()=>renderImages});__webpack_require__("./node_modules/react/index.js");var _components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CioQuiz/actions.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),process=__webpack_require__("./node_modules/process/browser.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var renderImages=function renderImages(images,cssClasses){var primaryUrl=images.primary_url,primaryAlt=images.primary_alt,secondaryUrl=images.secondary_url,secondaryAlt=images.secondary_alt;if(primaryUrl){var src=primaryUrl,alt=primaryAlt||"Quiz Image";return window.innerWidth>768&&secondaryUrl&&(src=secondaryUrl,secondaryAlt&&(alt=secondaryAlt)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"".concat(cssClasses||"").trim(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{className:"cio-question-image",src,alt})})}return""},functionStrings={onAddToCartClick:"(item) => console.dir(item)",onQuizResultClick:"(result, position) => console.dir(result, position)",onAddToFavoritesClick:"(result) => {\n      if (result.data) {\n        if (!favorites.includes(result.data.id)) {\n          setFavorites([...favorites, result.data.id]);\n        } else {\n          setFavorites(favorites.filter((id) => id !== result.data?.id));\n        }\n      }\n    }",onQuizResultsLoaded:"(results) => console.dir(results)",onQuizNextQuestion:"(question) => console.dir(question)",onQuizSkipQuestion:"(question) => console.dir(question)",onEmailResults:"(data) => console.dir(data)",cioJsClient:"cioJsClient"},stringifyWithDefaults=function stringifyWithDefaults(obj){var res=JSON.stringify(obj,(function customJsonTransformer(key,value){return value instanceof Function||"cioJsClient"===key?"".concat(key,"_CODE"):value}),"  ");return Array.from(res.matchAll(/"(\w*)_CODE"/g)).forEach((function(match){var _match=_slicedToArray(match,2),codePlaceholder=_match[0],key=_match[1],functionString=functionStrings[key];functionString?res=res.replaceAll(codePlaceholder,functionString):console.error("Function string for ".concat(key," not found."))})),res},stringify=function stringify(obj){return JSON.stringify(obj,null,"  ")},getQuestionTypes=function getQuestionTypes(questionType){var isOpenQuestion=questionType===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.OpenText,isCoverQuestion=questionType===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.Cover,isSingleQuestion=questionType===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.SingleSelect,isMultipleQuestion=questionType===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.MultipleSelect;return{isOpenQuestion,isCoverQuestion,isSingleQuestion,isMultipleQuestion,isSelectQuestion:isSingleQuestion||isMultipleQuestion}};function isFunction(fn){return fn&&"function"==typeof fn}var getStateFromSessionStorage=function getStateFromSessionStorage(quizStateKey){var _window,state=null===(_window=window)||void 0===_window||null===(_window=_window.sessionStorage)||void 0===_window?void 0:_window.getItem(quizStateKey);return state?JSON.parse(state):null},resetQuizSessionStorageState=function resetQuizSessionStorageState(quizStateKey){return function(){var _window2;null===(_window2=window)||void 0===_window2||null===(_window2=_window2.sessionStorage)||void 0===_window2||_window2.removeItem(quizStateKey)}},logger=function logger(action){var _process;null!==(_process=process)&&void 0!==process&&null!==(_process=_process.env)&&void 0!==_process&&(console.group("%cAction:%c  ".concat(action.type),"color: red; font-weight: bold;","color: green; font-weight: lighter;"),console.log("%c type:","color: #9E9E9E; font-weight: 700;",action.type),console.log("%c payload:","color: #00A7F7; font-weight: 700;",action.payload),console.groupEnd())};function sleep(ms){return new Promise((function(resolve){return setTimeout(resolve,ms)}))}function rgbToHsl(r,g,b){var rConverted=r/255,gConverted=g/255,bConverted=b/255,max=Math.max(rConverted,gConverted,bConverted),min=Math.min(rConverted,gConverted,bConverted),delta=max-min,h=0;0===delta?h=0:max===rConverted?h=(gConverted-bConverted)/delta%6:max===gConverted?h=(bConverted-rConverted)/delta+2:max===bConverted&&(h=(rConverted-gConverted)/delta+4);var l=(min+max)/2,s=0===delta?0:delta/(1-Math.abs(2*l-1));return[Math.round(60*h),Math.round(100*s),Math.round(100*l)]}function convertPrimaryColorsToString(primaryColorStyles){return"{\n    --primary-color-h: ".concat(primaryColorStyles["--primary-color-h"],"; \n    --primary-color-s: ").concat(primaryColorStyles["--primary-color-s"],"; \n    --primary-color-l: ").concat(primaryColorStyles["--primary-color-l"],"; \n  }")}try{isFunction.displayName="isFunction",isFunction.__docgenInfo={description:"",displayName:"isFunction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#isFunction"]={docgenInfo:isFunction.__docgenInfo,name:"isFunction",path:"src/utils.tsx#isFunction"})}catch(__react_docgen_typescript_loader_error){}try{sleep.displayName="sleep",sleep.__docgenInfo={description:"",displayName:"sleep",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#sleep"]={docgenInfo:sleep.__docgenInfo,name:"sleep",path:"src/utils.tsx#sleep"})}catch(__react_docgen_typescript_loader_error){}try{convertPrimaryColorsToString.displayName="convertPrimaryColorsToString",convertPrimaryColorsToString.__docgenInfo={description:"",displayName:"convertPrimaryColorsToString",props:{"--primary-color-h":{defaultValue:null,description:"",name:"--primary-color-h",required:!0,type:{name:"string"}},"--primary-color-s":{defaultValue:null,description:"",name:"--primary-color-s",required:!0,type:{name:"string"}},"--primary-color-l":{defaultValue:null,description:"",name:"--primary-color-l",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#convertPrimaryColorsToString"]={docgenInfo:convertPrimaryColorsToString.__docgenInfo,name:"convertPrimaryColorsToString",path:"src/utils.tsx#convertPrimaryColorsToString"})}catch(__react_docgen_typescript_loader_error){}try{stringifyWithDefaults.displayName="stringifyWithDefaults",stringifyWithDefaults.__docgenInfo={description:"",displayName:"stringifyWithDefaults",props:{cioJsClient:{defaultValue:null,description:"",name:"cioJsClient",required:!1,type:{name:"any"}},callbacks:{defaultValue:null,description:"",name:"callbacks",required:!0,type:{name:"{ onAddToCartClick: any; onQuizResultClick: any; onQuizResultsLoaded: any; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#stringifyWithDefaults"]={docgenInfo:stringifyWithDefaults.__docgenInfo,name:"stringifyWithDefaults",path:"src/utils.tsx#stringifyWithDefaults"})}catch(__react_docgen_typescript_loader_error){}try{stringify.displayName="stringify",stringify.__docgenInfo={description:"",displayName:"stringify",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#stringify"]={docgenInfo:stringify.__docgenInfo,name:"stringify",path:"src/utils.tsx#stringify"})}catch(__react_docgen_typescript_loader_error){}try{getQuestionTypes.displayName="getQuestionTypes",getQuestionTypes.__docgenInfo={description:"",displayName:"getQuestionTypes",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#getQuestionTypes"]={docgenInfo:getQuestionTypes.__docgenInfo,name:"getQuestionTypes",path:"src/utils.tsx#getQuestionTypes"})}catch(__react_docgen_typescript_loader_error){}try{getStateFromSessionStorage.displayName="getStateFromSessionStorage",getStateFromSessionStorage.__docgenInfo={description:"",displayName:"getStateFromSessionStorage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#getStateFromSessionStorage"]={docgenInfo:getStateFromSessionStorage.__docgenInfo,name:"getStateFromSessionStorage",path:"src/utils.tsx#getStateFromSessionStorage"})}catch(__react_docgen_typescript_loader_error){}try{resetQuizSessionStorageState.displayName="resetQuizSessionStorageState",resetQuizSessionStorageState.__docgenInfo={description:"",displayName:"resetQuizSessionStorageState",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#resetQuizSessionStorageState"]={docgenInfo:resetQuizSessionStorageState.__docgenInfo,name:"resetQuizSessionStorageState",path:"src/utils.tsx#resetQuizSessionStorageState"})}catch(__react_docgen_typescript_loader_error){}try{logger.displayName="logger",logger.__docgenInfo={description:"",displayName:"logger",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#logger"]={docgenInfo:logger.__docgenInfo,name:"logger",path:"src/utils.tsx#logger"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);