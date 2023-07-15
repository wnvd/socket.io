const joinNs = (el, nsData) => {
    const nsEndpoint = el.getAttribute('ns');
    // console.log(nsEndpoint);

    const clickedNs = nsData.find(row => row.endpoint === nsEndpoint);
    const rooms = clickedNs.rooms;

    let roomList = document.querySelector('.room-list');
    roomList.innerHTML = "";

    rooms.forEach(room => {
        roomList.innerHTML += `<li><span class = 'gyphicon glyphicon-lock'>${room.roomTitle}</span></li>`
    });

    localStorage.setItem('lastNs', nsEndpoint);
};
