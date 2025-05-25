const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTLending contract", function () {
  let NFT, nft, NFTLending, lending, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();

    NFT = await ethers.getContractFactory("ERC721PresetMinterPauserAutoId");
    nft = await NFT.deploy("TestNFT", "TNFT", "https://token-cdn-domain/");
    await nft.deployed();

    NFTLending = await ethers.getContractFactory("NFTLending");
    lending = await NFTLending.deploy(nft.address);
    await lending.deployed();

    // Mint NFT to addr1
    await nft.mint(addr1.address);
  });

  it("Should create a loan when NFT is transferred", async function () {
    // Approve lending contract to transfer NFT
    await nft.connect(addr1).approve(lending.address, 1);

    // Create loan
    await expect(lending.connect(addr1).createLoan(1, ethers.utils.parseEther("1"), 9999999999))
      .to.emit(lending, "LoanCreated")
      .withArgs(1, addr1.address, 1, ethers.utils.parseEther("1"), 9999999999);

    expect(await nft.ownerOf(1)).to.equal(lending.address);
  });

  it("Should repay the loan and return NFT", async function () {
    await nft.connect(addr1).approve(lending.address, 1);
    await lending.connect(addr1).createLoan(1, ethers.utils.parseEther("1"), 9999999999);

    await expect(
      lending.connect(addr1).repayLoan(1, { value: ethers.utils.parseEther("1") })
    )
      .to.emit(lending, "LoanRepaid")
      .withArgs(1);

    expect(await nft.ownerOf(1)).to.equal(addr1.address);
  });
});
