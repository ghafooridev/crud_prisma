import prisma from "@/lib/prisma";

interface Body {
    name: string;
    email: string;
}


const getAll = async () => {
    const users = await prisma.user.findMany()
    return JSON.stringify(users)
};

const createUser = async (request: Request) => {
    const body: Body = await request.json()
    const newUser = await prisma.user.create({
        data: body
    })
    return JSON.stringify(newUser)
};

const updateUser = async (request: Request, id: string) => {
    const body: Body = await request.json()

    const updatedUser = await prisma.user.update({
        where: {
            id: +id
        },
        data: body
    })
    return JSON.stringify(updatedUser)
};

const patchUser = async (request: Request, id: string) => {
    const body: Body = await request.json();

    const updatedUser = await prisma.user.update({
        where: {
            id: +id
        },
        data: { ...body, name: body.name }
    })
    return JSON.stringify(updatedUser)
};

const deleteUser = async (id: string) => {
    const users = await prisma.user.delete({ where: { id: +id } })
    return JSON.stringify(users)
};


const getUserById = async (id: string) => {
    const user = await prisma.user.findFirst({
        where: {
            id: +id
        },
    })
    return JSON.stringify(user)
};

export default { getAll, createUser, updateUser, patchUser, deleteUser, getUserById }