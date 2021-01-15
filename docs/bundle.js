/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pokedex/./src/sass/index.scss?");

/***/ }),

/***/ "./src/components/Controls.ts":
/*!************************************!*\
  !*** ./src/components/Controls.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_getPokemonData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getPokemonData */ \"./src/utils/getPokemonData.ts\");\n\nclass Controls {\n    constructor(dispatch) {\n        this.setPokemon = async (id) => {\n            this.dispatch({ type: 'LOADING' });\n            const response = await (0,_utils_getPokemonData__WEBPACK_IMPORTED_MODULE_0__.getPokemonData)(id);\n            this.dispatch({\n                type: 'SET_CURRENT_POKEMON',\n                payload: response,\n            });\n        };\n        this.arrowControls = ({ currentPokemon: { id } }) => {\n            this.right.onclick = () => this.setPokemon(id + 1);\n            this.up.onclick = () => this.setPokemon(id + 10);\n            if (id > 10) {\n                this.down.onclick = () => this.setPokemon(id - 10);\n            }\n            if (id > 1) {\n                this.left.onclick = () => this.setPokemon(id - 1);\n            }\n            if (id < 10) {\n                this.down.onclick = () => this.setPokemon(898);\n                this.left.onclick = () => this.setPokemon(898);\n            }\n            document.onkeyup = ({ key }) => {\n                switch (key) {\n                    case 'ArrowRight':\n                        this.setPokemon(id + 1);\n                        break;\n                    case 'ArrowUp':\n                        this.setPokemon(id + 10);\n                        break;\n                    case 'ArrowDown':\n                        this.setPokemon(id - 10);\n                        break;\n                    case 'ArrowLeft':\n                        this.setPokemon(id - 1);\n                        break;\n                }\n            };\n        };\n        this.setRandomPokemon = () => {\n            this.randomPoke.addEventListener('click', async () => {\n                let randomNumber = Math.floor(Math.random() * 893 + 1);\n                this.setPokemon(randomNumber);\n            });\n        };\n        this.addFavoritePokemon = ({ currentPokemon, favorites }) => {\n            this.addFavorite.onclick = () => {\n                this.dispatch({ type: 'SET_FAVORITE', payload: currentPokemon });\n            };\n            if (favorites.length === 10) {\n                this.addFavorite.classList.add('favorite-unactive');\n            }\n        };\n        this.dispatch = dispatch;\n        this.right = document.getElementById('next');\n        this.left = document.getElementById('back');\n        this.up = document.getElementById('up');\n        this.down = document.getElementById('down');\n        this.randomPoke = document.getElementById('randomPoke');\n        this.addFavorite = document.getElementById('addFavorite');\n        this.setRandomPokemon();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controls);\n\n\n//# sourceURL=webpack://pokedex/./src/components/Controls.ts?");

/***/ }),

/***/ "./src/components/Favorites.ts":
/*!*************************************!*\
  !*** ./src/components/Favorites.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Favorites {\n    constructor() {\n        this.printFavorites = ({ favorites }) => {\n            favorites.map((fav, i) => {\n                const favImg = `<img class='table__pokemon' src=${fav.icon} />`;\n                this.tableElements[i].innerHTML = '';\n                this.tableElements[i].innerHTML = favImg;\n            });\n        };\n        this.tableElements = document.querySelectorAll('.table__element');\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Favorites);\n\n\n//# sourceURL=webpack://pokedex/./src/components/Favorites.ts?");

/***/ }),

