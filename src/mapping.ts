import {
  DAppCreated as DAppCreatedEvent,
  Contract as DiscoverContract
} from "../generated/Contract/Contract"

import {
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

export function handleDAppCreated(event: DAppCreatedEvent): void {
  let entity = new DAppMetadata(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  log.info('ID is:', [event.address.toHexString()])
  log.info('IDDD is:', [event.params.id.toHexString()])  
  let contract = DiscoverContract.bind(event.address)
  let id: Bytes = event.params.id
  log.info('ID is:', [id.toHexString()])

  entity.hash = event.transaction.hash
  log.info('Tx HASH:', [entity.hash.toHexString()])  
  entity.save()
}
