import { SystemNode } from './system-node';
import { NamedNodeReference } from './node-reference';

// Name, Source, Destination, [FuelFlowAt1PSI], [Volume], [GravityBasedFuelFlow]
export class Line extends SystemNode {
    source: NamedNodeReference;
    destination: NamedNodeReference;
    fuelFlowAt1Psi?: number;
    volume?: number;
    gravityBasedFuelFlow?: number;
}

export class LineReference extends NamedNodeReference {}
