import './style.css';

window.addEventListener('load', () => {
    document.getElementsByClassName('popover_btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            if (btn.parentElement.getElementsByClassName('btn_popover')[0] === undefined) {
                event.preventDefault();
                let html = `
                    <div class="btn_popover" style="display: none;">
                        <div class="popover_title">Popover title</div>
                        <div class="popover_text">
                            And here's some amazing content. It's very engaging. Right?
                        </div>
                    <div>
                `;
                event.target.insertAdjacentHTML('beforeBegin', html);
                const popover = btn.parentElement.getElementsByClassName('btn_popover')[0];
                popover.style.top = `${event.target.offsetTop - event.target.offsetHeight - 40}px`;
                popover.style.left = `${event.target.offsetLeft - (event.target.offsetWidth / 2)}px`;
                popover.style.display = 'block';
            } else {
                btn.parentElement.getElementsByClassName('btn_popover')[0].remove();
            }
        });
    });
});