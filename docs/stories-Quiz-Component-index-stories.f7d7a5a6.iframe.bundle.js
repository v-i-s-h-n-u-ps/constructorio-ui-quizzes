(self.webpackChunk_constructor_io_constructorio_ui_quizzes=self.webpackChunk_constructor_io_constructorio_ui_quizzes||[]).push([[554],{"./node_modules/@babel/runtime/helpers/interopRequireDefault.js":module=>{module.exports=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/stories/Quiz/Component/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicUsage:()=>BasicUsage,PassCallbacks:()=>PassCallbacks,ProvideCIOClientInstance:()=>ProvideCIOClientInstance,RenderInASmallContainer:()=>RenderInASmallContainer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _constructor_io_constructorio_client_javascript__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@constructor-io/constructorio-client-javascript/lib/constructorio.js"),_constructor_io_constructorio_client_javascript__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_constructor_io_constructorio_client_javascript__WEBPACK_IMPORTED_MODULE_1__),_components_CioQuiz__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/CioQuiz/index.tsx"),_argTypes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/Quiz/argTypes.ts"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils.tsx"),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/Quiz/Component/index.tsx"),_constants__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Quiz/Full Quiz",component:_components_CioQuiz__WEBPACK_IMPORTED_MODULE_2__.Z,argTypes:_argTypes__WEBPACK_IMPORTED_MODULE_3__.P,tags:["autodocs"],parameters:{docs:{description:{component:_constants__WEBPACK_IMPORTED_MODULE_6__.$w}}}};var resultsPageOptions={onQuizResultClick:function onQuizResultClick(result,position){console.log("Click result"),console.dir(result,position)},onQuizResultsLoaded:function onQuizResultsLoaded(results){console.log("Loaded results"),console.dir(results)},onAddToCartClick:function onAddToCartClick(item){console.log("Add to cart"),console.dir(item)},onAddToFavoritesClick:function onAddToFavoritesClick(item){console.log("Add to favorites"),console.dir(item)},resultCardRegularPriceKey:"price",resultCardSalePriceKey:"salePrice"},callbacks={onQuizNextQuestion:function onQuizNextQuestion(question){console.dir(question)}},BasicUsage=___WEBPACK_IMPORTED_MODULE_5__.Ty.bind({});function RenderInASmallContainerTemplate(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"small-container-example-wrapper",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"small-container-example",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_CioQuiz__WEBPACK_IMPORTED_MODULE_2__.Z,_objectSpread({},args))})})}BasicUsage.args={apiKey:_constants__WEBPACK_IMPORTED_MODULE_6__.q1,quizId:_constants__WEBPACK_IMPORTED_MODULE_6__.au,resultsPageOptions},(0,___WEBPACK_IMPORTED_MODULE_5__.Cp)(BasicUsage,"const args = ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.fk)(BasicUsage.args)),_constants__WEBPACK_IMPORTED_MODULE_6__.co),RenderInASmallContainerTemplate.displayName="RenderInASmallContainerTemplate";var RenderInASmallContainer=RenderInASmallContainerTemplate.bind({});RenderInASmallContainer.args={apiKey:_constants__WEBPACK_IMPORTED_MODULE_6__.q1,quizId:_constants__WEBPACK_IMPORTED_MODULE_6__.au,resultsPageOptions},(0,___WEBPACK_IMPORTED_MODULE_5__.Cp)(RenderInASmallContainer,"\nimport '@constructor-io/constructorio-ui-quizzes/styles.css';\n\nconst args = ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.fk)(BasicUsage.args)),_constants__WEBPACK_IMPORTED_MODULE_6__.qZ);var cioJsClient=new(_constructor_io_constructorio_client_javascript__WEBPACK_IMPORTED_MODULE_1___default())({apiKey:_constants__WEBPACK_IMPORTED_MODULE_6__.q1});delete cioJsClient.autocomplete,delete cioJsClient.search,delete cioJsClient.browse,delete cioJsClient.recommendations;var cioClientStoryResultsPageOptions={onAddToCartClick:resultsPageOptions.onAddToCartClick,resultCardRegularPriceKey:resultsPageOptions.resultCardRegularPriceKey},ProvideCIOClientInstance=___WEBPACK_IMPORTED_MODULE_5__.Ty.bind({});ProvideCIOClientInstance.args={quizId:_constants__WEBPACK_IMPORTED_MODULE_6__.au,resultsPageOptions:cioClientStoryResultsPageOptions,cioJsClient},(0,___WEBPACK_IMPORTED_MODULE_5__.Cp)(ProvideCIOClientInstance,"\nimport ConstructorIOClient from '@constructor-io/constructorio-client-javascript';\n\nconst cioJsClient = new ConstructorIOClient({ apiKey: '".concat(_constants__WEBPACK_IMPORTED_MODULE_6__.q1,"' });\nconst args = ").concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.fk)(ProvideCIOClientInstance.args),";"),_constants__WEBPACK_IMPORTED_MODULE_6__.B3);var PassCallbacks=___WEBPACK_IMPORTED_MODULE_5__.Ty.bind({});PassCallbacks.args={apiKey:_constants__WEBPACK_IMPORTED_MODULE_6__.q1,quizId:_constants__WEBPACK_IMPORTED_MODULE_6__.au,resultsPageOptions,callbacks},(0,___WEBPACK_IMPORTED_MODULE_5__.Cp)(PassCallbacks,"const args = ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.fk)(PassCallbacks.args)),_constants__WEBPACK_IMPORTED_MODULE_6__.hs);var __namedExportsOrder=["BasicUsage","RenderInASmallContainer","ProvideCIOClientInstance","PassCallbacks"];try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{apiKey:{defaultValue:null,description:"",name:"apiKey",required:!1,type:{name:"string"}},cioJsClient:{defaultValue:null,description:"",name:"cioJsClient",required:!1,type:{name:"ConstructorIO"}},quizId:{defaultValue:null,description:"",name:"quizId",required:!0,type:{name:"string"}},quizVersionId:{defaultValue:null,description:"",name:"quizVersionId",required:!1,type:{name:"string"}},resultsPageOptions:{defaultValue:null,description:"",name:"resultsPageOptions",required:!0,type:{name:"ResultsPageOptions"}},sessionStateOptions:{defaultValue:null,description:"",name:"sessionStateOptions",required:!1,type:{name:"SessionStateOptions"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},enableHydration:{defaultValue:null,description:"",name:"enableHydration",required:!1,type:{name:"boolean"}},callbacks:{defaultValue:null,description:"",name:"callbacks",required:!1,type:{name:"Callbacks"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Component/index.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/stories/Quiz/Component/index.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}try{RenderInASmallContainer.displayName="RenderInASmallContainer",RenderInASmallContainer.__docgenInfo={description:"",displayName:"RenderInASmallContainer",props:{apiKey:{defaultValue:null,description:"",name:"apiKey",required:!1,type:{name:"string"}},cioJsClient:{defaultValue:null,description:"",name:"cioJsClient",required:!1,type:{name:"ConstructorIO"}},quizId:{defaultValue:null,description:"",name:"quizId",required:!0,type:{name:"string"}},quizVersionId:{defaultValue:null,description:"",name:"quizVersionId",required:!1,type:{name:"string"}},resultsPageOptions:{defaultValue:null,description:"",name:"resultsPageOptions",required:!0,type:{name:"ResultsPageOptions"}},sessionStateOptions:{defaultValue:null,description:"",name:"sessionStateOptions",required:!1,type:{name:"SessionStateOptions"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},enableHydration:{defaultValue:null,description:"",name:"enableHydration",required:!1,type:{name:"boolean"}},callbacks:{defaultValue:null,description:"",name:"callbacks",required:!1,type:{name:"Callbacks"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Component/index.stories.tsx#RenderInASmallContainer"]={docgenInfo:RenderInASmallContainer.__docgenInfo,name:"RenderInASmallContainer",path:"src/stories/Quiz/Component/index.stories.tsx#RenderInASmallContainer"})}catch(__react_docgen_typescript_loader_error){}try{ProvideCIOClientInstance.displayName="ProvideCIOClientInstance",ProvideCIOClientInstance.__docgenInfo={description:"",displayName:"ProvideCIOClientInstance",props:{apiKey:{defaultValue:null,description:"",name:"apiKey",required:!1,type:{name:"string"}},cioJsClient:{defaultValue:null,description:"",name:"cioJsClient",required:!1,type:{name:"ConstructorIO"}},quizId:{defaultValue:null,description:"",name:"quizId",required:!0,type:{name:"string"}},quizVersionId:{defaultValue:null,description:"",name:"quizVersionId",required:!1,type:{name:"string"}},resultsPageOptions:{defaultValue:null,description:"",name:"resultsPageOptions",required:!0,type:{name:"ResultsPageOptions"}},sessionStateOptions:{defaultValue:null,description:"",name:"sessionStateOptions",required:!1,type:{name:"SessionStateOptions"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},enableHydration:{defaultValue:null,description:"",name:"enableHydration",required:!1,type:{name:"boolean"}},callbacks:{defaultValue:null,description:"",name:"callbacks",required:!1,type:{name:"Callbacks"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Component/index.stories.tsx#ProvideCIOClientInstance"]={docgenInfo:ProvideCIOClientInstance.__docgenInfo,name:"ProvideCIOClientInstance",path:"src/stories/Quiz/Component/index.stories.tsx#ProvideCIOClientInstance"})}catch(__react_docgen_typescript_loader_error){}try{PassCallbacks.displayName="PassCallbacks",PassCallbacks.__docgenInfo={description:"",displayName:"PassCallbacks",props:{apiKey:{defaultValue:null,description:"",name:"apiKey",required:!1,type:{name:"string"}},cioJsClient:{defaultValue:null,description:"",name:"cioJsClient",required:!1,type:{name:"ConstructorIO"}},quizId:{defaultValue:null,description:"",name:"quizId",required:!0,type:{name:"string"}},quizVersionId:{defaultValue:null,description:"",name:"quizVersionId",required:!1,type:{name:"string"}},resultsPageOptions:{defaultValue:null,description:"",name:"resultsPageOptions",required:!0,type:{name:"ResultsPageOptions"}},sessionStateOptions:{defaultValue:null,description:"",name:"sessionStateOptions",required:!1,type:{name:"SessionStateOptions"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},enableHydration:{defaultValue:null,description:"",name:"enableHydration",required:!1,type:{name:"boolean"}},callbacks:{defaultValue:null,description:"",name:"callbacks",required:!1,type:{name:"Callbacks"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Component/index.stories.tsx#PassCallbacks"]={docgenInfo:PassCallbacks.__docgenInfo,name:"PassCallbacks",path:"src/stories/Quiz/Component/index.stories.tsx#PassCallbacks"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Quiz/Component/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Cp:()=>addComponentStoryDescription,Ty:()=>ComponentTemplate});__webpack_require__("./node_modules/react/index.js");var _components_CioQuiz__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CioQuiz/index.tsx"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ComponentTemplate(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_CioQuiz__WEBPACK_IMPORTED_MODULE_1__.Z,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},args))}ComponentTemplate.displayName="ComponentTemplate";var getComponentStoryParams=function getComponentStoryParams(storyParams){return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.Ez)(storyParams,"\nfunction YourComponent() {\n  return (\n    <div>\n      <CioQuiz {...args} />\n    </div>\n  );\n}\n","import CioQuiz from '@constructor-io/constructorio-ui-quizzes';")},addComponentStoryDescription=function addComponentStoryDescription(story,code){var description=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";story.parameters=getComponentStoryParams(code),story.parameters.docs.description={story:"\n".concat(description,"\n\n```jsx\n").concat(code,"\n```")}};try{ComponentTemplate.displayName="ComponentTemplate",ComponentTemplate.__docgenInfo={description:"",displayName:"ComponentTemplate",props:{apiKey:{defaultValue:null,description:"",name:"apiKey",required:!1,type:{name:"string"}},cioJsClient:{defaultValue:null,description:"",name:"cioJsClient",required:!1,type:{name:"ConstructorIO"}},quizId:{defaultValue:null,description:"",name:"quizId",required:!0,type:{name:"string"}},quizVersionId:{defaultValue:null,description:"",name:"quizVersionId",required:!1,type:{name:"string"}},resultsPageOptions:{defaultValue:null,description:"",name:"resultsPageOptions",required:!0,type:{name:"ResultsPageOptions"}},sessionStateOptions:{defaultValue:null,description:"",name:"sessionStateOptions",required:!1,type:{name:"SessionStateOptions"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},enableHydration:{defaultValue:null,description:"",name:"enableHydration",required:!1,type:{name:"boolean"}},callbacks:{defaultValue:null,description:"",name:"callbacks",required:!1,type:{name:"Callbacks"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Component/index.tsx#ComponentTemplate"]={docgenInfo:ComponentTemplate.__docgenInfo,name:"ComponentTemplate",path:"src/stories/Quiz/Component/index.tsx#ComponentTemplate"})}catch(__react_docgen_typescript_loader_error){}try{getComponentStoryParams.displayName="getComponentStoryParams",getComponentStoryParams.__docgenInfo={description:"",displayName:"getComponentStoryParams",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Component/index.tsx#getComponentStoryParams"]={docgenInfo:getComponentStoryParams.__docgenInfo,name:"getComponentStoryParams",path:"src/stories/Quiz/Component/index.tsx#getComponentStoryParams"})}catch(__react_docgen_typescript_loader_error){}}}]);