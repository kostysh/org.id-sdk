import {
  KeyTypes,
  generateKeyPair,
  createJWK
} from '../src/keys';
import {
  createVerificationMethod
} from '../src/did';
import type {
  KeyLike,
  JWK
} from '../src/keys';
import type {
  DidVerificationMethod
} from '../src/did';

describe('DID utilities', () => {
  const id = 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1';
  const controller = 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d';

  describe('#createVerificationMethod', () => {
    let keyPairs: { privateKey: KeyLike; publicKey: KeyLike; }[];
    let keyJWK: { privateKey: JWK; publicKey: JWK; }[];

    beforeAll(async () => {
      keyPairs = await Promise.all(
        KeyTypes.map(t => generateKeyPair(t))
      );
      keyJWK = await Promise.all(
        keyPairs.map(async t => {
          const privateKey = await createJWK(t.privateKey);
          const publicKey = await createJWK(t.publicKey);
          return {
            privateKey,
            publicKey
          }
        })
      );
    });

    test('should create verification method from KeyLike', async () => {
      const methods: DidVerificationMethod[] = await Promise.all(
        keyPairs.map(
          k => createVerificationMethod(
            id,
            controller,
            k.publicKey
          )
        )
      );
      methods.forEach(m => {
        expect(typeof m.id).toBe('string');
        expect(typeof m.controller).toBe('string');
        expect(typeof m.type).toBe('string');
        expect(typeof m.publicKeyJwk).toBe('object');
      });
    });

    test('should create verification method from JWK', async () => {
      const methods: DidVerificationMethod[] = await Promise.all(
        keyJWK.map(
          k => createVerificationMethod(
            id,
            controller,
            k.publicKey
          )
        )
      );
      methods.forEach(m => {
        expect(typeof m.id).toBe('string');
        expect(typeof m.controller).toBe('string');
        expect(typeof m.type).toBe('string');
        expect(typeof m.publicKeyJwk).toBe('object');
      });
    });
  })
});
