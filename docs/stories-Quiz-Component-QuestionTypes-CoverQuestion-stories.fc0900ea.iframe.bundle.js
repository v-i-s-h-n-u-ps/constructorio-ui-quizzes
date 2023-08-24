"use strict";(self.webpackChunk_constructor_io_constructorio_ui_quizzes=self.webpackChunk_constructor_io_constructorio_ui_quizzes||[]).push([[186],{"./src/stories/Quiz/Component/QuestionTypes/CoverQuestion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Variations:()=>Variations,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CoverQuestion_stories});var CoverTypeQuestion=__webpack_require__("./src/components/CoverTypeQuestion/CoverTypeQuestion.tsx"),mocks=__webpack_require__("./src/stories/Quiz/tests/mocks.ts"),context=__webpack_require__("./src/components/CioQuiz/context.ts"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function StoryBox(props){var size=props.size,children=props.children,className=size?"box box-".concat(size):"box";return(0,jsx_runtime.jsx)("div",{className,children})}StoryBox.displayName="StoryBox";try{StoryBox.displayName="StoryBox",StoryBox.__docgenInfo={description:"",displayName:"StoryBox",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/utils/StoryBox.tsx#StoryBox"]={docgenInfo:StoryBox.__docgenInfo,name:"StoryBox",path:"src/stories/Quiz/utils/StoryBox.tsx#StoryBox"})}catch(__react_docgen_typescript_loader_error){}function StoryBoxWrapper(props){var children=props.children,title=props.title;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{children:title}),(0,jsx_runtime.jsx)("div",{className:"box-wrapper",children:(0,jsx_runtime.jsx)(StoryBox,{children})})]})}try{StoryBoxWrapper.displayName="StoryBoxWrapper",StoryBoxWrapper.__docgenInfo={description:"",displayName:"StoryBoxWrapper",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/utils/StoryBoxWrapper.tsx#StoryBoxWrapper"]={docgenInfo:StoryBoxWrapper.__docgenInfo,name:"StoryBoxWrapper",path:"src/stories/Quiz/utils/StoryBoxWrapper.tsx#StoryBoxWrapper"})}catch(__react_docgen_typescript_loader_error){}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function StoryVariations(props){var Component=props.Component,variationsArgsList=props.variationsArgsList;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h1",{className:"story-title",children:"Variations 🌈"}),(0,jsx_runtime.jsxs)("div",{className:"story-variations",children:[(0,jsx_runtime.jsx)(StoryBoxWrapper,{title:"Small Mobile 📱",children:variationsArgsList.map((function(args,i){return(0,jsx_runtime.jsx)(StoryBox,{size:"small-mobile",children:(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsx)(Component,_objectSpread({},args))})},"".concat(i,"-small-mobile"))}))}),(0,jsx_runtime.jsx)(StoryBoxWrapper,{title:"Mobile 📱",children:variationsArgsList.map((function(args,i){return(0,jsx_runtime.jsx)(StoryBox,{size:"mobile",children:(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsx)(Component,_objectSpread({},args))})},"".concat(i,"-mobile"))}))}),(0,jsx_runtime.jsx)(StoryBoxWrapper,{title:"Small Tablet 📔",children:variationsArgsList.map((function(args,i){return(0,jsx_runtime.jsx)(StoryBox,{size:"small-tablet",children:(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsx)(Component,_objectSpread({},args))})},"".concat(i,"-small-tablet"))}))}),(0,jsx_runtime.jsx)(StoryBoxWrapper,{title:"Big Tablet 📔",children:variationsArgsList.map((function(args,i){return(0,jsx_runtime.jsx)(StoryBox,{size:"big-tablet",children:(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsx)(Component,_objectSpread({},args))})},"".concat(i,"-big-tablet"))}))}),(0,jsx_runtime.jsx)(StoryBoxWrapper,{title:"Desktop 🖥️",children:variationsArgsList.map((function(args,i){return(0,jsx_runtime.jsx)(StoryBox,{size:"desktop",children:(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsx)(Component,_objectSpread({},args))})},"".concat(i,"-desktop"))}))})]})]})}try{StoryVariations.displayName="StoryVariations",StoryVariations.__docgenInfo={description:"",displayName:"StoryVariations",props:{Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"(props: any) => Element"}},variationsArgsList:{defaultValue:null,description:"",name:"variationsArgsList",required:!0,type:{name:"any[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/utils/StoryVariations.tsx#StoryVariations"]={docgenInfo:StoryVariations.__docgenInfo,name:"StoryVariations",path:"src/stories/Quiz/utils/StoryVariations.tsx#StoryVariations"})}catch(__react_docgen_typescript_loader_error){}function StoryPreview_typeof(obj){return StoryPreview_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},StoryPreview_typeof(obj)}function StoryPreview_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function StoryPreview_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?StoryPreview_ownKeys(Object(source),!0).forEach((function(key){StoryPreview_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):StoryPreview_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function StoryPreview_defineProperty(obj,key,value){return(key=function StoryPreview_toPropertyKey(arg){var key=function StoryPreview_toPrimitive(input,hint){if("object"!==StoryPreview_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==StoryPreview_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===StoryPreview_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function StoryPreview(props){var Component=props.Component,variationsArgsList=props.variationsArgsList;return(0,jsx_runtime.jsxs)("div",{className:"story-preview",children:[(0,jsx_runtime.jsx)("h1",{className:"story-title",children:"Primary"}),(0,jsx_runtime.jsx)("div",{className:"box",children:(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsx)(Component,StoryPreview_objectSpread({},variationsArgsList[0]))})}),(0,jsx_runtime.jsx)(StoryVariations,{Component,variationsArgsList})]})}StoryPreview.displayName="StoryPreview";try{StoryPreview.displayName="StoryPreview",StoryPreview.__docgenInfo={description:"",displayName:"StoryPreview",props:{Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"(props: any) => Element"}},variationsArgsList:{defaultValue:null,description:"",name:"variationsArgsList",required:!0,type:{name:"any[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/utils/StoryPreview.tsx#StoryPreview"]={docgenInfo:StoryPreview.__docgenInfo,name:"StoryPreview",path:"src/stories/Quiz/utils/StoryPreview.tsx#StoryPreview"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-dom/index.js");function QuestionTypeDecorator(Story,questions){var question=_slicedToArray(questions,1)[0],contextValue=(0,mocks.lk)(question);return(0,jsx_runtime.jsx)("div",{className:"cio-quiz",children:(0,jsx_runtime.jsx)(context.Z.Provider,{value:contextValue,children:(0,jsx_runtime.jsx)(StoryPreview,{Component:Story,variationsArgsList:questions})})})}QuestionTypeDecorator.displayName="QuestionTypeDecorator";var _Variations$parameter,_Variations$parameter2,_Variations$parameter3,actions=__webpack_require__("./src/components/CioQuiz/actions.ts");function CoverQuestion_stories_typeof(obj){return CoverQuestion_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},CoverQuestion_stories_typeof(obj)}function CoverQuestion_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function CoverQuestion_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?CoverQuestion_stories_ownKeys(Object(source),!0).forEach((function(key){CoverQuestion_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):CoverQuestion_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function CoverQuestion_stories_defineProperty(obj,key,value){return(key=function CoverQuestion_stories_toPropertyKey(arg){var key=function CoverQuestion_stories_toPrimitive(input,hint){if("object"!==CoverQuestion_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==CoverQuestion_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===CoverQuestion_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var coverQuestionWithImage=(0,mocks.RK)(actions.L.Cover),coverQuestionWithoutImage=(0,mocks.RW)(actions.L.Cover);const CoverQuestion_stories={title:"Quiz/Questions/CoverQuestion",component:CoverTypeQuestion.Z,argTypes:{}};var Variations={decorators:[function(story){return QuestionTypeDecorator(story,[coverQuestionWithImage,coverQuestionWithoutImage])}]};Variations.parameters=CoverQuestion_stories_objectSpread(CoverQuestion_stories_objectSpread({},Variations.parameters),{},{docs:CoverQuestion_stories_objectSpread(CoverQuestion_stories_objectSpread({},null===(_Variations$parameter=Variations.parameters)||void 0===_Variations$parameter?void 0:_Variations$parameter.docs),{},{source:CoverQuestion_stories_objectSpread({originalSource:"{\n  decorators: [story => QuestionTypeDecorator_v2(story, [(coverQuestionWithImage as CoverQuestion), (coverQuestionWithoutImage as CoverQuestion)])]\n}"},null===(_Variations$parameter2=Variations.parameters)||void 0===_Variations$parameter2||null===(_Variations$parameter3=_Variations$parameter2.docs)||void 0===_Variations$parameter3?void 0:_Variations$parameter3.source)})});var __namedExportsOrder=["Variations"]},"./src/components/CoverTypeQuestion/CoverTypeQuestion.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CoverTypeQuestion});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_QuestionTitle_QuestionTitle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/QuestionTitle/QuestionTitle.tsx"),_CioQuiz_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/CioQuiz/context.ts"),_QuestionDescription_QuestionDescription__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/QuestionDescription/QuestionDescription.tsx"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function CoverTypeQuestion(){var _question,_question$images,question,state=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_CioQuiz_context__WEBPACK_IMPORTED_MODULE_2__.Z).state;null!=state&&state.quiz.currentQuestion&&(question=null==state?void 0:state.quiz.currentQuestion.next_question);var _question2,hasImage=null===(_question=question)||void 0===_question||null===(_question$images=_question.images)||void 0===_question$images?void 0:_question$images.primary_url;return question?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"\n        cio-container".concat(hasImage?"--with-image":"","\n        cio-cover-question-container").concat(hasImage?"--with-image":"","\n      "),"data-question-key":question.key,children:[hasImage?(0,_utils__WEBPACK_IMPORTED_MODULE_4__.xl)(question.images,"cio-question-image-container"):"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"cio-question-content",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_QuestionTitle_QuestionTitle__WEBPACK_IMPORTED_MODULE_1__.Z,{title:null===(_question2=question)||void 0===_question2?void 0:_question2.title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_QuestionDescription_QuestionDescription__WEBPACK_IMPORTED_MODULE_3__.Z,{description:question.description})]})]}):null}},"./src/components/QuestionDescription/QuestionDescription.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function QuestionDescription(props){var description=props.description;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"cio-question-description",children:description})}QuestionDescription.displayName="QuestionDescription";const __WEBPACK_DEFAULT_EXPORT__=QuestionDescription;try{QuestionDescription.displayName="QuestionDescription",QuestionDescription.__docgenInfo={description:"",displayName:"QuestionDescription",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuestionDescription/QuestionDescription.tsx#QuestionDescription"]={docgenInfo:QuestionDescription.__docgenInfo,name:"QuestionDescription",path:"src/components/QuestionDescription/QuestionDescription.tsx#QuestionDescription"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/QuestionTitle/QuestionTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function QuestionTitle(props){var title=props.title;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1",{className:"cio-question-title",children:title})}QuestionTitle.displayName="QuestionTitle";const __WEBPACK_DEFAULT_EXPORT__=QuestionTitle;try{QuestionTitle.displayName="QuestionTitle",QuestionTitle.__docgenInfo={description:"",displayName:"QuestionTitle",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuestionTitle/QuestionTitle.tsx#QuestionTitle"]={docgenInfo:QuestionTitle.__docgenInfo,name:"QuestionTitle",path:"src/components/QuestionTitle/QuestionTitle.tsx#QuestionTitle"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Quiz/tests/mocks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CT:()=>questionOptionsWithImages,RK:()=>getMockQuestionWithImage,RW:()=>getMockQuestion,lk:()=>useMockContextValue,nx:()=>questionOptions});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants.ts"),_hooks_usePropsGetters_useOpenTextInputProps__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/usePropsGetters/useOpenTextInputProps.ts"),_hooks_usePropsGetters_useCoverQuestionProps__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/usePropsGetters/useCoverQuestionProps.ts"),_hooks_usePropsGetters_useSelectInputProps__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/usePropsGetters/useSelectInputProps.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var getMockQuestion=function getMockQuestion(type){return{id:1,title:"This is question title",description:"This is question description",cta_text:"Continue",type,input_placeholder:"Answer here..."}},getMockQuestionWithImage=function getMockQuestionWithImage(type){return _objectSpread(_objectSpread({},getMockQuestion(type)),{images:{primary_url:"https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png"}})},getMockOption=function getMockOption(id,value){return{id,value,attribute:{name:value,value}}},getMockOptionWithImage=function getMockOptionWithImage(id,value){return _objectSpread(_objectSpread({},getMockOption(id,value)),{images:{primary_url:"https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png"}})},questionOptionsWithImages=[_objectSpread({},getMockOptionWithImage(0,"coffee")),_objectSpread({},getMockOptionWithImage(1,"tea")),_objectSpread({},getMockOptionWithImage(2,"water"))],questionOptions=[_objectSpread({},getMockOption(0,"coffee")),_objectSpread({},getMockOption(1,"tea")),_objectSpread({},getMockOption(2,"water"))],getMockState=function getMockState(question){return{answers:{inputs:{1:{type:null==question?void 0:question.type,value:""}},isLastAnswer:!1},quiz:{requestState:_constants__WEBPACK_IMPORTED_MODULE_0__.oA.Success,versionId:"",sessionId:"",skipToResults:!1,currentQuestion:{next_question:question,isFirstQuestion:!1,isOpenQuestion:"open"===(null==question?void 0:question.type),isCoverQuestion:"cover"===(null==question?void 0:question.type),isSingleQuestion:"single"===(null==question?void 0:question.type),isMultipleQuestion:"multiple"===(null==question?void 0:question.type),isSelectQuestion:"single"===(null==question?void 0:question.type),total_questions:1},results:{response:{results:[{value:"This is a result card item",data:{id:"0",price:100,ratingCount:"12",ratingScore:"4",image_url:"https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png",discount:"59.9"}},{value:"This is a result card item",data:{id:"1",price:200,salePrice:150,ratingCount:"6",ratingScore:"3",image_url:"https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png"}},{value:"This is a result card item",data:{id:"2",price:300,salePrice:250,ratingCount:"2",ratingScore:"5",image_url:"https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png"}}],facets:[],groups:[],sort_options:[],refined_content:[],total_num_results:10,features:[],result_sources:{}},quiz_id:"",quiz_session_id:"",quiz_version_id:"",quiz_selected_options:[{value:"Chocolate",has_attribute:!0},{value:"Medium",has_attribute:!0}]},selectedOptionsWithAttributes:["Chocolate","Medium"]}}},mockElementProps={className:"",type:"submit",onClick:function onClick(){},onChange:function onChange(){},onKeyDown:function onKeyDown(){},role:"button",tabIndex:0,key:0,style:{},placeholder:"",value:""},useMockContextValue=function useMockContextValue(question){var getOpenTextInputProps=(0,_hooks_usePropsGetters_useOpenTextInputProps__WEBPACK_IMPORTED_MODULE_1__.Z)((function(){}),(function(){}),question),getCoverQuestionProps=(0,_hooks_usePropsGetters_useCoverQuestionProps__WEBPACK_IMPORTED_MODULE_2__.Z)((function(){}),question),getSelectInputProps=(0,_hooks_usePropsGetters_useSelectInputProps__WEBPACK_IMPORTED_MODULE_3__.Z)((function(){}),(function(){}),question);return{state:getMockState(question),getCoverQuestionProps,getOpenTextInputProps,getSelectInputProps,getAddToCartButtonProps:function getAddToCartButtonProps(){return _objectSpread(_objectSpread({},mockElementProps),{},{className:"cio-result-card-cta-button"})},getAddToFavoritesButtonProps:function getAddToFavoritesButtonProps(){return _objectSpread(_objectSpread({},mockElementProps),{},{className:"cio-result-card-favorites-button"})},getHydrateQuizButtonProps:function getHydrateQuizButtonProps(){return _objectSpread(_objectSpread({},mockElementProps),{},{className:"cio-question-cta-button"})},getNextQuestionButtonProps:function getNextQuestionButtonProps(){return _objectSpread(_objectSpread({},mockElementProps),{},{className:"cio-question-cta-button"})},getPreviousQuestionButtonProps:function getPreviousQuestionButtonProps(){return _objectSpread(_objectSpread({},mockElementProps),{},{className:"cio-question-back-button"})},getQuizImageProps:function getQuizImageProps(){return mockElementProps},getQuizResultButtonProps:function getQuizResultButtonProps(){return mockElementProps},getQuizResultLinkProps:function getQuizResultLinkProps(){return mockElementProps},getResetQuizButtonProps:function getResetQuizButtonProps(){return _objectSpread(_objectSpread({},mockElementProps),{},{className:"cio-question-redo-button"})},primaryColorStyles:{"--primary-color-h":"12","--primary-color-s":"14","--primary-color-l":"14"},customClickItemCallback:!1,customAddToFavoritesCallback:!0}}},"./src/utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ez:()=>getStoryParams,FM:()=>getStateFromSessionStorage,Nu:()=>resetQuizSessionStorageState,_v:()=>sleep,fk:()=>stringifyWithDefaults,ik:()=>convertPrimaryColorsToString,iv:()=>getQuestionTypes,kg:()=>logger,lC:()=>rgbToHsl,mf:()=>isFunction,xl:()=>renderImages});__webpack_require__("./node_modules/react/index.js");var _components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CioQuiz/actions.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var renderImages=function renderImages(images,cssClasses){var primaryUrl=images.primary_url,primaryAlt=images.primary_alt,secondaryUrl=images.secondary_url,secondaryAlt=images.secondary_alt;if(primaryUrl){var src=primaryUrl,alt=primaryAlt||"Quiz Image";return window.innerWidth>768&&secondaryUrl&&(src=secondaryUrl,secondaryAlt&&(alt=secondaryAlt)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"".concat(cssClasses||"").trim(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{className:"cio-question-image",src,alt})})}return""},getStoryParams=function getStoryParams(storyCode,templateCode,importCode){return{docs:{source:{code:"\n".concat(importCode,"\n").concat(storyCode,"\n").concat(templateCode,"\n"),language:"jsx",format:!0,type:"code"}}}},functionStrings={onAddToCartClick:"(item) => console.dir(item)",onQuizResultClick:"(result, position) => console.dir(result, position)",onAddToFavoritesClick:"(item) => console.dir(item)",onQuizResultsLoaded:"(results) => console.dir(results)",cioJsClient:"cioJsClient"},stringifyWithDefaults=function stringifyWithDefaults(obj){var res=JSON.stringify(obj,(function customJsonTransformer(key,value){return value instanceof Function||"cioJsClient"===key?"".concat(key,"_CODE"):value}),"  ");return Array.from(res.matchAll(/"(\w*)_CODE"/g)).forEach((function(match){var _match=_slicedToArray(match,2),codePlaceholder=_match[0],key=_match[1],functionString=functionStrings[key];functionString?res=res.replaceAll(codePlaceholder,functionString):console.error("Function string for ".concat(key," not found."))})),res},stringify=function stringify(obj){return JSON.stringify(obj,null,"  ")},getQuestionTypes=function getQuestionTypes(questionType){var isOpenQuestion=questionType===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.OpenText,isCoverQuestion=questionType===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.Cover,isSingleQuestion=questionType===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.SingleSelect,isMultipleQuestion=questionType===_components_CioQuiz_actions__WEBPACK_IMPORTED_MODULE_1__.L.MultipleSelect;return{isOpenQuestion,isCoverQuestion,isSingleQuestion,isMultipleQuestion,isSelectQuestion:isSingleQuestion||isMultipleQuestion}};function isFunction(fn){return fn&&"function"==typeof fn}var getStateFromSessionStorage=function getStateFromSessionStorage(quizStateKey){var _window,_window$sessionStorag,state=null===(_window=window)||void 0===_window||null===(_window$sessionStorag=_window.sessionStorage)||void 0===_window$sessionStorag?void 0:_window$sessionStorag.getItem(quizStateKey);return state?JSON.parse(state):null},resetQuizSessionStorageState=function resetQuizSessionStorageState(quizStateKey){return function(){var _window2,_window2$sessionStora;null===(_window2=window)||void 0===_window2||null===(_window2$sessionStora=_window2.sessionStorage)||void 0===_window2$sessionStora||_window2$sessionStora.removeItem(quizStateKey)}},logger=function logger(action){console.group("%cAction:%c  ".concat(action.type),"color: red; font-weight: bold;","color: green; font-weight: lighter;"),console.log("%c type:","color: #9E9E9E; font-weight: 700;",action.type),console.log("%c payload:","color: #00A7F7; font-weight: 700;",action.payload),console.groupEnd()};function sleep(ms){return new Promise((function(resolve){return setTimeout(resolve,ms)}))}function rgbToHsl(r,g,b){var rConverted=r/255,gConverted=g/255,bConverted=b/255,max=Math.max(rConverted,gConverted,bConverted),min=Math.min(rConverted,gConverted,bConverted),delta=max-min,h=0;0===delta?h=0:max===rConverted?h=(gConverted-bConverted)/delta%6:max===gConverted?h=(bConverted-rConverted)/delta+2:max===bConverted&&(h=(rConverted-gConverted)/delta+4);var l=(min+max)/2,s=0===delta?0:delta/(1-Math.abs(2*l-1));return[Math.round(60*h),Math.round(100*s),Math.round(100*l)]}function convertPrimaryColorsToString(primaryColorStyles){return"{\n    --primary-color-h: ".concat(primaryColorStyles["--primary-color-h"],"; \n    --primary-color-s: ").concat(primaryColorStyles["--primary-color-s"],"; \n    --primary-color-l: ").concat(primaryColorStyles["--primary-color-l"],"; \n  }")}try{isFunction.displayName="isFunction",isFunction.__docgenInfo={description:"",displayName:"isFunction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#isFunction"]={docgenInfo:isFunction.__docgenInfo,name:"isFunction",path:"src/utils.tsx#isFunction"})}catch(__react_docgen_typescript_loader_error){}try{sleep.displayName="sleep",sleep.__docgenInfo={description:"",displayName:"sleep",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#sleep"]={docgenInfo:sleep.__docgenInfo,name:"sleep",path:"src/utils.tsx#sleep"})}catch(__react_docgen_typescript_loader_error){}try{convertPrimaryColorsToString.displayName="convertPrimaryColorsToString",convertPrimaryColorsToString.__docgenInfo={description:"",displayName:"convertPrimaryColorsToString",props:{"--primary-color-h":{defaultValue:null,description:"",name:"--primary-color-h",required:!0,type:{name:"string"}},"--primary-color-s":{defaultValue:null,description:"",name:"--primary-color-s",required:!0,type:{name:"string"}},"--primary-color-l":{defaultValue:null,description:"",name:"--primary-color-l",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#convertPrimaryColorsToString"]={docgenInfo:convertPrimaryColorsToString.__docgenInfo,name:"convertPrimaryColorsToString",path:"src/utils.tsx#convertPrimaryColorsToString"})}catch(__react_docgen_typescript_loader_error){}try{stringifyWithDefaults.displayName="stringifyWithDefaults",stringifyWithDefaults.__docgenInfo={description:"",displayName:"stringifyWithDefaults",props:{cioJsClient:{defaultValue:null,description:"",name:"cioJsClient",required:!1,type:{name:"any"}},resultsPageOptions:{defaultValue:null,description:"",name:"resultsPageOptions",required:!0,type:{name:"{ onAddToCartClick: any; onQuizResultClick: any; onQuizResultsLoaded: any; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#stringifyWithDefaults"]={docgenInfo:stringifyWithDefaults.__docgenInfo,name:"stringifyWithDefaults",path:"src/utils.tsx#stringifyWithDefaults"})}catch(__react_docgen_typescript_loader_error){}try{stringify.displayName="stringify",stringify.__docgenInfo={description:"",displayName:"stringify",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#stringify"]={docgenInfo:stringify.__docgenInfo,name:"stringify",path:"src/utils.tsx#stringify"})}catch(__react_docgen_typescript_loader_error){}try{getQuestionTypes.displayName="getQuestionTypes",getQuestionTypes.__docgenInfo={description:"",displayName:"getQuestionTypes",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#getQuestionTypes"]={docgenInfo:getQuestionTypes.__docgenInfo,name:"getQuestionTypes",path:"src/utils.tsx#getQuestionTypes"})}catch(__react_docgen_typescript_loader_error){}try{getStateFromSessionStorage.displayName="getStateFromSessionStorage",getStateFromSessionStorage.__docgenInfo={description:"",displayName:"getStateFromSessionStorage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#getStateFromSessionStorage"]={docgenInfo:getStateFromSessionStorage.__docgenInfo,name:"getStateFromSessionStorage",path:"src/utils.tsx#getStateFromSessionStorage"})}catch(__react_docgen_typescript_loader_error){}try{resetQuizSessionStorageState.displayName="resetQuizSessionStorageState",resetQuizSessionStorageState.__docgenInfo={description:"",displayName:"resetQuizSessionStorageState",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#resetQuizSessionStorageState"]={docgenInfo:resetQuizSessionStorageState.__docgenInfo,name:"resetQuizSessionStorageState",path:"src/utils.tsx#resetQuizSessionStorageState"})}catch(__react_docgen_typescript_loader_error){}try{logger.displayName="logger",logger.__docgenInfo={description:"",displayName:"logger",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#logger"]={docgenInfo:logger.__docgenInfo,name:"logger",path:"src/utils.tsx#logger"})}catch(__react_docgen_typescript_loader_error){}}}]);