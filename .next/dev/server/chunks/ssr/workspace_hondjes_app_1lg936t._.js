module.exports = [
"[project]/workspace/hondjes/app/hooks/useMounted.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMounted",
    ()=>useMounted
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useMounted(callback) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(callback, []);
}
}),
"[project]/workspace/hondjes/app/components/Scene.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scene",
    ()=>Scene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/workspace/hondjes/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$hooks$2f$useMounted$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/hondjes/app/hooks/useMounted.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Scene() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$app$2f$hooks$2f$useMounted$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMounted"])(()=>{
        if (ref.current) {
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]();
            renderer.setSize(window.innerWidth, window.innerWidth);
            ref.current.append(renderer.domElement);
            camera.position.z = 5;
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"]();
            const material = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: 0x00ff00
            });
            const cube = new __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
            scene.add(cube);
            renderer.render(scene, camera);
            const renderScene = ()=>{
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.render(scene, camera);
                requestAnimationFrame(renderScene);
            };
            const handleResize = ()=>{
                const width = window.innerWidth;
                const height = window.innerHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            };
            renderScene();
            handleResize();
            window.addEventListener("resize", handleResize);
            return ()=>{
                window.removeEventListener("resize", handleResize);
            };
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$hondjes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref
    }, void 0, false, {
        fileName: "[project]/workspace/hondjes/app/components/Scene.tsx",
        lineNumber: 62,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=workspace_hondjes_app_1lg936t._.js.map