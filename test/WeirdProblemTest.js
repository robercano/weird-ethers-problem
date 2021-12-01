const { ethers } = require("hardhat");
const { before } = require("mocha");

describe(`Weird Problem Test`, function () {
    let WeirdEthersProblemContract;

    before(async () => {
        const WeirdEthersProblemFactory = await ethers.getContractFactory("WeirdEthersProblem");
        WeirdEthersProblemContract = await WeirdEthersProblemFactory.deploy();

        await WeirdEthersProblemContract.deployed();
    });

    it(`This one works`, async function () {
        let param = Array(1910).fill(1239812391823);

        console.log(`        Total size: ${param.length * 32}}`);

        const tx = await WeirdEthersProblemContract.problemFunction(param);
        const receipt = await tx.wait();

        console.log(`        Gas used: ${receipt.gasUsed}`);
    });
    it(`This one also works`, async function () {
        let param = Array(1911).fill(0);

        console.log(`        Total size: ${param.length * 32}}`);

        const tx = await WeirdEthersProblemContract.problemFunction(param);
        const receipt = await tx.wait();

        console.log(`        Gas used: ${receipt.gasUsed}`);
    });
    it(`This one doesn't`, async function () {
        let param = Array(1911).fill(1239812391823);

        console.log(`        Total size: ${param.length * 32}}`);

        await WeirdEthersProblemContract.problemFunction(param);
    });
});
