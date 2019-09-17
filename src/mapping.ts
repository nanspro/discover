import {
  DAppCreated as DAppCreatedEvent,
  Upvote as UpvoteEvent,
  Downvote as DownvoteEvent,
  Withdraw as WithdrawEvent,
  MetadataUpdated as MetadataUpdatedEvent,
  CeilingUpdated as CeilingUpdatedEvent,
  Contract as DiscoverContract
} from "../generated/Contract/Contract"
import {
  // DAppCreated,
  // Upvote,
  // Downvote,
  // Withdraw,
  // MetadataUpdated,
  // CeilingUpdated,
  DAppMetadata
} from "../generated/schema"

import { 
  log, 
  ipfs, 
  json,
  TypedMap, 
  JSONValue, 
  Bytes, 
  Value, 
  BigDecimal,
  ByteArray,
  BigInt } from '@graphprotocol/graph-ts'

import { loadFromIpfs } from "./ipfs";
import { TransactionInfo, State } from "./transaction";

function getIpfsHashFromBytes32(bytes32Hex: Bytes): string {
  let hashHex = `1220${bytes32Hex.slice(2)}`
  let hashBytes: ByteArray = ByteArray.fromHexString(hashHex)
  let hashStr = hashBytes.toBase58()
  return hashStr
}

// function getIpfsData(hash: string): TypedMap<string, JSONValue> | null {
//   let data: TypedMap<string, JSONValue>
//   if (hash != null && hash.length > 0) {
//     let dataBytes = (ipfs.cat(hash)) as Bytes
//     if (dataBytes != null && dataBytes.toString().length > 0) {
//       log.warning('DEBUG IPFS {}', [dataBytes.toString()])
//       let jsonRet = json.fromBytes(dataBytes)
//       // log.warning('DEBUG IPFS RS {}', [json.toString()])
//       data = jsonRet.toObject()
//     } else {
//       log.warning('DEBUG IPFS SKIPPING {}', [hash])
//     }
//   }
//   return data;
// }

export function handleDAppCreated(event: DAppCreatedEvent): void {
  let contract = DiscoverContract.bind(event.address)
  let entity = new DAppMetadata(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  let id = event.params.id
  let count = contract.getDAppsCount()
  let dappIdx = contract.id2index(id)
  let dapp = contract.dapps(dappIdx)
  let metadata = dapp.value2
  let ipfsHash = getIpfsHashFromBytes32(metadata)

  let tx: TransactionInfo
  tx.blockNumber = event.block.number.toI32()
  tx.timestamp = event.block.timestamp.toI32()
  tx.from = event.transaction.from
  tx.hash = event.transaction.hash
  tx.state.ipfsReqs = 0
  
  let ipfsData = loadFromIpfs(ipfsHash, tx)
  entity.ipfsHash = ipfsHash
  entity.hash = event.transaction.hash
  

  // entity.compressedMetadata = web3Utils.keccak256(
    // JSON.stringify(metadata),
  // )
  // entity.status = "NEW"

  // entity.id = event.params.id
  // entity.newEffectiveBalance = event.params.newEffectiveBalance
  entity.save()
}

// export function handleUpvote(event: UpvoteEvent): void {
//   let entity = new Upvote(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity.id = event.params.id
//   entity.newEffectiveBalance = event.params.newEffectiveBalance
//   entity.save()
// }

// export function handleDownvote(event: DownvoteEvent): void {
//   let entity = new Downvote(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity.id = event.params.id
//   entity.newEffectiveBalance = event.params.newEffectiveBalance
//   entity.save()
// }

// export function handleWithdraw(event: WithdrawEvent): void {
//   let entity = new Withdraw(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity.id = event.params.id
//   entity.newEffectiveBalance = event.params.newEffectiveBalance
//   entity.save()
// }

// export function handleMetadataUpdated(event: MetadataUpdatedEvent): void {
//   let entity = new MetadataUpdated(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity.id = event.params.id
//   entity.save()
// }

// export function handleCeilingUpdated(event: CeilingUpdatedEvent): void {
//   let entity = new CeilingUpdated(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   )
//   entity.oldCeiling = event.params.oldCeiling
//   entity.newCeiling = event.params.newCeiling
//   entity.save()
// }
