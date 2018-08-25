import { Code128Reader } from '@zxing/library';

import { BrowserCodeReader } from './browser-code-reader';

export class BrowserBarCodeReader extends BrowserCodeReader {
    public constructor(timeBetweenScansMillis: number = 500) {
        super(new Code128Reader(), timeBetweenScansMillis);
    }
}
