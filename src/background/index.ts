/// <reference types="chrome"/>

console.log("Background script running");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

export {};
