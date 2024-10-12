"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/webhooks/route";
exports.ids = ["app/api/webhooks/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhooks%2Froute&page=%2Fapi%2Fwebhooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhooks%2Froute.js&appDir=C%3A%5CReact%20Project%5Cstripe-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CReact%20Project%5Cstripe-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhooks%2Froute&page=%2Fapi%2Fwebhooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhooks%2Froute.js&appDir=C%3A%5CReact%20Project%5Cstripe-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CReact%20Project%5Cstripe-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_React_Project_stripe_app_app_api_webhooks_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/webhooks/route.js */ \"(rsc)/./app/api/webhooks/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/webhooks/route\",\n        pathname: \"/api/webhooks\",\n        filename: \"route\",\n        bundlePath: \"app/api/webhooks/route\"\n    },\n    resolvedPagePath: \"C:\\\\React Project\\\\stripe-app\\\\app\\\\api\\\\webhooks\\\\route.js\",\n    nextConfigOutput,\n    userland: C_React_Project_stripe_app_app_api_webhooks_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/webhooks/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ3ZWJob29rcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGd2ViaG9va3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ3ZWJob29rcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDUmVhY3QlMjBQcm9qZWN0JTVDc3RyaXBlLWFwcCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1JlYWN0JTIwUHJvamVjdCU1Q3N0cmlwZS1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1c7QUFDeEY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJpcGUtYXBwLz85OGMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFJlYWN0IFByb2plY3RcXFxcc3RyaXBlLWFwcFxcXFxhcHBcXFxcYXBpXFxcXHdlYmhvb2tzXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS93ZWJob29rcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3dlYmhvb2tzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS93ZWJob29rcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFJlYWN0IFByb2plY3RcXFxcc3RyaXBlLWFwcFxcXFxhcHBcXFxcYXBpXFxcXHdlYmhvb2tzXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS93ZWJob29rcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhooks%2Froute&page=%2Fapi%2Fwebhooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhooks%2Froute.js&appDir=C%3A%5CReact%20Project%5Cstripe-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CReact%20Project%5Cstripe-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/webhooks/route.js":
/*!***********************************!*\
  !*** ./app/api/webhooks/route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"(rsc)/./node_modules/stripe/esm/stripe.esm.node.js\");\n/* harmony import */ var _app_lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/db */ \"(rsc)/./app/lib/db.js\");\n\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](process.env.STRIPE_SECRET_KEY);\n// No need for config in Next.js 13.4 and above, as it's deprecated.\nasync function POST(req) {\n    const sig = req.headers.get(\"stripe-signature\");\n    let event;\n    try {\n        // Get raw request body as a string\n        const buf = await req.text();\n        // Verify the webhook signature\n        event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);\n    } catch (err) {\n        console.error(`Webhook error: ${err.message}`);\n        return new Response(`Webhook Error: ${err.message}`, {\n            status: 400\n        });\n    }\n    // Handle the event types\n    switch(event.type){\n        case \"checkout.session.completed\":\n            const session = event.data.object;\n            const { metadata, customer_details } = session;\n            const insertText = `INSERT INTO registrations (parent_name, parent_email, parent_phone, child1_name,\r\n      child1_id, child1_birth_date, child1_gender, child1_fees, child2_name, child2_id, child2_birth_date,\r\n       child2_gender, child2_fees) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;\n            // Extract metadata (this contains the form data)\n            const insertValues = [\n                metadata.parentName,\n                customer_details.email,\n                metadata.phoneNumber,\n                metadata.childName,\n                metadata.childId,\n                metadata.dob,\n                metadata.gender,\n                metadata.fees,\n                metadata.childName2 || null,\n                metadata.childId2 || null,\n                metadata.dob2 || null,\n                metadata.gender2 || null,\n                metadata.fees2 || null\n            ];\n            await (0,_app_lib_db__WEBPACK_IMPORTED_MODULE_1__.query)(insertText, insertValues);\n            break;\n        default:\n            console.log(`Unhandled event type: ${event.type}`);\n    }\n    // Return a response to acknowledge receipt of the event\n    return new Response(JSON.stringify({\n        received: true\n    }), {\n        status: 200,\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3dlYmhvb2tzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUNTO0FBRXJDLE1BQU1FLFNBQVMsSUFBSUYsOENBQU1BLENBQUNHLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCO0FBRXZELG9FQUFvRTtBQUU3RCxlQUFlQyxLQUFLQyxHQUFHO0lBQzVCLE1BQU1DLE1BQU1ELElBQUlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQzVCLElBQUlDO0lBRUosSUFBSTtRQUNGLG1DQUFtQztRQUNuQyxNQUFNQyxNQUFNLE1BQU1MLElBQUlNLElBQUk7UUFFMUIsK0JBQStCO1FBQy9CRixRQUFRVCxPQUFPWSxRQUFRLENBQUNDLGNBQWMsQ0FDcENILEtBQ0FKLEtBQ0FMLFFBQVFDLEdBQUcsQ0FBQ1kscUJBQXFCO0lBRXJDLEVBQUUsT0FBT0MsS0FBSztRQUNaQyxRQUFRQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLElBQUlHLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sSUFBSUMsU0FBUyxDQUFDLGVBQWUsRUFBRUosSUFBSUcsT0FBTyxDQUFDLENBQUMsRUFBRTtZQUFFRSxRQUFRO1FBQUk7SUFDckU7SUFFQSx5QkFBeUI7SUFDekIsT0FBUVgsTUFBTVksSUFBSTtRQUNoQixLQUFLO1lBQ0gsTUFBTUMsVUFBVWIsTUFBTWMsSUFBSSxDQUFDQyxNQUFNO1lBQ2pDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHSjtZQUV2QyxNQUFNSyxhQUFhLENBQUM7O2tHQUV3RSxDQUFDO1lBRTdGLGlEQUFpRDtZQUNqRCxNQUFNQyxlQUFlO2dCQUNuQkgsU0FBU0ksVUFBVTtnQkFDbkJILGlCQUFpQkksS0FBSztnQkFDdEJMLFNBQVNNLFdBQVc7Z0JBQ3BCTixTQUFTTyxTQUFTO2dCQUNsQlAsU0FBU1EsT0FBTztnQkFDaEJSLFNBQVNTLEdBQUc7Z0JBQ1pULFNBQVNVLE1BQU07Z0JBQ2ZWLFNBQVNXLElBQUk7Z0JBQ2JYLFNBQVNZLFVBQVUsSUFBSTtnQkFDdkJaLFNBQVNhLFFBQVEsSUFBSTtnQkFDckJiLFNBQVNjLElBQUksSUFBSTtnQkFDakJkLFNBQVNlLE9BQU8sSUFBSTtnQkFDcEJmLFNBQVNnQixLQUFLLElBQUk7YUFDbkI7WUFFRCxNQUFNMUMsa0RBQUtBLENBQUM0QixZQUFZQztZQUV4QjtRQUVGO1lBQ0VaLFFBQVEwQixHQUFHLENBQUMsQ0FBQyxzQkFBc0IsRUFBRWpDLE1BQU1ZLElBQUksQ0FBQyxDQUFDO0lBQ3JEO0lBRUEsd0RBQXdEO0lBQ3hELE9BQU8sSUFBSUYsU0FBU3dCLEtBQUtDLFNBQVMsQ0FBQztRQUFFQyxVQUFVO0lBQUssSUFBSTtRQUN0RHpCLFFBQVE7UUFDUmIsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJpcGUtYXBwLy4vYXBwL2FwaS93ZWJob29rcy9yb3V0ZS5qcz80OWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xyXG5pbXBvcnQgeyBxdWVyeSB9IGZyb20gXCJAL2FwcC9saWIvZGJcIjtcclxuXHJcbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xyXG5cclxuLy8gTm8gbmVlZCBmb3IgY29uZmlnIGluIE5leHQuanMgMTMuNCBhbmQgYWJvdmUsIGFzIGl0J3MgZGVwcmVjYXRlZC5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIGNvbnN0IHNpZyA9IHJlcS5oZWFkZXJzLmdldChcInN0cmlwZS1zaWduYXR1cmVcIik7XHJcbiAgbGV0IGV2ZW50O1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gR2V0IHJhdyByZXF1ZXN0IGJvZHkgYXMgYSBzdHJpbmdcclxuICAgIGNvbnN0IGJ1ZiA9IGF3YWl0IHJlcS50ZXh0KCk7XHJcblxyXG4gICAgLy8gVmVyaWZ5IHRoZSB3ZWJob29rIHNpZ25hdHVyZVxyXG4gICAgZXZlbnQgPSBzdHJpcGUud2ViaG9va3MuY29uc3RydWN0RXZlbnQoXHJcbiAgICAgIGJ1ZixcclxuICAgICAgc2lnLFxyXG4gICAgICBwcm9jZXNzLmVudi5TVFJJUEVfV0VCSE9PS19TRUNSRVRcclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBXZWJob29rIGVycm9yOiAke2Vyci5tZXNzYWdlfWApO1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShgV2ViaG9vayBFcnJvcjogJHtlcnIubWVzc2FnZX1gLCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gSGFuZGxlIHRoZSBldmVudCB0eXBlc1xyXG4gIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgY2FzZSBcImNoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkXCI6XHJcbiAgICAgIGNvbnN0IHNlc3Npb24gPSBldmVudC5kYXRhLm9iamVjdDtcclxuICAgICAgY29uc3QgeyBtZXRhZGF0YSwgY3VzdG9tZXJfZGV0YWlscyB9ID0gc2Vzc2lvbjtcclxuXHJcbiAgICAgIGNvbnN0IGluc2VydFRleHQgPSBgSU5TRVJUIElOVE8gcmVnaXN0cmF0aW9ucyAocGFyZW50X25hbWUsIHBhcmVudF9lbWFpbCwgcGFyZW50X3Bob25lLCBjaGlsZDFfbmFtZSxcclxuICAgICAgY2hpbGQxX2lkLCBjaGlsZDFfYmlydGhfZGF0ZSwgY2hpbGQxX2dlbmRlciwgY2hpbGQxX2ZlZXMsIGNoaWxkMl9uYW1lLCBjaGlsZDJfaWQsIGNoaWxkMl9iaXJ0aF9kYXRlLFxyXG4gICAgICAgY2hpbGQyX2dlbmRlciwgY2hpbGQyX2ZlZXMpIFZBTFVFUyAoJDEsICQyLCAkMywgJDQsICQ1LCAkNiwgJDcsICQ4LCAkOSwgJDEwLCAkMTEsICQxMiwgJDEzKWA7XHJcblxyXG4gICAgICAvLyBFeHRyYWN0IG1ldGFkYXRhICh0aGlzIGNvbnRhaW5zIHRoZSBmb3JtIGRhdGEpXHJcbiAgICAgIGNvbnN0IGluc2VydFZhbHVlcyA9IFtcclxuICAgICAgICBtZXRhZGF0YS5wYXJlbnROYW1lLFxyXG4gICAgICAgIGN1c3RvbWVyX2RldGFpbHMuZW1haWwsXHJcbiAgICAgICAgbWV0YWRhdGEucGhvbmVOdW1iZXIsXHJcbiAgICAgICAgbWV0YWRhdGEuY2hpbGROYW1lLFxyXG4gICAgICAgIG1ldGFkYXRhLmNoaWxkSWQsXHJcbiAgICAgICAgbWV0YWRhdGEuZG9iLFxyXG4gICAgICAgIG1ldGFkYXRhLmdlbmRlcixcclxuICAgICAgICBtZXRhZGF0YS5mZWVzLFxyXG4gICAgICAgIG1ldGFkYXRhLmNoaWxkTmFtZTIgfHwgbnVsbCxcclxuICAgICAgICBtZXRhZGF0YS5jaGlsZElkMiB8fCBudWxsLFxyXG4gICAgICAgIG1ldGFkYXRhLmRvYjIgfHwgbnVsbCxcclxuICAgICAgICBtZXRhZGF0YS5nZW5kZXIyIHx8IG51bGwsXHJcbiAgICAgICAgbWV0YWRhdGEuZmVlczIgfHwgbnVsbCxcclxuICAgICAgXTtcclxuXHJcbiAgICAgIGF3YWl0IHF1ZXJ5KGluc2VydFRleHQsIGluc2VydFZhbHVlcyk7XHJcblxyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBjb25zb2xlLmxvZyhgVW5oYW5kbGVkIGV2ZW50IHR5cGU6ICR7ZXZlbnQudHlwZX1gKTtcclxuICB9XHJcblxyXG4gIC8vIFJldHVybiBhIHJlc3BvbnNlIHRvIGFja25vd2xlZGdlIHJlY2VpcHQgb2YgdGhlIGV2ZW50XHJcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IHJlY2VpdmVkOiB0cnVlIH0pLCB7XHJcbiAgICBzdGF0dXM6IDIwMCxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJTdHJpcGUiLCJxdWVyeSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsIlBPU1QiLCJyZXEiLCJzaWciLCJoZWFkZXJzIiwiZ2V0IiwiZXZlbnQiLCJidWYiLCJ0ZXh0Iiwid2ViaG9va3MiLCJjb25zdHJ1Y3RFdmVudCIsIlNUUklQRV9XRUJIT09LX1NFQ1JFVCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJSZXNwb25zZSIsInN0YXR1cyIsInR5cGUiLCJzZXNzaW9uIiwiZGF0YSIsIm9iamVjdCIsIm1ldGFkYXRhIiwiY3VzdG9tZXJfZGV0YWlscyIsImluc2VydFRleHQiLCJpbnNlcnRWYWx1ZXMiLCJwYXJlbnROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImNoaWxkTmFtZSIsImNoaWxkSWQiLCJkb2IiLCJnZW5kZXIiLCJmZWVzIiwiY2hpbGROYW1lMiIsImNoaWxkSWQyIiwiZG9iMiIsImdlbmRlcjIiLCJmZWVzMiIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWNlaXZlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/webhooks/route.js\n");

