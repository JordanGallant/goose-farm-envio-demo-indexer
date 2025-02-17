import assert from "assert";
import { 
  TestHelpers,
  USDVault_CreateLp
} from "generated";
const { MockDb, USDVault } = TestHelpers;

describe("USDVault contract CreateLp event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for USDVault contract CreateLp event
  const event = USDVault.CreateLp.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("USDVault_CreateLp is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await USDVault.CreateLp.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualUSDVaultCreateLp = mockDbUpdated.entities.USDVault_CreateLp.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedUSDVaultCreateLp: USDVault_CreateLp = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      lp: event.params.lp,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualUSDVaultCreateLp, expectedUSDVaultCreateLp, "Actual USDVaultCreateLp should be the same as the expectedUSDVaultCreateLp");
  });
});
