var ALGOLIA_INSIGHTS_SRC = "https://cdn.jsdelivr.net/npm/search-insights@2.3.0";
!function (e, a, t, n, s, i, c) {
    e.AlgoliaAnalyticsObject = s, e[s] = e[s] || function () {
        (e[s].queue = e[s].queue || []).push(arguments)
    }, i = a.createElement(t), c = a.getElementsByTagName(t)[0],
        i.async = 1, i.src = n, c.parentNode.insertBefore(i, c)
}(window, document, "script", ALGOLIA_INSIGHTS_SRC, "aa");

// Initialize library
aa('init', {
    appId: 'QHYLAXTG31',
    apiKey: 'babc39e7f16ddece7fd1a1848312ff0e',
    useCookie: true
});

aa('onUserTokenChange', (userToken) => {
    window && window.dataLayer && window.dataLayer.push({
        algoliaUserToken: userToken,
    });
}, { immediate: true });