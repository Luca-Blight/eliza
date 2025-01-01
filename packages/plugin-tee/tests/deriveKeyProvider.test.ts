
import { deriveKeyProvider, DeriveKeyProvider } from "../src/providers/deriveKeyProvider";
import { IAgentRuntime, Memory, Provider, State } from "@elizaos/core";


describe("DeriveKeyProvider", () => {
    let provider: DeriveKeyProvider;

    beforeEach(() => {
        provider = new DeriveKeyProvider("DOCKER");
    });

    it("should generate a raw key successfully", async () => {
        // what does reportData look like?
        const result = await provider.rawDeriveKey("/", "test-subject");
        expect(result).toBeDefined();

    });

    it("should generate an ed25519 keypair successfully", async () => {
        const result = await provider.deriveEd25519Keypair(
            "/",
            "test-subject",
            "test-agent-id"
        );
        expect(result).toBeDefined();
    });
});



describe("deriveKeyProvider", () => {
    let provider: typeof deriveKeyProvider;
    let runtime: IAgentRuntime;
    let message: Memory;
    let state: State;

    beforeEach(() => {
        provider = deriveKeyProvider;
        runtime = {
            agentId: "test-agent-id",
            getSetting: () => "DOCKER",
        } as unknown as IAgentRuntime;
        message = {} as Memory;
        state = {} as State;
    });

    it("It should return a public key for solana and evm", async () => {
        // what does reportData look like?
        const result = await provider.get(runtime, message, state);
        expect(result).toBeDefined();
    });

});

