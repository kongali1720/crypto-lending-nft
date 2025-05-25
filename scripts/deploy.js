async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  // Deploy dummy ERC721 NFT contract for testing (optional)
  const NFT = await ethers.getContractFactory("ERC721PresetMinterPauserAutoId");
  const nft = await NFT.deploy("TestNFT", "TNFT", "https://token-cdn-domain/");
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);

  // Deploy NFTLending contract with NFT address as parameter
  const NFTLending = await ethers.getContractFactory("NFTLending");
  const lending = await NFTLending.deploy(nft.address);
  await lending.deployed();
  console.log("NFTLending deployed to:", lending.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
