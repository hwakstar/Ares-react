import Web3 from "web3"
import { ethers } from 'ethers'
import { MerkleTree } from 'merkletreejs'
import BigNumber from "bignumber.js"
// import { defaultChain } from "../config/connectors"
import { abi as ARES_NFT_ABI } from "../config/ares_nft_abi"
import { ARES_NFT_ADDRESS, CONTRACT_STATE, PRESALE_NFT_PRICE, PUBLIC_ALLOWANCE, PUBLIC_SALE_NFT_PRICE, WHITELISTED_USERS, WHITELIST_ALLOWANCE, WHITELIST_NFT_PRICE } from "../config/constants"

const {keccak256} = ethers.utils

export const mint = async (amount, address, provider, contractState) => {
    const web3 = new Web3(provider)
    const nft_contract = new web3.eth.Contract(ARES_NFT_ABI, ARES_NFT_ADDRESS)
    const userBalance = await web3.eth.getBalance(address)
    let result
    try {
        if (contractState === CONTRACT_STATE.WHITELIST) {
            const {leave, hexProof} = getMerkleTreeCallData(address)
            const ethersAmount = WHITELIST_NFT_PRICE.times(amount)
            if (ethersAmount.gt(BigNumber(userBalance))) return {
                status: false,
                error: "Not enough balance"
            }
            result = await nft_contract.methods.mintWhiteList(
                amount,
                hexProof,
                leave
            ).send({
                from: address,
                value: "0x" + (ethersAmount.integerValue()).toString(16)
            })
        }
        if (contractState === CONTRACT_STATE.PRESALE) {
            const ethersAmount = PRESALE_NFT_PRICE.times(amount)
            if (ethersAmount.gt(BigNumber(userBalance))) return {
                status: false,
                error: "Not enough balance"
            }
            result = await nft_contract.methods.mintPresale(
                amount
            ).send({
                from: address,
                value: "0x" + (ethersAmount.integerValue()).toString(16)
            })
        }
        if (contractState === CONTRACT_STATE.PUBLIC) {
            const ethersAmount = PUBLIC_SALE_NFT_PRICE.times(amount)
            if (ethersAmount.gt(BigNumber(userBalance))) return {
                status: false,
                error: "Not enough balance"
            }
            result = await nft_contract.methods.mintPublic(
                amount
            ).send({
                from: address,
                value: "0x" + (ethersAmount.integerValue()).toString(16)
            })
        }
        return {
            status: result.status
        }
    } catch (e) {
        console.log(e)
        return {
            status: false,
            error: "Mint failed"
        }
    }
    // return nft_contract
}

export const getMerkleTreeCallData = (address) => {
    const leaves = WHITELISTED_USERS.map((user) => keccak256(user))
    const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true })
    const hexProof = merkleTree.getHexProof(keccak256(address))
    const leave = keccak256(address)
    return {
        leave,
        hexProof
    }
}

export const getUserData = async (address, provider) => {
    const web3 = new Web3(provider)
    const nft_contract = new web3.eth.Contract(ARES_NFT_ABI, ARES_NFT_ADDRESS)
    try {
        const userBalance = await nft_contract.methods.balanceOf(address).call()
        const contractState = await nft_contract.methods.contractState().call()
        let maxMintable = PUBLIC_ALLOWANCE
        let whitelisted = false
        if (WHITELISTED_USERS.map(each => each.toLowerCase()).includes(address.toLowerCase())) {
            whitelisted = true
            if (Number(contractState) === CONTRACT_STATE.WHITELIST) maxMintable = WHITELIST_ALLOWANCE
        }
        return {
            status: true,
            _whiteListed: whitelisted,
            _constractState: Number(contractState),
            _userBalance: userBalance,
            _maxMintable: maxMintable
        }
    } catch(e) {
        console.log(e)
        return {
            status: false,
            _whiteListed: false,
            _constractState: 0,
            _userBalance: 0,
            _maxMintable: 0
        }
    }
}