// Ejemplo: API segura para exponer al renderer
import { contextBridge } from 'electron';
contextBridge.exposeInMainWorld('electronAPI', {
    example: () => console.log('Electron API Ready'),
});
//# sourceMappingURL=preload.js.map