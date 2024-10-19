const processedButtons = new Set();

function updateButtons() {
    const currentUrl = window.location.href;
    if (currentUrl !== d('aHR0cHM6Ly9lYm9vazAyLmNoaWRpbmcuY29tLnR3L0Jvb2tDYXNlL3B1Ymxpc2gvaW5kZXguaHRtbA==')) return;

    const buttons = document.querySelectorAll(d('LmRvd25Bc3NldEJ0bg=='));
    buttons.forEach(button => {
        if (!processedButtons.has(button)) {
            const fileName = button.getAttribute(d('ZC1maWxlX25hbWU='));
            if (fileName) {
                button.onclick = null;
                button.style.width = '180px';
                button.style.display = 'flex';
                button.style.justifyContent = 'space-between';

                const label1 = button.querySelector(d('Lm0tMC5sYWJlbC5sYWJlbC1pbmZv'));
                label1.textContent = '免登開啟';
                label1.style.cssText = 'font-size: 16.5px; height: 40px; width: 85px; display: inline-block;';
                label1.onclick = () => window.open(`${d('aHR0cHM6Ly9lYm9vazAyLmNoaWRpbmcuY29tLnR3L0Vib29rVmlld2VyL3B1Ymxpc2gvRWJvb2suaHRtbD9pZD0=')}${fileName.split('.')[0]}`, '_blank');

                const label2 = label1.cloneNode(true);
                label2.textContent = '免登下載';
                label2.onclick = () => {
                    window.location.href = `${d('aHR0cHM6Ly9lYm9vazAyLmNoaWRpbmcuY29tLnR3L0Vib29rcy8=')}${fileName.split('.')[0]}.zip`;
                    console.log(`點擊下載：${button.getAttribute('d-title')}(${fileName})`);
                };

                button.appendChild(label2);
                processedButtons.add(button);
                console.log(`已新增：${button.getAttribute('d-title')}(${fileName})`);
            }
        }
    });
}

localStorage.setItem(d('bG9naW5BY2NvdW50'), d('bW9ja0FjY291bnQ='));
localStorage.setItem(d('dXVpZA=='), d('bW9ja1VVSUQ='));

new MutationObserver(updateButtons).observe(document.body, { childList: true, subtree: true });
updateButtons();
