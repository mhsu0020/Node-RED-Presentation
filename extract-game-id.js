//Extracts game Ids from featured games API
module.exports = function(RED) {
    function ExtractGameIdNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            //msg.payload is used for both input and output
            msg.payload = msg.payload.gameList.map(function(gameObject) {
                return gameObject.gameId;
            });
            node.send(msg);
        });
    }
    RED.nodes.registerType("extract-game-id", ExtractGameIdNode);
}
