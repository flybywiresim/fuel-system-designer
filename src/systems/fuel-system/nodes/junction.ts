import { SystemNode } from './system-node';
import { NamedNodeReference } from './node-reference';
import { LineReference } from './line';

export class Junction extends SystemNode {
    outputOnlyLines?: LineReference[];
    inputOnlyLines?: LineReference[];
}

export class JunctionReference extends NamedNodeReference {}
