import { Expect, Test, TestFixture } from 'alsatian';

@TestFixture('Stub')
export class Stub {
    @Test('stub')
    public stub() {
        Expect(true).toBe(true);
    }
}
