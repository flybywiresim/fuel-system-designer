import { SystemNode } from './system-node';
import { IndexedNodeReference, NamedNodeReference } from './node-reference';

// Name, Index
export class Engine extends SystemNode {
    index: number;
}

export class EngineReference extends NamedNodeReference {}
export class IndexedEngineReference extends IndexedNodeReference {}