/***/ "./src/components/PokemonSearcher.ts":
/*!*******************************************!*\
  !*** ./src/components/PokemonSearcher.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_getPokemonData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getPokemonData */ \"./src/utils/getPokemonData.ts\");\n\nclass PokemonSearcher {\n    constructor(dispatch) {\n        // set the pokemon displayed first\n        this.setInitialPokemon = async () => {\n            this.dispatch({ type: 'LOADING' });\n            const response = await (0,_utils_getPokemonData__WEBPACK_IMPORTED_MODULE_0__.getPokemonData)(1);\n            this.dispatch({ type: 'SET_CURRENT_POKEMON', payload: response });\n        };\n        // search bar\n        this.searchPokemon = async () => {\n            this.input.onchange = async ({ target: { value } }) => {\n                const searchValue = value.toLowerCase();\n                this.dispatch({ type: 'LOADING' });\n                const response = await (0,_utils_getPokemonData__WEBPACK_IMPORTED_MODULE_0__.getPokemonData)(searchValue);\n                if (typeof response === 'string') {\n                    this.dispatch({ type: 'SET_ERROR', payload: response });\n                }\n                else {\n                    this.dispatch({\n                        type: 'SET_CURRENT_POKEMON',\n                        payload: response,\n                    });\n                }\n            };\n        };\n        this.dispatch = dispatch;\n        this.input = document.getElementById('search');\n        this.setInitialPokemon();\n        this.searchPokemon();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonSearcher);\n\n\n//# sourceURL=webpack://pokedex/./src/components/PokemonSearcher.ts?");

/***/ }),

/***/ "./src/components/Screen.ts":
/*!**********************************!*\
  !*** ./src/components/Screen.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_getTypeColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getTypeColor */ \"./src/utils/getTypeColor.ts\");\n\nclass Screen {\n    constructor() {\n        this.printPoke = ({ currentPokemon, loading, error }) => {\n            if (loading) {\n                this.screen.innerHTML = `<div class=\"lds-ripple\"><div></div><div></div></div>`;\n            }\n            else if (error) {\n                this.screen.innerHTML = `<p class='screen__error'>It looks like it is not a pokemon. <br/><br/>Try again.`;\n                this.name.innerHTML = 'Oops!';\n            }\n            else {\n                this.screen.innerHTML = `<img class='screen__image' id='img' src=${currentPokemon.img} alt=\"\">`;\n                this.name.innerText = currentPokemon.name;\n                this.typesSection.innerHTML = '';\n                currentPokemon.types.map((type) => {\n                    const { background, color } = (0,_utils_getTypeColor__WEBPACK_IMPORTED_MODULE_0__.getTypeColor)(type.type.name);\n                    const typeButton = `\n\t\t\t\t\t\t<div class='controls__type' style= 'background: ${background}; color:${color}'>\n\t\t\t\t\t\t\t${type.type.name}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t`;\n                    this.typesSection.innerHTML = this.typesSection.innerHTML + typeButton;\n                });\n            }\n        };\n        this.screen = document.getElementById('screen');\n        this.name = document.getElementById('name');\n        this.typesSection = document.getElementById('types');\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Screen);\n\n\n//# sourceURL=webpack://pokedex/./src/components/Screen.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index */ \"./src/sass/index.scss\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _components_Screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Screen */ \"./src/components/Screen.ts\");\n/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Controls */ \"./src/components/Controls.ts\");\n/* harmony import */ var _components_PokemonSearcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PokemonSearcher */ \"./src/components/PokemonSearcher.ts\");\n/* harmony import */ var _components_Favorites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Favorites */ \"./src/components/Favorites.ts\");\n\n// import Components\n\n\n\n\n\n// // this is the store of the project\nconst store = (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.generateStore)();\nconst { dispatch, subscribe } = store;\nconst pokedexScreen = new _components_Screen__WEBPACK_IMPORTED_MODULE_2__.default();\nconst pokedexControls = new _components_Controls__WEBPACK_IMPORTED_MODULE_3__.default(dispatch);\nconst pokedexFavorites = new _components_Favorites__WEBPACK_IMPORTED_MODULE_5__.default();\nconst pokedexSearch = new _components_PokemonSearcher__WEBPACK_IMPORTED_MODULE_4__.default(dispatch);\nconst showState = (state) => {\n    console.log(state);\n};\n// this are the functions listening the store changes\nsubscribe(showState);\nsubscribe(pokedexScreen.printPoke);\nsubscribe(pokedexControls.arrowControls);\nsubscribe(pokedexControls.addFavoritePokemon);\nsubscribe(pokedexFavorites.printFavorites);\n\n\n//# sourceURL=webpack://pokedex/./src/index.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateStore\": () => /* binding */ generateStore\n/* harmony export */ });\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\n\nconst createStore = (reducer, initialState) => {\n    let state = initialState;\n    let listeners = [];\n    const getState = () => state;\n    const subscribe = (callback) => listeners.push(callback);\n    const notify = (newState) => {\n        listeners.forEach((lis) => lis(newState));\n    };\n    const dispatch = (action) => {\n        state = reducer(action, state);\n        notify(state);\n    };\n    return { subscribe, dispatch };\n};\n//================================\nconst initialState = {\n    currentPokemon: {\n        id: 1,\n        name: '',\n        img: '',\n        icon: '',\n        types: [],\n        stats: [],\n        moves: [],\n    },\n    error: '',\n    loading: false,\n    favorites: [],\n};\nconst generateStore = () => {\n    return createStore(_reducer__WEBPACK_IMPORTED_MODULE_0__.pokeReducer, initialState);\n};\n\n\n//# sourceURL=webpack://pokedex/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pokeReducer\": () => /* binding */ pokeReducer\n/* harmony export */ });\nconst pokeReducer = (action, state) => {\n    const { type, payload } = action;\n    switch (type) {\n        case 'SET_CURRENT_POKEMON':\n            return { ...state, currentPokemon: payload, loading: false, error: '' };\n        case 'LOADING':\n            return { ...state, loading: true };\n        case 'SET_ERROR':\n            return {\n                ...state,\n                error: payload,\n                loading: false,\n            };\n        case 'SET_FAVORITE':\n            return {\n                ...state,\n                favorites: [...state.favorites, payload],\n            };\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack://pokedex/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/utils/getPokemonData.ts":
