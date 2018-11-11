import { Expect, Test, TestFixture } from 'alsatian';
import { GulpFile } from './gulpfile';

@TestFixture('GulpFile Tests')
export class GulpFileTests {
    @Test('should be created')
    public create1() {
        Expect(GulpFile).toBeDefined();
    }
}
