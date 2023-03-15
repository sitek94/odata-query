(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __classPrivateFieldIn;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    __classPrivateFieldIn = function (state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
});

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = tslib_1.__importDefault(require("./index"));
window.buildQuery = index_1.default;

},{"./index":3,"tslib":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITEM_ROOT = exports.decimal = exports.alias = exports.json = exports.binary = exports.duration = exports.guid = exports.raw = exports.StandardAggregateMethods = void 0;
var tslib_1 = require("tslib");
var COMPARISON_OPERATORS = ['eq', 'ne', 'gt', 'ge', 'lt', 'le'];
var LOGICAL_OPERATORS = ['and', 'or', 'not'];
var COLLECTION_OPERATORS = ['any', 'all'];
var BOOLEAN_FUNCTIONS = ['startswith', 'endswith', 'contains'];
var SUPPORTED_EXPAND_PROPERTIES = [
    'expand',
    'levels',
    'select',
    'skip',
    'top',
    'count',
    'orderby',
    'filter',
];
var FUNCTION_REGEX = /\((.*)\)/;
var INDEXOF_REGEX = /(?!indexof)\((\w+)\)/;
var StandardAggregateMethods;
(function (StandardAggregateMethods) {
    StandardAggregateMethods["sum"] = "sum";
    StandardAggregateMethods["min"] = "min";
    StandardAggregateMethods["max"] = "max";
    StandardAggregateMethods["average"] = "average";
    StandardAggregateMethods["countdistinct"] = "countdistinct";
})(StandardAggregateMethods = exports.StandardAggregateMethods || (exports.StandardAggregateMethods = {}));
var raw = function (value) { return ({ type: 'raw', value: value }); };
exports.raw = raw;
var guid = function (value) { return ({ type: 'guid', value: value }); };
exports.guid = guid;
var duration = function (value) { return ({ type: 'duration', value: value }); };
exports.duration = duration;
var binary = function (value) { return ({ type: 'binary', value: value }); };
exports.binary = binary;
var json = function (value) { return ({ type: 'json', value: value }); };
exports.json = json;
var alias = function (name, value) { return ({ type: 'alias', name: name, value: value }); };
exports.alias = alias;
var decimal = function (value) { return ({ type: 'decimal', value: value }); };
exports.decimal = decimal;
exports.ITEM_ROOT = "";
function default_1(_a) {
    var _b = _a === void 0 ? {} : _a, $select = _b.select, $search = _b.search, $skiptoken = _b.skiptoken, $format = _b.format, top = _b.top, skip = _b.skip, filter = _b.filter, transform = _b.transform, orderBy = _b.orderBy, key = _b.key, count = _b.count, expand = _b.expand, action = _b.action, func = _b.func;
    var path = '';
    var aliases = [];
    var params = {};
    // key is not (null, undefined)
    if (key != undefined) {
        path += "(".concat(handleValue(key, aliases), ")");
    }
    if (filter || typeof count === 'object')
        params.$filter = buildFilter(typeof count === 'object' ? count : filter, aliases);
    if (transform)
        params.$apply = buildTransforms(transform);
    if (expand)
        params.$expand = buildExpand(expand);
    if (orderBy)
        params.$orderby = buildOrderBy(orderBy);
    if (count) {
        if (typeof count === 'boolean') {
            params.$count = true;
        }
        else {
            path += '/$count';
        }
    }
    if (typeof top === 'number') {
        params.$top = top;
    }
    if (typeof skip === 'number') {
        params.$skip = skip;
    }
    if (action) {
        path += "/".concat(action);
    }
    if (func) {
        if (typeof func === 'string') {
            path += "/".concat(func);
        }
        else if (typeof func === 'object') {
            var funcName = Object.keys(func)[0];
            var funcArgs = handleValue(func[funcName], aliases);
            path += "/".concat(funcName);
            if (funcArgs !== "") {
                path += "(".concat(funcArgs, ")");
            }
        }
    }
    if (aliases.length > 0) {
        Object.assign(params, aliases.reduce(function (acc, alias) {
            var _a;
            return Object.assign(acc, (_a = {}, _a["@".concat(alias.name)] = handleValue(alias.value), _a));
        }, {}));
    }
    return buildUrl(path, tslib_1.__assign({ $select: $select, $search: $search, $skiptoken: $skiptoken, $format: $format }, params));
}
exports.default = default_1;
function renderPrimitiveValue(key, val, aliases) {
    if (aliases === void 0) { aliases = []; }
    return "".concat(key, " eq ").concat(handleValue(val, aliases));
}
function buildFilter(filters, aliases, propPrefix) {
    if (filters === void 0) { filters = {}; }
    if (aliases === void 0) { aliases = []; }
    if (propPrefix === void 0) { propPrefix = ''; }
    return (Array.isArray(filters) ? filters : [filters])
        .reduce(function (acc, filter) {
        if (filter) {
            var builtFilter = buildFilterCore(filter, aliases, propPrefix);
            if (builtFilter) {
                acc.push(builtFilter);
            }
        }
        return acc;
    }, []).join(' and ');
    function buildFilterCore(filter, aliases, propPrefix) {
        if (filter === void 0) { filter = {}; }
        if (aliases === void 0) { aliases = []; }
        if (propPrefix === void 0) { propPrefix = ''; }
        var filterExpr = "";
        if (typeof filter === 'string') {
            // Use raw filter string
            filterExpr = filter;
        }
        else if (filter && typeof filter === 'object') {
            var filtersArray = Object.keys(filter).reduce(function (result, filterKey) {
                var value = filter[filterKey];
                if (value === undefined) {
                    return result;
                }
                var propName = '';
                if (propPrefix) {
                    if (filterKey === exports.ITEM_ROOT) {
                        propName = propPrefix;
                    }
                    else if (INDEXOF_REGEX.test(filterKey)) {
                        propName = filterKey.replace(INDEXOF_REGEX, function (_, $1) { return $1.trim() === exports.ITEM_ROOT ? "(".concat(propPrefix, ")") : "(".concat(propPrefix, "/").concat($1.trim(), ")"); });
                    }
                    else if (FUNCTION_REGEX.test(filterKey)) {
                        propName = filterKey.replace(FUNCTION_REGEX, function (_, $1) { return $1.trim() === exports.ITEM_ROOT ? "(".concat(propPrefix, ")") : "(".concat(propPrefix, "/").concat($1.trim(), ")"); });
                    }
                    else {
                        propName = "".concat(propPrefix, "/").concat(filterKey);
                    }
                }
                else {
                    propName = filterKey;
                }
                if (filterKey === exports.ITEM_ROOT && Array.isArray(value)) {
                    return result.concat(value.map(function (arrayValue) { return renderPrimitiveValue(propName, arrayValue); }));
                }
                if (['number', 'string', 'boolean'].indexOf(typeof value) !== -1 ||
                    value instanceof Date ||
                    value === null) {
                    // Simple key/value handled as equals operator
                    result.push(renderPrimitiveValue(propName, value, aliases));
                }
                else if (Array.isArray(value)) {
                    var op_1 = filterKey;
                    var builtFilters = value
                        .map(function (v) { return buildFilter(v, aliases, propPrefix); })
                        .filter(function (f) { return f; })
                        .map(function (f) { return (LOGICAL_OPERATORS.indexOf(op_1) !== -1 ? "(".concat(f, ")") : f); });
                    if (builtFilters.length) {
                        if (LOGICAL_OPERATORS.indexOf(op_1) !== -1) {
                            if (builtFilters.length) {
                                if (op_1 === 'not') {
                                    result.push(parseNot(builtFilters));
                                }
                                else {
                                    result.push("(".concat(builtFilters.join(" ".concat(op_1, " ")), ")"));
                                }
                            }
                        }
                        else {
                            result.push(builtFilters.join(" ".concat(op_1, " ")));
                        }
                    }
                }
                else if (LOGICAL_OPERATORS.indexOf(propName) !== -1) {
                    var op = propName;
                    var builtFilters = Object.keys(value).map(function (valueKey) {
                        var _a;
                        return buildFilterCore((_a = {}, _a[valueKey] = value[valueKey], _a));
                    });
                    if (builtFilters.length) {
                        if (op === 'not') {
                            result.push(parseNot(builtFilters));
                        }
                        else {
                            result.push("(".concat(builtFilters.join(" ".concat(op, " ")), ")"));
                        }
                    }
                }
                else if (typeof value === 'object') {
                    if ('type' in value) {
                        result.push(renderPrimitiveValue(propName, value, aliases));
                    }
                    else {
                        var operators = Object.keys(value);
                        operators.forEach(function (op) {
                            if (value[op] === undefined) {
                                return;
                            }
                            if (COMPARISON_OPERATORS.indexOf(op) !== -1) {
                                result.push("".concat(propName, " ").concat(op, " ").concat(handleValue(value[op], aliases)));
                            }
                            else if (LOGICAL_OPERATORS.indexOf(op) !== -1) {
                                if (Array.isArray(value[op])) {
                                    result.push(value[op]
                                        .map(function (v) { return '(' + buildFilterCore(v, aliases, propName) + ')'; })
                                        .join(" ".concat(op, " ")));
                                }
                                else {
                                    result.push('(' + buildFilterCore(value[op], aliases, propName) + ')');
                                }
                            }
                            else if (COLLECTION_OPERATORS.indexOf(op) !== -1) {
                                var collectionClause = buildCollectionClause(filterKey.toLowerCase(), value[op], op, propName);
                                if (collectionClause) {
                                    result.push(collectionClause);
                                }
                            }
                            else if (op === 'has') {
                                result.push("".concat(propName, " ").concat(op, " ").concat(handleValue(value[op], aliases)));
                            }
                            else if (op === 'in') {
                                var resultingValues = Array.isArray(value[op])
                                    ? value[op]
                                    : value[op].value.map(function (typedValue) { return ({
                                        type: value[op].type,
                                        value: typedValue,
                                    }); });
                                result.push(propName + ' in (' + resultingValues.map(function (v) { return handleValue(v, aliases); }).join(',') + ')');
                            }
                            else if (BOOLEAN_FUNCTIONS.indexOf(op) !== -1) {
                                // Simple boolean functions (startswith, endswith, contains)
                                result.push("".concat(op, "(").concat(propName, ",").concat(handleValue(value[op], aliases), ")"));
                            }
                            else {
                                // Nested property
                                var filter_1 = buildFilterCore(value, aliases, propName);
                                if (filter_1) {
                                    result.push(filter_1);
                                }
                            }
                        });
                    }
                }
                else {
                    throw new Error("Unexpected value type: ".concat(value));
                }
                return result;
            }, []);
            filterExpr = filtersArray.join(' and ');
        } /* else {
            throw new Error(`Unexpected filters type: ${filter}`);
          } */
        return filterExpr;
    }
    function buildCollectionClause(lambdaParameter, value, op, propName) {
        var clause = '';
        if (typeof value === 'string' || value instanceof String) {
            clause = getStringCollectionClause(lambdaParameter, value, op, propName);
        }
        else if (value) {
            // normalize {any:[{prop1: 1}, {prop2: 1}]} --> {any:{prop1: 1, prop2: 1}}; same for 'all',
            // simple values collection: {any:[{'': 'simpleVal1'}, {'': 'simpleVal2'}]} --> {any:{'': ['simpleVal1', 'simpleVal2']}}; same for 'all',
            var filterValue = Array.isArray(value) ?
                value.reduce(function (acc, item) {
                    if (item.hasOwnProperty(exports.ITEM_ROOT)) {
                        if (!acc.hasOwnProperty(exports.ITEM_ROOT)) {
                            acc[exports.ITEM_ROOT] = [];
                        }
                        acc[exports.ITEM_ROOT].push(item[exports.ITEM_ROOT]);
                        return acc;
                    }
                    return tslib_1.__assign(tslib_1.__assign({}, acc), item);
                }, {}) : value;
            var filter = buildFilterCore(filterValue, aliases, lambdaParameter);
            clause = "".concat(propName, "/").concat(op, "(").concat(filter ? "".concat(lambdaParameter, ":").concat(filter) : '', ")");
        }
        return clause;
    }
}
function getStringCollectionClause(lambdaParameter, value, collectionOperator, propName) {
    var clause = '';
    var conditionOperator = collectionOperator == 'all' ? 'ne' : 'eq';
    clause = "".concat(propName, "/").concat(collectionOperator, "(").concat(lambdaParameter, ": ").concat(lambdaParameter, " ").concat(conditionOperator, " '").concat(value, "')");
    return clause;
}
function escapeIllegalChars(string) {
    string = string.replace(/%/g, '%25');
    string = string.replace(/\+/g, '%2B');
    string = string.replace(/\//g, '%2F');
    string = string.replace(/\?/g, '%3F');
    string = string.replace(/#/g, '%23');
    string = string.replace(/&/g, '%26');
    string = string.replace(/'/g, "''");
    return string;
}
function handleValue(value, aliases) {
    if (typeof value === 'string') {
        return "'".concat(escapeIllegalChars(value), "'");
    }
    else if (value instanceof Date) {
        return value.toISOString();
    }
    else if (typeof value === 'number') {
        return value;
    }
    else if (Array.isArray(value)) {
        return "[".concat(value.map(function (d) { return handleValue(d); }).join(','), "]");
    }
    else if (value === null) {
        return value;
    }
    else if (typeof value === 'object') {
        switch (value.type) {
            case 'raw':
            case 'guid':
                return value.value;
            case 'duration':
                return "duration'".concat(value.value, "'");
            case 'binary':
                return "binary'".concat(value.value, "'");
            case 'alias':
                // Store
                if (Array.isArray(aliases))
                    aliases.push(value);
                return "@".concat(value.name);
            case 'json':
                return escape(JSON.stringify(value.value));
            case 'decimal':
                return "".concat(value.value, "M");
            default:
                return Object.entries(value)
                    .filter(function (_a) {
                    var v = _a[1];
                    return v !== undefined;
                })
                    .map(function (_a) {
                    var k = _a[0], v = _a[1];
                    return "".concat(k, "=").concat(handleValue(v, aliases));
                }).join(',');
        }
    }
    return value;
}
function buildExpand(expands) {
    if (typeof expands === 'number') {
        return expands;
    }
    else if (typeof expands === 'string') {
        if (expands.indexOf('/') === -1) {
            return expands;
        }
        // Change `Foo/Bar/Baz` to `Foo($expand=Bar($expand=Baz))`
        return expands
            .split('/')
            .reverse()
            .reduce(function (results, item, index, arr) {
            if (index === 0) {
                // Inner-most item
                return "$expand=".concat(item);
            }
            else if (index === arr.length - 1) {
                // Outer-most item, don't add `$expand=` prefix (added above)
                return "".concat(item, "(").concat(results, ")");
            }
            else {
                // Other items
                return "$expand=".concat(item, "(").concat(results, ")");
            }
        }, '');
    }
    else if (Array.isArray(expands)) {
        return "".concat(expands.map(function (e) { return buildExpand(e); }).join(','));
    }
    else if (typeof expands === 'object') {
        var expandKeys = Object.keys(expands);
        if (expandKeys.some(function (key) { return SUPPORTED_EXPAND_PROPERTIES.indexOf(key.toLowerCase()) !== -1; })) {
            return expandKeys
                .map(function (key) {
                var value;
                switch (key) {
                    case 'filter':
                        value = buildFilter(expands[key]);
                        break;
                    case 'orderBy':
                        value = buildOrderBy(expands[key]);
                        break;
                    case 'levels':
                    case 'count':
                    case 'skip':
                    case 'top':
                        value = "".concat(expands[key]);
                        break;
                    default:
                        value = buildExpand(expands[key]);
                }
                return "$".concat(key.toLowerCase(), "=").concat(value);
            })
                .join(';');
        }
        else {
            return expandKeys
                .map(function (key) {
                var builtExpand = buildExpand(expands[key]);
                return builtExpand ? "".concat(key, "(").concat(builtExpand, ")") : key;
            })
                .join(',');
        }
    }
    return "";
}
function buildTransforms(transforms) {
    // Wrap single object an array for simplified processing
    var transformsArray = Array.isArray(transforms) ? transforms : [transforms];
    var transformsResult = transformsArray.reduce(function (result, transform) {
        var aggregate = transform.aggregate, filter = transform.filter, groupBy = transform.groupBy, rest = tslib_1.__rest(transform, ["aggregate", "filter", "groupBy"]);
        // TODO: support as many of the following:
        //   topcount, topsum, toppercent,
        //   bottomsum, bottomcount, bottompercent,
        //   identity, concat, expand, search, compute, isdefined
        var unsupportedKeys = Object.keys(rest);
        if (unsupportedKeys.length) {
            throw new Error("Unsupported transform(s): ".concat(unsupportedKeys));
        }
        if (aggregate) {
            result.push("aggregate(".concat(buildAggregate(aggregate), ")"));
        }
        if (filter) {
            var builtFilter = buildFilter(filter);
            if (builtFilter) {
                result.push("filter(".concat(buildFilter(builtFilter), ")"));
            }
        }
        if (groupBy) {
            result.push("groupby(".concat(buildGroupBy(groupBy), ")"));
        }
        return result;
    }, []);
    return transformsResult.join('/') || undefined;
}
function buildAggregate(aggregate) {
    // Wrap single object in an array for simplified processing
    var aggregateArray = Array.isArray(aggregate) ? aggregate : [aggregate];
    return aggregateArray
        .map(function (aggregateItem) {
        return typeof aggregateItem === "string"
            ? aggregateItem
            : Object.keys(aggregateItem).map(function (aggregateKey) {
                var aggregateValue = aggregateItem[aggregateKey];
                // TODO: Are these always required?  Can/should we default them if so?
                if (!aggregateValue.with) {
                    throw new Error("'with' property required for '".concat(aggregateKey, "'"));
                }
                if (!aggregateValue.as) {
                    throw new Error("'as' property required for '".concat(aggregateKey, "'"));
                }
                return "".concat(aggregateKey, " with ").concat(aggregateValue.with, " as ").concat(aggregateValue.as);
            });
    })
        .join(',');
}
function buildGroupBy(groupBy) {
    if (!groupBy.properties) {
        throw new Error("'properties' property required for groupBy");
    }
    var result = "(".concat(groupBy.properties.join(','), ")");
    if (groupBy.transform) {
        result += ",".concat(buildTransforms(groupBy.transform));
    }
    return result;
}
function buildOrderBy(orderBy, prefix) {
    if (prefix === void 0) { prefix = ''; }
    if (Array.isArray(orderBy)) {
        return orderBy
            .map(function (value) {
            return (Array.isArray(value) && value.length === 2 && ['asc', 'desc'].indexOf(value[1]) !== -1) ? value.join(' ') : value;
        })
            .map(function (v) { return "".concat(prefix).concat(String(v)); }).join(',');
    }
    else if (typeof orderBy === 'object') {
        return Object.entries(orderBy)
            .map(function (_a) {
            var k = _a[0], v = _a[1];
            return buildOrderBy(v, "".concat(k, "/"));
        })
            .map(function (v) { return "".concat(prefix).concat(v); }).join(',');
    }
    return "".concat(prefix).concat(String(orderBy));
}
function buildUrl(path, params) {
    // This can be refactored using URL API. But IE does not support it.
    var queries = Object.getOwnPropertyNames(params)
        .filter(function (key) { return params[key] !== undefined && params[key] !== ''; })
        .map(function (key) { return "".concat(key, "=").concat(params[key]); });
    return queries.length ? "".concat(path, "?").concat(queries.join('&')) : path;
}
function parseNot(builtFilters) {
    return "not(".concat(builtFilters.join(' and '), ")");
}

},{"tslib":1}]},{},[2]);