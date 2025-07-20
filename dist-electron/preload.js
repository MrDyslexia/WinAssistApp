"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ejemplo: API segura para exponer al renderer
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('electronAPI', {
    example: () => console.log('Electron API Ready'),
});
//# sourceMappingURL=preload.js.map