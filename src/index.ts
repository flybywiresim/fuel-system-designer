import { FuelSystem } from './systems/fuel-system';

const a320: FuelSystem = {
    apus: [{
        nodeName: 'APU',
        fuelBurnRate: 33,
    }],
    engines: [{
        nodeName: 'LeftEngine',
        index: 1,
    }, {
        nodeName: 'LeftEngine',
        index: 2,
    }],
    tanks: [{
        nodeName: 'Center',
        title: 'TT:MENU.FUEL.CENTER',
        capacity: 3000,
        unusableCapacity: 0,
        position: {
            longitudinal: -6,
            lateral: 0,
            vertical: 1,
        },
        priority: 1,
        outputOnlyLines: [{
            nodeName: 'TankCenterToCenterTankPump1',
        }, {
            nodeName: 'TankCenterToCenterTankPump2',
        }]
    }],
    lines: [],
    junctions: [],
    valves: [],
    pumps: [],
    triggers: [],
};
