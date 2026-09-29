// ==UserScript==
// @name         cleanG
// @namespace    https://gemini.google.com
// @version      2026-09-29
// @description  Cleaner Gemini
// @author       manni
// @match        https://gemini.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("cleanG loaded");
    const tagName = ['sign-in-nudge','bard-sidenav'];
    function removeNudges() {
        const elements = document.querySelectorAll(tagName);
        if (elements.length > 0) {
            elements.forEach(el => el.remove());
        }
    }
    // Initialize the observer immediately on `document` (no loops/timers)
    const observer = new MutationObserver(() => {
        removeNudges();
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    // Run a baseline check on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', removeNudges);
    } else {
        removeNudges();
    }
})();
