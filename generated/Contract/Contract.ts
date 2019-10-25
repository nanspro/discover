// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class DAppCreated extends EthereumEvent {
  get params(): DAppCreated__Params {
    return new DAppCreated__Params(this);
  }
}

export class DAppCreated__Params {
  _event: DAppCreated;

  constructor(event: DAppCreated) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get newEffectiveBalance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Upvote extends EthereumEvent {
  get params(): Upvote__Params {
    return new Upvote__Params(this);
  }
}

export class Upvote__Params {
  _event: Upvote;

  constructor(event: Upvote) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get newEffectiveBalance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Downvote extends EthereumEvent {
  get params(): Downvote__Params {
    return new Downvote__Params(this);
  }
}

export class Downvote__Params {
  _event: Downvote;

  constructor(event: Downvote) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get newEffectiveBalance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Withdraw extends EthereumEvent {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get newEffectiveBalance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MetadataUpdated extends EthereumEvent {
  get params(): MetadataUpdated__Params {
    return new MetadataUpdated__Params(this);
  }
}

export class MetadataUpdated__Params {
  _event: MetadataUpdated;

  constructor(event: MetadataUpdated) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class CeilingUpdated extends EthereumEvent {
  get params(): CeilingUpdated__Params {
    return new CeilingUpdated__Params(this);
  }
}

export class CeilingUpdated__Params {
  _event: CeilingUpdated;

  constructor(event: CeilingUpdated) {
    this._event = event;
  }

  get oldCeiling(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newCeiling(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Contract__downvoteCostResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class Contract__dappsResult {
  value0: Address;
  value1: Bytes;
  value2: Bytes;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;

  constructor(
    value0: Address,
    value1: Bytes,
    value2: Bytes,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromFixedBytes(this.value1));
    map.set("value2", EthereumValue.fromFixedBytes(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    map.set("value7", EthereumValue.fromUnsignedBigInt(this.value7));
    map.set("value8", EthereumValue.fromUnsignedBigInt(this.value8));
    return map;
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  upvoteEffect(_id: Bytes, _amount: BigInt): BigInt {
    let result = super.call("upvoteEffect", [
      EthereumValue.fromFixedBytes(_id),
      EthereumValue.fromUnsignedBigInt(_amount)
    ]);

    return result[0].toBigInt();
  }

  try_upvoteEffect(_id: Bytes, _amount: BigInt): CallResult<BigInt> {
    let result = super.tryCall("upvoteEffect", [
      EthereumValue.fromFixedBytes(_id),
      EthereumValue.fromUnsignedBigInt(_amount)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  safeMax(): BigInt {
    let result = super.call("safeMax", []);

    return result[0].toBigInt();
  }

  try_safeMax(): CallResult<BigInt> {
    let result = super.tryCall("safeMax", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  total(): BigInt {
    let result = super.call("total", []);

    return result[0].toBigInt();
  }

  try_total(): CallResult<BigInt> {
    let result = super.tryCall("total", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): BigInt {
    let result = super.call("decimals", []);

    return result[0].toBigInt();
  }

  try_decimals(): CallResult<BigInt> {
    let result = super.tryCall("decimals", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  existingIDs(param0: Bytes): boolean {
    let result = super.call("existingIDs", [
      EthereumValue.fromFixedBytes(param0)
    ]);

    return result[0].toBoolean();
  }

  try_existingIDs(param0: Bytes): CallResult<boolean> {
    let result = super.tryCall("existingIDs", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  getDAppsCount(): BigInt {
    let result = super.call("getDAppsCount", []);

    return result[0].toBigInt();
  }

  try_getDAppsCount(): CallResult<BigInt> {
    let result = super.tryCall("getDAppsCount", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  max(): BigInt {
    let result = super.call("max", []);

    return result[0].toBigInt();
  }

  try_max(): CallResult<BigInt> {
    let result = super.tryCall("max", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  downvoteCost(_id: Bytes): Contract__downvoteCostResult {
    let result = super.call("downvoteCost", [
      EthereumValue.fromFixedBytes(_id)
    ]);

    return new Contract__downvoteCostResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_downvoteCost(_id: Bytes): CallResult<Contract__downvoteCostResult> {
    let result = super.tryCall("downvoteCost", [
      EthereumValue.fromFixedBytes(_id)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Contract__downvoteCostResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  ceiling(): BigInt {
    let result = super.call("ceiling", []);

    return result[0].toBigInt();
  }

  try_ceiling(): CallResult<BigInt> {
    let result = super.tryCall("ceiling", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  dapps(param0: BigInt): Contract__dappsResult {
    let result = super.call("dapps", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return new Contract__dappsResult(
      result[0].toAddress(),
      result[1].toBytes(),
      result[2].toBytes(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt()
    );
  }

  try_dapps(param0: BigInt): CallResult<Contract__dappsResult> {
    let result = super.tryCall("dapps", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Contract__dappsResult(
        value[0].toAddress(),
        value[1].toBytes(),
        value[2].toBytes(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt()
      )
    );
  }

  id2index(param0: Bytes): BigInt {
    let result = super.call("id2index", [EthereumValue.fromFixedBytes(param0)]);

    return result[0].toBigInt();
  }

  try_id2index(param0: Bytes): CallResult<BigInt> {
    let result = super.tryCall("id2index", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  withdrawMax(_id: Bytes): BigInt {
    let result = super.call("withdrawMax", [EthereumValue.fromFixedBytes(_id)]);

    return result[0].toBigInt();
  }

  try_withdrawMax(_id: Bytes): CallResult<BigInt> {
    let result = super.tryCall("withdrawMax", [
      EthereumValue.fromFixedBytes(_id)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  controller(): Address {
    let result = super.call("controller", []);

    return result[0].toAddress();
  }

  try_controller(): CallResult<Address> {
    let result = super.tryCall("controller", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }
}

export class WithdrawCall extends EthereumCall {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class UpvoteCall extends EthereumCall {
  get inputs(): UpvoteCall__Inputs {
    return new UpvoteCall__Inputs(this);
  }

  get outputs(): UpvoteCall__Outputs {
    return new UpvoteCall__Outputs(this);
  }
}

export class UpvoteCall__Inputs {
  _call: UpvoteCall;

  constructor(call: UpvoteCall) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpvoteCall__Outputs {
  _call: UpvoteCall;

  constructor(call: UpvoteCall) {
    this._call = call;
  }
}

export class ChangeControllerCall extends EthereumCall {
  get inputs(): ChangeControllerCall__Inputs {
    return new ChangeControllerCall__Inputs(this);
  }

  get outputs(): ChangeControllerCall__Outputs {
    return new ChangeControllerCall__Outputs(this);
  }
}

export class ChangeControllerCall__Inputs {
  _call: ChangeControllerCall;

  constructor(call: ChangeControllerCall) {
    this._call = call;
  }

  get _newController(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeControllerCall__Outputs {
  _call: ChangeControllerCall;

  constructor(call: ChangeControllerCall) {
    this._call = call;
  }
}

export class CreateDAppCall extends EthereumCall {
  get inputs(): CreateDAppCall__Inputs {
    return new CreateDAppCall__Inputs(this);
  }

  get outputs(): CreateDAppCall__Outputs {
    return new CreateDAppCall__Outputs(this);
  }
}

export class CreateDAppCall__Inputs {
  _call: CreateDAppCall;

  constructor(call: CreateDAppCall) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _metadata(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class CreateDAppCall__Outputs {
  _call: CreateDAppCall;

  constructor(call: CreateDAppCall) {
    this._call = call;
  }
}

export class SetCeilingCall extends EthereumCall {
  get inputs(): SetCeilingCall__Inputs {
    return new SetCeilingCall__Inputs(this);
  }

  get outputs(): SetCeilingCall__Outputs {
    return new SetCeilingCall__Outputs(this);
  }
}

export class SetCeilingCall__Inputs {
  _call: SetCeilingCall;

  constructor(call: SetCeilingCall) {
    this._call = call;
  }

  get _newCeiling(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetCeilingCall__Outputs {
  _call: SetCeilingCall;

  constructor(call: SetCeilingCall) {
    this._call = call;
  }
}

export class ReceiveApprovalCall extends EthereumCall {
  get inputs(): ReceiveApprovalCall__Inputs {
    return new ReceiveApprovalCall__Inputs(this);
  }

  get outputs(): ReceiveApprovalCall__Outputs {
    return new ReceiveApprovalCall__Outputs(this);
  }
}

export class ReceiveApprovalCall__Inputs {
  _call: ReceiveApprovalCall;

  constructor(call: ReceiveApprovalCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _token(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class ReceiveApprovalCall__Outputs {
  _call: ReceiveApprovalCall;

  constructor(call: ReceiveApprovalCall) {
    this._call = call;
  }
}

export class DownvoteCall extends EthereumCall {
  get inputs(): DownvoteCall__Inputs {
    return new DownvoteCall__Inputs(this);
  }

  get outputs(): DownvoteCall__Outputs {
    return new DownvoteCall__Outputs(this);
  }
}

export class DownvoteCall__Inputs {
  _call: DownvoteCall;

  constructor(call: DownvoteCall) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DownvoteCall__Outputs {
  _call: DownvoteCall;

  constructor(call: DownvoteCall) {
    this._call = call;
  }
}

export class SetMetadataCall extends EthereumCall {
  get inputs(): SetMetadataCall__Inputs {
    return new SetMetadataCall__Inputs(this);
  }

  get outputs(): SetMetadataCall__Outputs {
    return new SetMetadataCall__Outputs(this);
  }
}

export class SetMetadataCall__Inputs {
  _call: SetMetadataCall;

  constructor(call: SetMetadataCall) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _metadata(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class SetMetadataCall__Outputs {
  _call: SetMetadataCall;

  constructor(call: SetMetadataCall) {
    this._call = call;
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _SNT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
