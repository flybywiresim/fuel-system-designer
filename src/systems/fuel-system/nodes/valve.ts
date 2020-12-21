import { SystemNode } from './system-node';
import { CircuitReference, NamedNodeReference } from './node-reference';

export class Valve extends SystemNode {
    circuit: CircuitReference;
    openingTime?: number;
}

export class ValveReference extends NamedNodeReference {}
