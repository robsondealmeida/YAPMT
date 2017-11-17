export default class APIConfig {
    static getUrl(node) {
        return `http://localhost:3333/api${node}`;
    }
}