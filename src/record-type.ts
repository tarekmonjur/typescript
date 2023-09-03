const server: Record<string, string | number | Record<string, string> | Function> = {};
server.address = 'localhost';
server.port = 80
server.left = {};
server.right = {}
server.handle = () => console.log('live');