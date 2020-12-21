import { SystemNode } from './system-node';
import { NamedNodeReference } from './node-reference';
import { LineReference } from './line';

// Name, Capacity, UnusableCapacity, Position(Longitudinal, Lateral, Vertical), [Priority], [InputOnlyLines], [OutputOnlyLines], [DropTimer]
export class Tank extends SystemNode {
    title: string;
    capacity: number;
    unusableCapacity: number;
    position: Position;
    priority?: number;
    inputOnlyLines?: LineReference[];
    outputOnlyLines?: LineReference[];
    dropTimer?: number;
}

export class Position {
    longitudinal: number;
    lateral: number;
    vertical: number;
}

export class TankReference extends NamedNodeReference {}
