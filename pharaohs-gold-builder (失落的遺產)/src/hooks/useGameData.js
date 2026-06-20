import { useState, useEffect } from 'react';
import { versions as defaultVersions } from '../data/gameData';

export const useGameData = () => {
    const STORAGE_KEY = 'pharaohsGoldGameData_v2';
    // 預設將 gameData 存放在 LocalStorage，如果沒有，就用 defaultVersions
    const [gameData, setGameData] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Failed to parse game data from local storage", e);
                return defaultVersions;
            }
        }
        return defaultVersions;
    });

    // 當 gameData 改變時，儲存到 LocalStorage
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gameData));
    }, [gameData]);

    const exportData = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(gameData, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", "boardgame_backup.json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    const importData = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const importedData = JSON.parse(event.target.result);
                    // 簡單驗證一下格式
                    if (typeof importedData === 'object' && importedData !== null) {
                        setGameData(importedData);
                        resolve(true);
                    } else {
                        reject(new Error("Invalid JSON structure"));
                    }
                } catch (e) {
                    reject(new Error("Failed to parse JSON file"));
                }
            };
            reader.onerror = () => reject(new Error("Failed to read file"));
            reader.readAsText(file);
        });
    };

    const updateVersion = (versionId, newVersionData) => {
        setGameData(prev => ({
            ...prev,
            [versionId]: newVersionData
        }));
    };

    return { gameData, setGameData, exportData, importData, updateVersion };
};
