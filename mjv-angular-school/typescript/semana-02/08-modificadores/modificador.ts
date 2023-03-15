interface User {
    readonly id: number,
    name: string,
    email?: string
}

const user: User = {
    id: 1,
    name: "Gui",
}

// user.id = 2;