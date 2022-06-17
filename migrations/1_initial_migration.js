const Migrations = artifacts.require("Marketplace");

module.exports = function (deployer) {
  deployer.deploy(Migrations, "0xd61a1640F6948f476F19fc65D3f94A944A91A171", "300");
};
