import { EAN13Reader } from '@zxing/library';

import { BrowserCodeReader } from './browser-code-reader';

export class BrowserEAN13Reader extends BrowserCodeReader {
    public constructor(timeBetweenScansMillis: number = 500) {
        super(new EAN13Reader(), timeBetweenScansMillis);
    }
}
