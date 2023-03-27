interface Point{
    x: number,
    y: number
}

interface Point{
    z: number
}

type Named = {
    name: string
}

type OnNamed = Point & Named;

const obj: OnNamed = {
    name: "",
    x: 4,
    y: 5,
    z: 6
}