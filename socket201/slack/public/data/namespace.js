const Namespace = require('../classes/Namespace.js');
const Room = require('../classes/Room.js');

const wikiNs = new Namespace(0, 'wikipedia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/1024px-Wikipedia-logo-v2.svg.png', '/wiki');

const mozillaNs = new Namespace(1, 'mozilla', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1024px-Firefox_logo%2C_2019.svg.png', '/mozilla');

const linuxNs = new Namespace(2, 'linux', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png', '/linux');

wikiNs.addRoom(new Room(0, 'New Articles', 0));
wikiNs.addRoom(new Room(1, 'Editors', 0));
wikiNs.addRoom(new Room(2, 'Others', 0));

mozillaNs.addRoom(new Room(0, 'News', 1));
mozillaNs.addRoom(new Room(1, 'Firefox', 1));
mozillaNs.addRoom(new Room(2, 'Docs', 1));

linuxNs.addRoom(new Room(0, 'Debian', 2));
linuxNs.addRoom(new Room(1, 'Kali', 2));
linuxNs.addRoom(new Room(2, 'Ubuntu', 2));

const namespace = [wikiNs, mozillaNs, linuxNs];

module.exports = namespace;
