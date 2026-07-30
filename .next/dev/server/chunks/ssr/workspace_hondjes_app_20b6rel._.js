module.exports = [
"[project]/workspace/hondjes/app/components/Scene/SceneContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SceneContextProvider",
    ()=>SceneContextProvider,
    "useSceneContext",
    ()=>useSceneContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const SceneContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useSceneContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SceneContext);
    if (!context) {
        throw new Error("Missing scene context");
    }
    return context;
}
function SceneContextProvider({ children, camera, renderer, scene }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneContext.Provider, {
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
}),
"[project]/workspace/hondjes/app/hooks/useMounted.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMounted",
    ()=>useMounted
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useMounted(callback) {
    const [hasMounted, setHasMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setHasMounted(true);
        callback?.();
    }, []);
    return hasMounted;
}
}),
"[project]/workspace/hondjes/app/components/elements/Cube.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cube",
    ()=>Cube
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$components$2f$Scene$2f$SceneContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/app/components/Scene/SceneContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$hooks$2f$useMounted$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/app/hooks/useMounted.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Cube({ color, position = {} }) {
    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"]();
    const material = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
        color
    });
    const cube = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
    const { camera, renderer, scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$components$2f$Scene$2f$SceneContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneContext"])();
    if (position.x) {
        cube.position.x = position.x;
    }
    if (position.y) {
        cube.position.y = position.y;
    }
    if (position.z) {
        cube.position.z = position.z;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$hooks$2f$useMounted$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMounted"])(()=>{
        const lightColor = 0xffffff;
        const intensity = 3;
        const light = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"](lightColor, intensity);
        light.position.set(-1, 2, 4);
        scene.add(cube);
        scene.add(light);
    });
    const rotateCube = ()=>{
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(rotateCube);
    };
    rotateCube();
    return undefined;
}
}),
"[project]/workspace/hondjes/app/components/Scene/Scene.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scene",
    ()=>Scene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$hooks$2f$useMounted$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/app/hooks/useMounted.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$components$2f$Scene$2f$SceneContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/app/components/Scene/SceneContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Scene({ children }) {
    const [camera, setCamera] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [renderer, setRenderer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [scene, setScene] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const renderScene = camera !== undefined && renderer !== undefined && scene !== undefined;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$hooks$2f$useMounted$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMounted"])(()=>{
        const _renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            antialias: true,
            canvas: canvasRef.current
        });
        const _scene = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        const _camera = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        _renderer.setSize(window.innerWidth, window.innerWidth);
        _camera.position.z = 5;
        _renderer.render(_scene, _camera);
        const handleResize = ()=>{
            const width = window.innerWidth;
            const height = window.innerHeight;
            _camera.aspect = width / height;
            _camera.updateProjectionMatrix();
            _renderer.setSize(width, height);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        setCamera(_camera);
        setRenderer(_renderer);
        setScene(_scene);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef
            }, void 0, false, {
                fileName: "[project]/workspace/hondjes/app/components/Scene/Scene.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            renderScene ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$components$2f$Scene$2f$SceneContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneContextProvider"], {
                camera: camera,
                renderer: renderer,
                scene: scene,
                children: children
            }, void 0, false, {
                fileName: "[project]/workspace/hondjes/app/components/Scene/Scene.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this) : undefined
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=workspace_hondjes_app_20b6rel._.js.map