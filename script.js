const listElement = document.querySelector('ul');
        fetch('./tools.json')
        .then(res => res.json())
        .then(data => {
            const listItems = data.map(element => 
            `<li>${'Name: ' +element.title +
                ', Brand: '+ element.brand+
                 ', Location: '+ element.location}</li>`).join('');
            listElement.insertAdjacentHTML('beforeend', listItems);
        });