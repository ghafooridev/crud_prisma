import userService from "../service"

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const updatedUser = await userService.updateUser(request, params.id);
    return new Response(updatedUser);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const updatedUser = await userService.patchUser(request, params.id);
    return new Response(updatedUser);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const deletedUser = await userService.deleteUser(params.id);
    return new Response(deletedUser);
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
    console.log('>>>>>', params)
    const user = await userService.getUserById(params.id);
    return new Response(user);
}