import { SystemNode } from './system-node';
import { Engine, IndexedEngineReference } from './engine';
import { AnemometerReference, CircuitReference, NamedNodeReference } from './node-reference';
import { LineReference } from './line';

// Name, Pressure, DestinationLine, Type, [Index], [AutoCondition]
export abstract class Pump extends SystemNode {
    pressure: number;
    destinationLine: LineReference;

    // TODO: What is this?
    autoCondition?: any;
}

export class ElectricalPump extends Pump {
    circuit: CircuitReference;
}

export class AnemometerPump extends Pump {
    anemometer: AnemometerReference;
}

export class EnginePump extends Engine {
    engine: IndexedEngineReference;
}

export class ApuDrivenPump extends Pump {}


export class PumpReference extends NamedNodeReference {}
