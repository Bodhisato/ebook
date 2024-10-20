
const processedButtons = new Set();

function updateButtons() {
    const currentUrl = window.location.href;
    if (currentUrl !== d('aHR0cHM6Ly93ZWJldGV4dGJvb2sua25zaC5jb20udHcvMi9pbmRleC5odG1sP2NvZGVfZGVncmVlPTI=')) return;

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
            label.style.cssText = 'font-size:14px; height:25px; width:70px; text-align:center; cursor:pointer;';
            label.onclick = () => window.open(`${d('aHR0cHM6Ly93ZWJldGV4dGJvb2sua25zaC5jb20udHcvRWJvb2t2aWV3ZXJhbjRUZWFjaGVyL2luZGV4Lmh0bWw/aWQ9')}${fileName.split('.')[0]}`, '_blank');

            const label2 = label.cloneNode(true);
            label2.textContent = '免登下載';
            label2.onclick = () => {
                window.location.href = `${d('aHR0cHM6Ly9zdG9yYWdlMS5rbnNoLmNvbS50dy9tYXRlcmlhbC8=')}${fileName.split('.')[0]}.zip`;
                console.log(`點擊下載：${button.getAttribute('ZC10aXRsZQ==')}(${fileName})`);
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
