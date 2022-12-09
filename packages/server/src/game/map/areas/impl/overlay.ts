import World from '../../../world';
import Area from '../area';
import Areas from '../areas';

import type { OverlayType, ProcessedArea } from '@kaetram/common/types/map';

export default class Overlay extends Areas {
    public constructor(data: ProcessedArea[], world: World) {
        super(data, world);

        super.load(this.data, (overlayArea: Area, rawData) => {
            overlayArea.darkness = rawData.darkness!;
            overlayArea.type = (rawData.type! as OverlayType) || 'none';

            if (rawData.fog) overlayArea.fog = rawData.fog;
        });

        super.message('overlay');
    }
}
