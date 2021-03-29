const EliteswapV2Factory = artifacts.require("EliteswapV2Factory");

module.exports = async function (deployer, _network, addresses) {
  await deployer.deploy(EliteswapV2Factory, addresses[0]);
};
