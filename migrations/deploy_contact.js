var TodoList = artifacts.require("./TodoList.sol");

module.exports = function(developer){
    deployer.deploy(TodoList);
};