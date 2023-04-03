type PairString = [string, string];

type PairStringNumber = [string, number];

type Pair<T1, T2> = [type1: T1, type2: T2];

type PairStringNumber2 = Pair<String, Number>

type Triple<T1, T2, T3> = [T1, T2, T3];
const tipleStrings: Triple<string, string, string> = ['','','']

type StringThenNumber = [...string[], number]
const stringsThenNumber: StringThenNumber = ['a', 'b', 'c', 5]

type ReadOnlyTuple = readonly[string, number]