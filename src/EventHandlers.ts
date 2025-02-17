/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  USDVault,
  USDVault_CreateLp,
  USDVault_Deposit,
  USDVault_Initialized,
  USDVault_Redeem,
  USDVault_UnLockDeposit,
  USDVault_UnLockRedeem,
  USDVault_UpdateCustodian,
  USDVault_UpdateDataStorage,
  USDVault_UpdatePreCustodian,
  USDVault_Withdraw,
} from "generated";

USDVault.CreateLp.handler(async ({ event, context }) => {
  const entity: USDVault_CreateLp = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lp: event.params.lp,
  };

  context.USDVault_CreateLp.set(entity);
});

USDVault.Deposit.handler(async ({ event, context }) => {
  const entity: USDVault_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    user: event.params.user,
    depositAsset: event.params.depositAsset,
    depositShare: event.params.depositShare,
    price: event.params.price,
    lockId: event.params.lockId,
    lockTime: event.params.lockTime,
    totalShares: event.params.totalShares,
    createTime: event.params.createTime,
  };

  context.USDVault_Deposit.set(entity);
});

USDVault.Initialized.handler(async ({ event, context }) => {
  const entity: USDVault_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.USDVault_Initialized.set(entity);
});

USDVault.Redeem.handler(async ({ event, context }) => {
  const entity: USDVault_Redeem = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    user: event.params.user,
    redeemAsset: event.params.redeemAsset,
    redeemShare: event.params.redeemShare,
    price: event.params.price,
    lockId: event.params.lockId,
    lockTime: event.params.lockTime,
    totalShares: event.params.totalShares,
    createTime: event.params.createTime,
  };

  context.USDVault_Redeem.set(entity);
});

USDVault.UnLockDeposit.handler(async ({ event, context }) => {
  const entity: USDVault_UnLockDeposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lockId: event.params.lockId,
    user: event.params.user,
    share: event.params.share,
    createTime: event.params.createTime,
  };

  context.USDVault_UnLockDeposit.set(entity);
});

USDVault.UnLockRedeem.handler(async ({ event, context }) => {
  const entity: USDVault_UnLockRedeem = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lockId: event.params.lockId,
    user: event.params.user,
    share: event.params.share,
    createTime: event.params.createTime,
  };

  context.USDVault_UnLockRedeem.set(entity);
});

USDVault.UpdateCustodian.handler(async ({ event, context }) => {
  const entity: USDVault_UpdateCustodian = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    oldCustodian: event.params.oldCustodian,
    currentCustodian: event.params.currentCustodian,
  };

  context.USDVault_UpdateCustodian.set(entity);
});

USDVault.UpdateDataStorage.handler(async ({ event, context }) => {
  const entity: USDVault_UpdateDataStorage = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    oldStorage: event.params.oldStorage,
    currentStorage: event.params.currentStorage,
  };

  context.USDVault_UpdateDataStorage.set(entity);
});

USDVault.UpdatePreCustodian.handler(async ({ event, context }) => {
  const entity: USDVault_UpdatePreCustodian = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    oldCustodian: event.params.oldCustodian,
    currentCustodian: event.params.currentCustodian,
  };

  context.USDVault_UpdatePreCustodian.set(entity);
});

USDVault.Withdraw.handler(async ({ event, context }) => {
  const entity: USDVault_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    user: event.params.user,
    withdrawAsset: event.params.withdrawAsset,
    withdrawShare: event.params.withdrawShare,
    price: event.params.price,
    totalShares: event.params.totalShares,
    createTime: event.params.createTime,
  };

  context.USDVault_Withdraw.set(entity);
});
