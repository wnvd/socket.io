// const username = prompt('What is you username?');
// const password = prompt('What is you password?');
const username = 'naveed';
const password = '123';

const socket = io('http://localhost:8000');

socket.on('connect', () => {
    // console.log('connected!');
    socket.emit('clientConnect');
});

socket.on('nsList', (nsData) => {
    const lastNs = localStorage.getItem('lastNs');
    // console.log(nsData);
    const namespacesDiv = document.querySelector('.namespaces');
    namespacesDiv.innerHTML = '';
    nsData.forEach((ns) => {
        namespacesDiv.innerHTML += `<div class="namespace" ns="${ns.endpoint}">
            <img src="${ns.img}">
            </div>`;
    });

    Array.from(document.getElementsByClassName('namespace'))
        .forEach((el) => {
            el.addEventListener('click', e => {
                joinNs(el, nsData);
            });
        });

    if (lastNs) {
        Array.from(document.getElementsByClassName('namespace'))
            .forEach((el) => {
                if (el.getAttribute('ns') === lastNs) {
                    joinNs(el, nsData);
                }
            });
    } else {
        joinNs(document.getElementsByClassName('namespace')[0], nsData);
    }
});
