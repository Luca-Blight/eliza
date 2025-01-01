import { describe, it, expect, beforeEach, vi } from "vitest";
import { RemoteAttestationProvider } from "../src/providers/remoteAttestationProvider";


describe("RemoteAttestationProvider", () => {
    let provider: RemoteAttestationProvider;

    beforeEach(() => {
        provider = new RemoteAttestationProvider("DOCKER");
    });

    it("should generate an attestation successfully", async () => {

        // what does reportData look like?
        const result = await provider.generateAttestation("/");
        expect(result).toBeDefined();
    });
});

