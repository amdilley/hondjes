(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/workspace/hondjes/app/components/Scene/SceneContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SceneContextProvider",
    ()=>SceneContextProvider,
    "useSceneContext",
    ()=>useSceneContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SceneContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useSceneContext() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SceneContext);
    if (!context) {
        throw new Error("Missing scene context");
    }
    return context;
}
_s(useSceneContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function SceneContextProvider({ children, camera, renderer, scene }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneContext.Provider, {
        value: {
            camera,
            renderer,
            scene
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/workspace/hondjes/app/components/Scene/SceneContext.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = SceneContextProvider;
var _c;
__turbopack_context__.k.register(_c, "SceneContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
    const [hasMounted, setHasMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMounted.useEffect": ()=>{
            setHasMounted(true);
            callback?.();
        }
    }["useMounted.useEffect"], []);
    return hasMounted;
}
_s(useMounted, "aiSd/DQPOnbbLLZZL0Xv/KtPBDg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/workspace/hondjes/app/components/elements/Cube.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cube",
    ()=>Cube
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$components$2f$Scene$2f$SceneContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/app/components/Scene/SceneContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$hooks$2f$useMounted$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/app/hooks/useMounted.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Cube({ color }) {
    _s();
    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"]();
    const material = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
        color
    });
    const cube = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
    const { camera, renderer, scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$components$2f$Scene$2f$SceneContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSceneContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$hooks$2f$useMounted$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"])({
        "Cube.useMounted": ()=>{
            scene.add(cube);
        }
    }["Cube.useMounted"]);
    const rotateCube = ()=>{
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(rotateCube);
    };
    rotateCube();
    return undefined;
}
_s(Cube, "aE3gI7uxf1o+37QVglv2r9SjZ1o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$components$2f$Scene$2f$SceneContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSceneContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$hooks$2f$useMounted$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"]
    ];
});
_c = Cube;
var _c;
__turbopack_context__.k.register(_c, "Cube");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$components$2f$Scene$2f$SceneContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/app/components/Scene/SceneContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Scene({ children }) {
    _s();
    const [camera, setCamera] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [renderer, setRenderer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [scene, setScene] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$hooks$2f$useMounted$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"])({
        "Scene.useMounted": ()=>{
            const _renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]();
            const _scene = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const _camera = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
            _renderer.setSize(window.innerWidth, window.innerWidth);
            window.document.body.append(_renderer.domElement);
            _camera.position.z = 5;
            _renderer.render(_scene, _camera);
            const handleResize = {
                "Scene.useMounted.handleResize": ()=>{
                    const width = window.innerWidth;
                    const height = window.innerHeight;
                    _camera.aspect = width / height;
                    _camera.updateProjectionMatrix();
                    _renderer.setSize(width, height);
                }
            }["Scene.useMounted.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            setCamera(_camera);
            setRenderer(_renderer);
            setScene(_scene);
            return ({
                "Scene.useMounted": ()=>{
                    window.removeEventListener("resize", handleResize);
                }
            })["Scene.useMounted"];
        }
    }["Scene.useMounted"]);
    if (camera === undefined || renderer === undefined || scene === undefined) {
        return;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$components$2f$Scene$2f$SceneContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneContextProvider"], {
        camera: camera,
        renderer: renderer,
        scene: scene,
        children: children
    }, void 0, false, {
        fileName: "[project]/workspace/hondjes/app/components/Scene/Scene.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(Scene, "gjlLZfLcK9PD6eckaPq6WQKMoNc=", false, function() {
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

//# sourceMappingURL=workspace_hondjes_app_0yykds2._.js.map