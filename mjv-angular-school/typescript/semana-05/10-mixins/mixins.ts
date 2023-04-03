export type Constructor<T = {}> = new (...args: any[]) => T;


export function indetiable<TBase extends Constructor>(base: TBase) {
    return class extends base {
        id = Math.round(Math.random() * 9999999999);
    }
}

const IndetifiableDate = indetiable(Date)

const indetiableDate = new IndetifiableDate();

export interface NodeTyped {
    type: string
}

export function changeableType<TBase extends Constructor<NodeTyped>>(base: TBase) {
    return class extends base {
        setType(t: string) {
            this.type = t;
        }
    }
}

export class Node<T extends string> implements NodeTyped {
    constructor(public readonly type: T) {

    }
}

export function timestampable<TBase extends Constructor>(base: TBase) {
    return class extends base {
        createdAt = new Date();
        updatedAt = new Date();

        setModified() {
            this.updatedAt = new Date();
        }
    }
}

export const IndetifiableNode = timestampable(changeableType(indetiable(Node)));

const idNode = new IndetifiableNode("square");

export const TimeAndIndetifiedNode = timestampable(IndetifiableNode);

const timeAndIndetifiedNode = new TimeAndIndetifiedNode("square");

timeAndIndetifiedNode.setModified();

