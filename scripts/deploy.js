const { ethers } = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log("Deploying with:", deployer.address);

  // Real USDC on SKALE Base
  const USDC_ADDRESS = "0x85889c8c714505E0c94b30fcfcF64fE3Ac8FCb20";

  // X402 optional
  const X402 = ethers.ZeroAddress;

  const CommerceCore = await ethers.getContractFactory("CommerceCore");

  const commerce = await CommerceCore.deploy(
    USDC_ADDRESS,
    X402
  );

  await commerce.waitForDeployment();

  console.log("CommerceCore deployed:", commerce.target);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});