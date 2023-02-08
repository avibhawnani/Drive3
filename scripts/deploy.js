
const hre = require("hardhat");

async function main() {
  
  const Drive = await hre.ethers.getContractFactory("Drive");
  const drive = await Drive.deploy();
  await drive.deployed();

  console.log("Contract Address : ",drive.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
