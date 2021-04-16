const electron = window.require('electron');
const { ipcRenderer } = electron;

export default function send(channel, payload) {
    return new Promise((resolve) => {
        ipcRenderer.once(channel + '-reply', (_, arg) => {
            resolve(arg);
        });

        ipcRenderer.send(channel, JSON.stringify(payload ?? []));
    });
}
