
module.exports = {
  compilers: {
    solc: {
      version: "0.5.0"
    }
  },
  networks: {
    development: {
      host:"127.0.0.1",
      port:7545,
      network_id:"*"
    }
  },
  solc:{
    optimizer:{
      enabled:true,
      runs:200
    }
  }
}
