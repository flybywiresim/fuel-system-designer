import { SystemNode } from './system-node';
import { NamedNodeReference } from './node-reference';

// Name, FuelBurnRate
export class Apu extends SystemNode {
    fuelBurnRate: number;
}

export class ApuReference extends NamedNodeReference {}
