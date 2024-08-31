export const sendMessage = (message: any) => {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage(message, (response) => {
      resolve(response);
    });
  });
};

export const getStorageItem = (key: string) => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(key, (result) => {
      resolve(result[key]);
    });
  });
};

export const setStorageItem = (key: string, value: any) => {
  return new Promise((resolve) => {
    chrome.storage.sync.set({ [key]: value }, () => {
      resolve(true);
    });
  });
};
