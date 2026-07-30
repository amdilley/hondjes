(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/workspace/hondjes/app/hooks/useMounted.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMounted",
    ()=>useMounted
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useMounted(callback) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(callback, []);
}
_s(useMounted, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/workspace/hondjes/app/components/Scene/Scene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scene",
    ()=>Scene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$hooks$2f$useMounted$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/app/hooks/useMounted.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Scene({ children }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$hooks$2f$useMounted$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"])({
        "Scene.useMounted": ()=>{
            if (ref.current) {
                const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]();
                const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
                const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
                renderer.setSize(window.innerWidth, window.innerWidth);
                ref.current.append(renderer.domElement);
                camera.position.z = 5;
                scene.add(cube);
                renderer.render(scene, camera);
                const handleResize = {
                    "Scene.useMounted.handleResize": ()=>{
                        const width = window.innerWidth;
                        const height = window.innerHeight;
                        camera.aspect = width / height;
                        camera.updateProjectionMatrix();
                        renderer.setSize(width, height);
                    }
                }["Scene.useMounted.handleResize"];
                handleResize();
                window.addEventListener("resize", handleResize);
                return ({
                    "Scene.useMounted": ()=>{
                        window.removeEventListener("resize", handleResize);
                    }
                })["Scene.useMounted"];
            }
        }
    }["Scene.useMounted"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref
    }, void 0, false, {
        fileName: "[project]/workspace/hondjes/app/components/Scene/Scene.tsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
_s(Scene, "msZYCtNIecy4G+UnORSiVDUUdu8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$hooks$2f$useMounted$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"]
    ];
});
_c = Scene;
var _c;
__turbopack_context__.k.register(_c, "Scene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=workspace_hondjes_app_1c274es._.js.map