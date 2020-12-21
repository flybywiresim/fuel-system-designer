export abstract class NamedNodeReference {
    nodeName: string;
}


export class IndexedNodeReference {
    index: number;
}

export class CircuitReference extends IndexedNodeReference {}

export class AnemometerReference extends IndexedNodeReference {}
