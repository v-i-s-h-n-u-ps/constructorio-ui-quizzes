"use strict";(self.webpackChunk_constructor_io_constructorio_ui_quizzes=self.webpackChunk_constructor_io_constructorio_ui_quizzes||[]).push([[379],{"./src/stories/Quiz/Hooks/HooksStories.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicUsage:()=>BasicUsage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HooksStories_stories});__webpack_require__("./node_modules/react/index.js");var RedoSVG=__webpack_require__("./src/components/RedoButton/RedoSVG.tsx"),src=__webpack_require__("./src/index.ts"),utils=(__webpack_require__("./src/styles.css"),__webpack_require__("./src/utils.tsx")),ShareSVG=__webpack_require__("./src/components/ShareButton/ShareSVG.tsx"),QuizResultsSummary=__webpack_require__("./src/components/QuizResultsSummary/QuizResultsSummary.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function HooksTemplate(args){var _useCioQuiz=(0,src.K_)(args),state=_useCioQuiz.state,getOpenTextInputProps=_useCioQuiz.getOpenTextInputProps,getNextQuestionButtonProps=_useCioQuiz.getNextQuestionButtonProps,getPreviousQuestionButtonProps=_useCioQuiz.getPreviousQuestionButtonProps,getSkipQuestionButtonProps=_useCioQuiz.getSkipQuestionButtonProps,getQuizImageProps=_useCioQuiz.getQuizImageProps,getSelectQuestionImageProps=_useCioQuiz.getSelectQuestionImageProps,getSelectInputProps=_useCioQuiz.getSelectInputProps,getResetQuizButtonProps=_useCioQuiz.getResetQuizButtonProps,getQuizResultButtonProps=_useCioQuiz.getQuizResultButtonProps,getAddToCartButtonProps=_useCioQuiz.getAddToCartButtonProps,getShareResultsButtonProps=_useCioQuiz.getShareResultsButtonProps,primaryColorStyles=_useCioQuiz.primaryColorStyles;if("SUCCESS"===state.quiz.requestState){var _state$quiz$results,_state$quiz,_state$quiz$resultsCo,_state$quiz2,_quizResults$length,_state$quiz$resultsCo2,_state$quiz$resultsCo3,quizResults=null===(_state$quiz$results=state.quiz.results)||void 0===_state$quiz$results||null===(_state$quiz$results=_state$quiz$results.response)||void 0===_state$quiz$results?void 0:_state$quiz$results.results,matchedOptions=null==state||null===(_state$quiz=state.quiz)||void 0===_state$quiz?void 0:_state$quiz.matchedOptions,summary=null!==(_state$quiz$resultsCo=null==state||null===(_state$quiz2=state.quiz)||void 0===_state$quiz2||null===(_state$quiz2=_state$quiz2.resultsConfig)||void 0===_state$quiz2||null===(_state$quiz2=_state$quiz2.desktop)||void 0===_state$quiz2?void 0:_state$quiz2.response_summary)&&void 0!==_state$quiz$resultsCo?_state$quiz$resultsCo:null,numberOfResults=null!==(_quizResults$length=null==quizResults?void 0:quizResults.length)&&void 0!==_quizResults$length?_quizResults$length:0,zeroResults=!numberOfResults,resultsTitle=zeroResults?(null===(_state$quiz$resultsCo2=state.quiz.resultsConfig)||void 0===_state$quiz$resultsCo2||null===(_state$quiz$resultsCo2=_state$quiz$resultsCo2.desktop)||void 0===_state$quiz$resultsCo2||null===(_state$quiz$resultsCo2=_state$quiz$resultsCo2.title)||void 0===_state$quiz$resultsCo2?void 0:_state$quiz$resultsCo2.text)||"Here are your results":"",resultsDescription=(null===(_state$quiz$resultsCo3=state.quiz.resultsConfig)||void 0===_state$quiz$resultsCo3||null===(_state$quiz$resultsCo3=_state$quiz$resultsCo3.desktop)||void 0===_state$quiz$resultsCo3||null===(_state$quiz$resultsCo3=_state$quiz$resultsCo3.description)||void 0===_state$quiz$resultsCo3?void 0:_state$quiz$resultsCo3.text)||"";if(quizResults)return(0,jsx_runtime.jsxs)("div",{className:"cio-quiz",children:[(0,jsx_runtime.jsxs)("div",{className:"cio-results-container",children:[!zeroResults&&(0,jsx_runtime.jsxs)("div",{className:"cio-results-title-container",children:[(0,jsx_runtime.jsx)("h1",{className:"cio-results-title",children:resultsTitle}),(0,jsx_runtime.jsx)("p",{className:"cio-results-description",children:resultsDescription})]}),!zeroResults&&(0,jsx_runtime.jsxs)("div",{className:"cio-results-filter-and-redo-container cio-results-button-group",children:[(0,jsx_runtime.jsx)("div",{className:"cio-results-filter-container",children:(0,jsx_runtime.jsx)(QuizResultsSummary.Z,{summary,matchedOptions})}),(0,jsx_runtime.jsxs)("div",{className:"cio-results-number-and-share-button-group",children:[numberOfResults," ",1===numberOfResults?"result":"results",(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread({},getShareResultsButtonProps()),{},{type:"button",children:[(0,jsx_runtime.jsx)(ShareSVG.Z,{}),(0,jsx_runtime.jsx)("span",{children:"Share Results"})]}))]})]}),(0,jsx_runtime.jsx)("div",{className:"cio-results",children:!zeroResults&&quizResults.map((function(result,i){var _result$data,_result$data2,_result$data3,_result$data4;return(0,jsx_runtime.jsxs)("div",{className:"cio-result-card",children:[(0,jsx_runtime.jsxs)("div",_objectSpread(_objectSpread({},getQuizResultButtonProps({result,position:i})),{},{children:[(0,jsx_runtime.jsx)("div",{className:"cio-result-card-image",children:(0,jsx_runtime.jsx)("img",{src:null===(_result$data=result.data)||void 0===_result$data?void 0:_result$data.image_url,alt:"product"})}),(0,jsx_runtime.jsxs)("div",{className:"cio-result-card-text",children:[(0,jsx_runtime.jsx)("p",{className:"cio-result-card-title",children:result.value}),(0,jsx_runtime.jsxs)("div",{className:"cio-result-card-prices",children:[(null==result||null===(_result$data2=result.data)||void 0===_result$data2?void 0:_result$data2.price)&&(0,jsx_runtime.jsxs)("span",{className:"cio-result-card-sale-price",children:["$",result.data.price]}),(null==result||null===(_result$data3=result.data)||void 0===_result$data3?void 0:_result$data3.price)&&(0,jsx_runtime.jsxs)("span",{className:"cio-result-card-regular-price".concat(result.data.price?"--strike-through":""),children:["$",result.data.price]})]})]}),(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getAddToCartButtonProps(result,null==result||null===(_result$data4=result.data)||void 0===_result$data4?void 0:_result$data4.price)),{},{children:"Add to Cart"}))]})),!zeroResults&&(0,jsx_runtime.jsx)("div",{className:"cio-redo-button-container",children:(0,jsx_runtime.jsxs)("button",_objectSpread(_objectSpread({},getResetQuizButtonProps("secondary")),{},{children:[(0,jsx_runtime.jsx)(RedoSVG.Z,{}),(0,jsx_runtime.jsx)("span",{children:"retake"})]}))})]})}))})]}),zeroResults&&(0,jsx_runtime.jsxs)("div",{className:"cio-zero-results",children:[(0,jsx_runtime.jsx)("h3",{className:"cio-zero-results-subtitle",children:"Sorry, we couldn’t find products that perfectly match your preferences."}),(0,jsx_runtime.jsx)("div",{className:"cio-button-container",children:(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getResetQuizButtonProps()),{},{children:"Try Again"}))})]})]});var currentQuestion=state.quiz.currentQuestion,currentQuestionData=null==currentQuestion?void 0:currentQuestion.next_question;if(currentQuestionData){var _currentQuestionData$,_currentQuestionData$2;if(currentQuestion.isOpenQuestion)return(0,jsx_runtime.jsxs)("div",{className:"cio-quiz",children:[(0,jsx_runtime.jsxs)("style",{children:[".cio-quiz ",(0,utils.ik)(primaryColorStyles)]}),(0,jsx_runtime.jsxs)("div",{className:"cio-container--with-image cio-open-text-question-container--with-image",children:[(null===(_currentQuestionData$=currentQuestionData.images)||void 0===_currentQuestionData$?void 0:_currentQuestionData$.primary_url)&&(0,jsx_runtime.jsx)("span",{className:"cio-question-image-container",children:(0,jsx_runtime.jsx)("img",_objectSpread(_objectSpread({},getQuizImageProps()),{},{className:"cio-question-image"}))}),(0,jsx_runtime.jsxs)("div",{className:"cio-question-content",children:[(0,jsx_runtime.jsx)("h1",{className:"cio-question-title",children:currentQuestionData.title}),(0,jsx_runtime.jsx)("p",{className:"cio-question-description",children:currentQuestionData.description}),(0,jsx_runtime.jsx)("input",_objectSpread({},getOpenTextInputProps()))]})]}),(0,jsx_runtime.jsxs)("div",{className:"cio-question-buttons-container",children:[(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getPreviousQuestionButtonProps()),{},{children:"Back"})),(0,jsx_runtime.jsxs)("div",{className:"cio-question-buttons-group",children:[(0,jsx_runtime.jsx)("div",{className:"cio-button-container",children:(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getSkipQuestionButtonProps()),{},{children:"Skip"}))}),(0,jsx_runtime.jsx)("div",{className:"cio-button-container",children:(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getNextQuestionButtonProps()),{},{children:"Continue"}))})]})]})]});if(currentQuestion.isCoverQuestion)return(0,jsx_runtime.jsxs)("div",{className:"cio-quiz",children:[(0,jsx_runtime.jsxs)("div",{className:"cio-container--with-image cio-cover-question-container--with-image",children:[(null===(_currentQuestionData$2=currentQuestionData.images)||void 0===_currentQuestionData$2?void 0:_currentQuestionData$2.primary_url)&&(0,jsx_runtime.jsx)("span",{className:"cio-question-image-container",children:(0,jsx_runtime.jsx)("img",_objectSpread(_objectSpread({},getQuizImageProps()),{},{className:"cio-question-image"}))}),(0,jsx_runtime.jsxs)("div",{className:"cio-question-content",children:[(0,jsx_runtime.jsx)("h1",{className:"cio-question-title",children:currentQuestionData.title}),(0,jsx_runtime.jsx)("p",{className:"cio-question-description",children:currentQuestionData.description})]})]}),(0,jsx_runtime.jsxs)("div",{className:"cio-question-buttons-container",children:[(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getPreviousQuestionButtonProps()),{},{children:"Back"})),(0,jsx_runtime.jsxs)("div",{className:"cio-question-buttons-group",children:[(0,jsx_runtime.jsx)("div",{className:"cio-button-container",children:(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getSkipQuestionButtonProps()),{},{children:"Skip"}))}),(0,jsx_runtime.jsx)("div",{className:"cio-button-container",children:(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getNextQuestionButtonProps()),{},{children:"Continue"}))})]})]})]});if(currentQuestion.isSelectQuestion)return(0,jsx_runtime.jsxs)("div",{className:"cio-quiz",children:[(0,jsx_runtime.jsxs)("div",{className:"cio-select-question-container",children:[(0,jsx_runtime.jsxs)("div",{className:"cio-select-question-text",children:[(0,jsx_runtime.jsx)("h1",{children:currentQuestionData.title}),(0,jsx_runtime.jsx)("p",{children:currentQuestionData.description})]}),(0,jsx_runtime.jsx)("div",{className:"cio-question-options-container",children:currentQuestionData.options.map((function(option){return(0,jsx_runtime.jsxs)("div",_objectSpread(_objectSpread({},getSelectInputProps(option)),{},{children:[option.images?(0,jsx_runtime.jsx)("img",_objectSpread({},getSelectQuestionImageProps(option))):"",(0,jsx_runtime.jsx)("div",{className:"cio-question-option-value",children:option.value})]}))}))})]}),(0,jsx_runtime.jsxs)("div",{className:"cio-question-buttons-container",children:[(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getPreviousQuestionButtonProps()),{},{children:"Back"})),(0,jsx_runtime.jsxs)("div",{className:"cio-question-buttons-group",children:[(0,jsx_runtime.jsx)("div",{className:"cio-button-container",children:(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getSkipQuestionButtonProps()),{},{children:"Skip"}))}),(0,jsx_runtime.jsx)("div",{className:"cio-button-container",children:(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({},getNextQuestionButtonProps()),{},{children:"Continue"}))})]})]})]})}}return null}try{Hooks.displayName="Hooks",Hooks.__docgenInfo={description:"",displayName:"Hooks",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Hooks/index.tsx#Hooks"]={docgenInfo:Hooks.__docgenInfo,name:"Hooks",path:"src/stories/Quiz/Hooks/index.tsx#Hooks"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./src/constants.ts"),argTypes=__webpack_require__("./src/stories/Quiz/argTypes.ts"),mocks=__webpack_require__("./src/stories/Quiz/tests/mocks.tsx");const HooksStories_stories={title:"Quiz/useCioQuiz",component:HooksTemplate,parameters:{controls:argTypes.yC,docs:{source:{type:"code"}}},argTypes:argTypes.PG};var BasicUsage=HooksTemplate.bind({});BasicUsage.args={quizId:constants.au,apiKey:constants.q1,quizVersionId:"",resultsPageOptions:mocks.kx,resultCardOptions:mocks.gl,callbacks:mocks.ZC,sessionStateOptions:mocks.IN,primaryColor:"35, 71, 199"};var __namedExportsOrder=["BasicUsage"];try{BasicUsage.displayName="BasicUsage",BasicUsage.__docgenInfo={description:"",displayName:"BasicUsage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Quiz/Hooks/HooksStories.stories.tsx#BasicUsage"]={docgenInfo:BasicUsage.__docgenInfo,name:"BasicUsage",path:"src/stories/Quiz/Hooks/HooksStories.stories.tsx#BasicUsage"})}catch(__react_docgen_typescript_loader_error){}},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{il:()=>ResultContainer.Z,K_:()=>useQuiz.Z});__webpack_require__("./src/components/CioQuiz/index.tsx");var useQuiz=__webpack_require__("./src/hooks/useQuiz.ts"),ResultContainer=(__webpack_require__("./src/components/QuizQuestions/index.tsx"),__webpack_require__("./src/components/OpenTextTypeQuestion/OpenTextTypeQuestion.tsx"),__webpack_require__("./src/components/CoverTypeQuestion/CoverTypeQuestion.tsx"),__webpack_require__("./src/components/SelectTypeQuestion/SelectTypeQuestion.tsx"),__webpack_require__("./src/components/Results/Results.tsx"),__webpack_require__("./src/components/ResultCard/ResultCard.tsx"),__webpack_require__("./src/components/ResultContainer/ResultContainer.tsx")),ResultCtaButton=(__webpack_require__("./src/components/ResultFiltersAndShare/ResultFiltersAndShare.tsx"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/ResultCtaButton/ResultCtaButton.tsx")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ResultHeroCard(props){var _heroItem$data,_heroItem$data2,heroItem=props.heroItem;return(0,jsx_runtime.jsxs)("div",{className:"cio-hero-card",children:[(0,jsx_runtime.jsx)("img",{className:"cio-hero-card-image",src:null==heroItem||null===(_heroItem$data=heroItem.data)||void 0===_heroItem$data?void 0:_heroItem$data.image_url,alt:"product"}),(0,jsx_runtime.jsxs)("div",{className:"cio-hero-card-contents",children:[(0,jsx_runtime.jsx)("div",{className:"cio-hero-card-title",children:"Especially Curated For You!"}),(0,jsx_runtime.jsx)("h2",{className:"cio-hero-card-item-name",children:null==heroItem?void 0:heroItem.value}),(0,jsx_runtime.jsxs)("div",{className:"cio-hero-card-item-price",children:["$",null==heroItem||null===(_heroItem$data2=heroItem.data)||void 0===_heroItem$data2?void 0:_heroItem$data2.price]}),(0,jsx_runtime.jsx)("p",{className:"cio-hero-card-item-description"}),(0,jsx_runtime.jsx)(ResultCtaButton.Z,{item:[heroItem]})]})]})}ResultHeroCard.displayName="ResultHeroCard";try{ResultHeroCard.displayName="ResultHeroCard",ResultHeroCard.__docgenInfo={description:"",displayName:"ResultHeroCard",props:{heroItem:{defaultValue:null,description:"",name:"heroItem",required:!0,type:{name:"Partial<BrowseResultData>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ResultHeroCard/ResultHeroCard.tsx#ResultHeroCard"]={docgenInfo:ResultHeroCard.__docgenInfo,name:"ResultHeroCard",path:"src/components/ResultHeroCard/ResultHeroCard.tsx#ResultHeroCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Quiz/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$F:()=>docsControls,PG:()=>argTypes,yC:()=>storiesControls});var argTypes={quizId:{description:"ID of the quiz",control:{type:"text"}},quizVersionId:{description:"Optional quiz version Id"},apiKey:{description:"Your Constructor API key. Either `apiKey` or `cioJsClient` are required"},"callbacks.onQuizNextQuestion":{description:"Callback function to be called when the next question is loaded",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(question) => void",detail:"(question: QuestionWithAnswer) => void"}}},"callbacks.onQuizResultsLoaded":{description:"Callback function to be called when the quiz results are loaded",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(results) => void",detail:"(results: QuizResultDataPartial) => void"}}},"callbacks.onQuizResultClick":{description:"Callback function to be called when a quiz result is clicked",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(result, position: number) => void",detail:"(result: QuizResultDataPartial, position: number) => void"}}},"callbacks.onAddToCartClick":{description:"Callback function to be called when the add to cart button is clicked",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(result) => void",detail:"(result: QuizResultDataPartial) => void"}}},"callbacks.onAddToFavoritesClick":{description:"Callback function to be called when the add to favorites button is clicked",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(result) => void",detail:"(result: QuizResultDataPartial) => void"}}},"callbacks.onEmailResults":{description:"Callback function to be called when emailing results.",control:!1,table:{subcategory:"callbacks",defaultValue:{summary:"null"},type:{summary:"(args) => void",detail:"(args: QuizEmailResults) => void"}}},cioJsClient:{description:"Optional custom constructor instance. Either `apiKey` or `cioJsClient` are required"},primaryColor:{description:"RGB value string for quiz primary theme color ie: `'255, 82, 48'`",control:{type:"text"},defaultValue:{summary:"35, 71, 199"}},"resultCardOptions.resultCardRegularPriceKey":{description:"Key name for the regular price in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"regular_price"},type:{summary:"string"}}},"resultCardOptions.resultCardSalePriceKey":{description:"Key name for the sale price in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"sale_price"},type:{summary:"string"}}},"resultCardOptions.resultCardRatingCountKey":{description:"Key name for the rating count in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"rating_count"},type:{summary:"string"}}},"resultCardOptions.resultCardRatingScoreKey":{description:"Key name for the rating score in the API response",control:{type:"text"},table:{subcategory:"resultCardOptions",defaultValue:{summary:"rating_score"},type:{summary:"string"}}},"resultCardOptions.renderResultCardPriceDetails":{description:"Callback function to render result card price details",control:!1,table:{subcategory:"resultCardOptions",defaultValue:{summary:"null"},type:{summary:"(result) => JSX.Element",detail:"(result: QuizResultDataPartial) => JSX.Element"}}},"resultsPageOptions.numResultsToDisplay":{description:"Number of results to display on the results page",control:{type:"number"},table:{subcategory:"resultsPageOptions",defaultValue:{summary:5},type:{summary:"number"}}},"resultsPageOptions.favoriteItems":{description:"Array of favorite item IDs",control:!1,table:{subcategory:"resultsPageOptions",type:{summary:"string[]"}}},"resultsPageOptions.showShareResultsButton":{description:"Boolean for whether or not to show share results button on the results page",control:{type:"boolean"},table:{subcategory:"resultCardOptions",defaultValue:{summary:!0},type:{summary:"boolean"}}},"sessionStateOptions.showSessionModal":{description:"Boolean for whether or not to show session modal to hydrate quiz on the results page",control:{type:"boolean"},table:{subcategory:"sessionStateOptions",defaultValue:{summary:!1},type:{summary:"boolean"}}},"sessionStateOptions.showSessionModalOnResults":{description:"Boolean for whether or not to show session modal to hydrate quiz",control:{type:"boolean"},table:{subcategory:"sessionStateOptions",defaultValue:{summary:!1},type:{summary:"boolean"}}},"sessionStateOptions.sessionStateKey":{description:"Key name where session storage state is saved",control:{type:"text"},table:{subcategory:"sessionStateOptions",defaultValue:{summary:"quizState"},type:{summary:"string"}}},enableHydration:{description:"Boolean for whether or not to hydrate quiz questions and results on page reload",defaultValue:{summary:"true"}}},docsControls={sort:"requiredFirst",exclude:["sessionStateOptions","callbacks","resultsPageOptions","resultCardOptions"]},storiesControls={include:["apiKey","quizId","quizVersionId","primaryColor"]}}}]);