/*!*************************************!*\
  !*** ./src/utils/getPokemonData.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPokemonData\": () => /* binding */ getPokemonData\n/* harmony export */ });\nconst getPokemonData = async (id) => {\n    const url = 'https://pokeapi.co/api/v2/pokemon/';\n    try {\n        const response = await fetch(`${url}${id}`);\n        const data = await response.json();\n        return {\n            id: data.id,\n            name: data.name,\n            img: data.sprites.other['official-artwork'].front_default,\n            icon: data.sprites.front_default,\n            types: data.types,\n            stats: data.stats,\n            moves: data.moves,\n        };\n    }\n    catch (error) {\n        return error.message;\n    }\n};\n\n\n//# sourceURL=webpack://pokedex/./src/utils/getPokemonData.ts?");

/***/ }),

/***/ "./src/utils/getTypeColor.ts":
/*!***********************************!*\
  !*** ./src/utils/getTypeColor.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTypeColor\": () => /* binding */ getTypeColor\n/* harmony export */ });\nconst getTypeColor = (type) => {\n    switch (type) {\n        case 'normal':\n            return { background: '#A8A090', color: 'white' };\n        case 'fighting':\n            return { background: '#A05038', color: 'white' };\n        case 'flying':\n            return { background: '#98A8F0', color: 'black' };\n        case 'poison':\n            return { background: '#B058A0', color: 'white' };\n        case 'ground':\n            return { background: '#E9D6A4', color: 'black' };\n        case 'rock':\n            return { background: '#B8A058', color: 'white' };\n        case 'bug':\n            return { background: '#A8B820', color: 'black' };\n        case 'ghost':\n            return { background: '#6060B0', color: 'white' };\n        case 'steel':\n            return { background: '#A8A8C0', color: 'black' };\n        case 'fire':\n            return { background: '#F05030', color: 'white' };\n        case 'water':\n            return { background: '#3899F8', color: 'black' };\n        case 'grass':\n            return { background: '#78C850', color: 'black' };\n        case 'electric':\n            return { background: '#F8D030', color: 'black' };\n        case 'psychic':\n            return { background: '#F870A0', color: 'black' };\n        case 'ice':\n            return { background: '#58C8E0', color: 'white' };\n        case 'dragon':\n            return { background: '#7860E0', color: 'white' };\n        case 'dark':\n            return { background: '#7A5848', color: 'white' };\n        case 'fairy':\n            return { background: '#E79FE7', color: 'white' };\n    }\n};\n\n\n//# sourceURL=webpack://pokedex/./src/utils/getTypeColor.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;