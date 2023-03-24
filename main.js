let listItems = document.querySelectorAll('.list-btn_click');

listItems.forEach(listItem => {
    listItem.addEventListener('click', ()=> {
        
        listItem.classList.toggle('arrow');

        let height = 0;
        let menu = listItem.nextElementSibling;
            if (menu.clientHeight == '0') {
                height = menu.scrollHeight;
            }

        menu.style.height = `${height}px`;
    })
})