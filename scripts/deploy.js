// npx hardhat run scripts/deploy.js --network rinkeby
// SmolEmblem Contract deployed to: 0x81B3b23Dd2cBc2869B2a0cFF740Ec4d174B475a6
// EpicLordHamburger Contract deployed to: 0x730Df2Fea5368C68Ba68804A00b828CdaE62D557
// SAO v1 Contract deployed to: 0x1960598E38a7cB2B479Dd3D9090A04C63e58eC12
// SAO v2 (colors) Contract deployed to: 0x2d517918cFbBefa990d8df994f180f65Ac054C9b

const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  
    // Call the function.
    let txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NFT #1")
  
    txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NFT #2")
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();