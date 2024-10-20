const viewers = {
    get: d('aHR0cHM6Ly9zdG9yYWdlMS5rbnNoLmNvbS50dy9tYXRlcmlhbC8='),
    'd("5bq36LuS5ZyL5LitV0VC5pWZ56eR5pu4")': {
        viewer: d('aHR0cHM6Ly93ZWJldGV4dGJvb2sua25zaC5jb20udHcvRWJvb2t2aWV3ZXJhbjRUZWFjaGVyL2luZGV4Lmh0bWw/aWQ9'),
        resourceCode: d('Y29kZV9kZWdyZWU9Mg==')
    },
    'd("5bq36LuS5ZyL5Lit6LyU5p2QLee4veikh+e/kuezu+WIlw==")': {
        viewer: d('aHR0cHM6Ly93ZWJldGV4dGJvb2sua25zaC5jb20udHcvRWJvb2t2aWV3ZXI0VGVhY2hlci9FYm9vay5odG1sP2NvZGU9dGVhY2hlcl9wcm9fdGVzdCZpZD0='),
        resourceCode: d('Y29kZV9kZWdyZWU9MjAyMTA2MDEwMDAx')
    },
    'd("5bq36LuS5ZyL5Lit6LyU5p2QLeaWsOaMkeaIsA==")': {
        viewer: d('aHR0cHM6Ly93ZWJldGV4dGJvb2sua25zaC5jb20udHcvRWJvb2t2aWV3ZXI0VGVhY2hlci9FYm9vay5odG1sP2NvZGU9dGVhY2hlcl9wcm9fdGVzdCZpZD0='),
        resourceCode: d('Y29kZV9kZWdyZWU9MjAyMTA2MjEwMDAx')
    },
    getResourceType(currentUrl) {
        for (const [key, value] of Object.entries(this)) {
            if (typeof value === 'object') {
                const regex = new RegExp(`(${value.resourceCode})(?:$|&)`);
                if (regex.test(currentUrl)) {
                    return key;
                }
            }
        }
        return null;
    }
};

const processedButtons = new Set();

function updateButtons() {
    const currentUrl = window.location.href;
    const resourceType = viewers.getResourceType(currentUrl);

    if (!resourceType) return;

    document.querySelectorAll(d('LmRvd25sb2FkQXNzZXQ=')).forEach(asset => {
        const button = asset.querySelector(d('LmRvd25Bc3NldEJ0bg=='));
        const label = button.querySelector(d('LmxhYmVsLWluZm8='));
        const fileName = button.getAttribute(d('ZC1maWxlX25hbWU='));

        if (fileName && !processedButtons.has(button)) {
            asset.style.display = 'flex';
            asset.style.justifyContent = 'space-between';
            button.onclick = null;
            button.style.cursor = 'inherit';
            button.style.width = '170px';
            button.style.display = 'flex';
            button.style.justifyContent = 'space-between';
            label.textContent = '免登開啟';
            label.style.cssText = 'font-size: 14px; height: 25px; width: 70px; text-align: center; cursor: pointer;';

            label.onclick = () => {
                const viewerUrl = `${viewers[resourceType].viewer}${fileName.split('.')[0]}`;
                window.open(viewerUrl, '_blank');
            };

            const label2 = label.cloneNode(true);
            label2.textContent = '免登下載';
            label2.onclick = () => {
                window.location.href = `${viewers.get}${fileName.split('.')[0]}.zip`;
                console.log(`點擊下載：${button.getAttribute(d('ZC10aXRsZQ=='))}(${fileName})`);
            };

            button.appendChild(label2);
            processedButtons.add(button);
            console.log(`已新增：${button.getAttribute(d('ZC10aXRsZQ=='))}(${fileName})`);
        }
    });
}

localStorage.setItem(d('bG9naW5BY2NvdW50'), d('bW9ja0FjY291bnQ='));
localStorage.setItem(d('dXVpZA=='), d('bW9ja1VVSUQ='));
new MutationObserver(updateButtons).observe(document.body, { childList: true, subtree: true });
updateButtons();
