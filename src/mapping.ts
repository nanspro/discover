import {
  DAppCreated as DAppCreatedEvent,
  // Upvote as UpvoteEvent,
  // Downvote as DownvoteEvent,
  // Withdraw as WithdrawEvent,
  // MetadataUpdated as MetadataUpdatedEvent,
  // CeilingUpdated as CeilingUpdatedEvent,
  Contract as DiscoverContract
} from "../generated/Contract/Contract"
import {
  // DAppCreated,
  // Upvote,
  // Downvote,
  // Withdraw,
  // MetadataUpdated,
  // CeilingUpdated,
  DappMeta,
  Detail
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


export function handleDAppCreated(event: DAppCreatedEvent): void {
  let contract = DiscoverContract.bind(event.address)
  let entity = new DappMeta(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  let entity2 = new Detail(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  
  let id = event.params.id
  let count = contract.getDAppsCount()
  let dappIdx = contract.id2index(id)
  let dapp = contract.dapps(dappIdx)
  let metadata = dapp.value2 // bytes32 representation of ipfs Hash where all metadata is stored
  
  let bytes32toHex = metadata.toHexString()
  let ipfsHashHex = '1220' + bytes32toHex.slice(2)
  ipfsHashHex = '0x' + ipfsHashHex

  log.info('Hows everything {} {} {} {} {}', [count.toHexString(), dappIdx.toHexString(), id.toHex(), bytes32toHex, ipfsHashHex])
  
  let ipfsHashBytes = Bytes.fromHexString(ipfsHashHex)
  let ipfsHash = ipfsHashBytes.toBase58()
  
  log.info("IPFS HASH: {}", [ipfsHash])

  
  let tx: TransactionInfo
  
  tx.blockNumber = event.block.number.toI32()
  tx.timestamp = event.block.timestamp.toI32()
  tx.from = event.transaction.from
  tx.hash = event.transaction.hash
  tx.state.ipfsReqs = 0
  
  if (ipfsHash != 'QmS6a72GnPvUCMwKKrVGE41yY8RYwVVoBTrEbW6XWDu1EY' && ipfsHash != 'QmfCbEDwZ7sVSzcmivp3WvKd9pcKHhmCXiFwFuuQJmhPhs') {
    let ipfsData = loadFromIpfs(ipfsHash, tx)

  log.debug("Transaction (Tx): {}", [tx.toString()])
  log.debug("IPFS DATA is {}", [ipfsData.get("name").toString()])
  
  entity2.name = ipfsData.get("name").toString()
  entity2.url = ipfsData.get("url").toString()
  entity2.description = ipfsData.get("description").toString()
  entity2.dateAdded = ipfsData.get("dateAdded").toBigInt()
  entity2.category = ipfsData.get("category").toString()
  entity2.uploader = ipfsData.get("uploader").toString()
  entity2.image = ipfsData.get("image").toString()
  entity2.identifier = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  entity2.save()
  
  entity.ipfsHash = ipfsHash
  entity.hash = event.transaction.hash.toHex()
  entity.status = "NEW"
  entity.save()
  }
  // entity.compressedMetadata = web3Utils.keccak256(
    // JSON.stringify(metadata),
  // )
  // entity.status = "NEW"

  // entity.id = event.params.id
  // entity.newEffectiveBalance = event.params.newEffectiveBalance
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
