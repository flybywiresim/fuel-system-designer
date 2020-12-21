import { Apu, Engine, Junction, Line, Pump, Tank, Trigger, Valve } from './index';

export class FuelSystem {
    apus: Apu[];
    engines: Engine[];
    tanks: Tank[];
    lines: Line[];
    junctions: Junction[];
    valves: Valve[];
    pumps: Pump[];
    triggers: Trigger[];
}
