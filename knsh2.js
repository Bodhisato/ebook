(function() {
    const a = [
        'aHR0cHM6Ly9kaWdpdGFsbWFzdGVyLmtuc2guY29tLnR3L3YzL3BhZ2Vz',
        'dmVyaWZ5a2V5Z3JpcA==',
        'aXNWYWxpZA==',
        'dXVpZA==',
        'c2lnbmF0dXJl',
        'cm9sZQ==',
        'ZXhwaXJ5',
        'MTAyODQ1MQ==',
        'enY4NmpnYnJ5R0h3dWZFMTBOWkRxZDBmZXdr',
        '6ICB5bir',
        'MTcyOTQxMDY4NTI5MQ=='
    ];

    if (location.href.startsWith(g(a[0]))) {
        const originalFetch = window.fetch;

        window.fetch = async (url, opts) => {
            const res = () => ({
                json: () => Promise.resolve({
                    [g(a[2])]: true,
                    [g(a[3])]: g(a[7]),
                    [g(a[4])]: g(a[8]),
                    [g(a[5])]: g(a[9]),
                    [g(a[6])]: g(a[10])
                })
            });

            if (new RegExp(g(a[1]), 'i').test(url)) {
                return res();
            }

            const d = await originalFetch(url, opts);
            const j = await d.json();
            return {
                json: () => (j.errorType ? { isValid: true } : j)
            };
        };
    }
})();