/***/ }),

/***/ "(rsc)/./app/lib/db.js":
/*!***********************!*\
  !*** ./app/lib/db.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   query: () => (/* binding */ query)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n// lib/db.js\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    connectionString: process.env.POSTGRES_URL\n});\nconst query = (text, params)=>pool.query(text, params);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFlBQVk7QUFDYztBQUUxQixNQUFNQyxPQUFPLElBQUlELG9DQUFJQSxDQUFDO0lBQ3BCRSxrQkFBa0JDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtBQUM1QztBQUVPLE1BQU1DLFFBQVEsQ0FBQ0MsTUFBTUMsU0FBV1AsS0FBS0ssS0FBSyxDQUFDQyxNQUFNQyxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyaXBlLWFwcC8uL2FwcC9saWIvZGIuanM/NmYwMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvZGIuanNcclxuaW1wb3J0IHsgUG9vbCB9IGZyb20gXCJwZ1wiO1xyXG5cclxuY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcclxuICBjb25uZWN0aW9uU3RyaW5nOiBwcm9jZXNzLmVudi5QT1NUR1JFU19VUkwsIC8vIEVuc3VyZSB0aGlzIGlzIHNldCBpbiB5b3VyIFZlcmNlbCBlbnZpcm9ubWVudFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBxdWVyeSA9ICh0ZXh0LCBwYXJhbXMpID0+IHBvb2wucXVlcnkodGV4dCwgcGFyYW1zKTtcclxuIl0sIm5hbWVzIjpbIlBvb2wiLCJwb29sIiwiY29ubmVjdGlvblN0cmluZyIsInByb2Nlc3MiLCJlbnYiLCJQT1NUR1JFU19VUkwiLCJxdWVyeSIsInRleHQiLCJwYXJhbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/stripe","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/object-inspect","vendor-chunks/has-symbols","vendor-chunks/function-bind","vendor-chunks/call-bind","vendor-chunks/side-channel","vendor-chunks/set-function-length","vendor-chunks/hasown","vendor-chunks/has-proto","vendor-chunks/has-property-descriptors","vendor-chunks/gopd","vendor-chunks/get-intrinsic","vendor-chunks/es-define-property","vendor-chunks/define-data-property"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhooks%2Froute&page=%2Fapi%2Fwebhooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhooks%2Froute.js&appDir=C%3A%5CReact%20Project%5Cstripe-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CReact%20Project%5Cstripe-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();