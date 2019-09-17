import { ipfs, json, JSONValue, JSONValueKind, log, TypedMap } from '@graphprotocol/graph-ts';
import { asObject, kindToString } from './util';
import { TransactionInfo } from './transaction';

/**
 * Loads a JSON blob from IPFS, parses the JSON and makes sure the JSON is a valid JSON object.
 * Returns `null` otherwise.
 */
export function loadFromIpfs(ifpsHash: string, tx: TransactionInfo): TypedMap<string, JSONValue> | null {
  if (tx.state.ipfsReqs > 7) {
    // Workaround to avoid the subgraph from failing when a call handler takes > 180s
    // See https://github.com/graphprotocol/graph-node/issues/963
    log.warning(
      '[mapping] [loadIpfs] Too many IPFS requests while processing this transaction {}, skipping fetching hash={}',
      [tx.toString(), ifpsHash]
    );
    return null;
  }
  tx.state.ipfsReqs += 1;
  log.debug('[mapping] [loadIpfs] Loading JSON blob from ipfs hash={} for {}', [ifpsHash, tx.toString()]);
  let bytes = ipfs.cat(ifpsHash);
  log.debug('[mapping] [loadIpfs] Completed ipfs.cat from ipfs hash={} for {}', [ifpsHash, tx.toString()]);
  if (bytes !== null) {
    let data = json.fromBytes(bytes!);
    if (data === null) {
      return null;
    }
    if (data.kind !== JSONValueKind.OBJECT) {
      log.debug('[mapping] [loadIpfs] JSON data from IPFS is of type={}, expected OBJECT in {}', [
        kindToString(data.kind),
        tx.toString(),
      ]);
    }
    return asObject(data);
  }
  return null;
};
