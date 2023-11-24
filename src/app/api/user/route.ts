import userService from "./service"

export async function GET() {
    const users = await userService.getAll();
    return new Response(users);
}

export async function POST(request: Request) {
    const users = await userService.createUser(request);
    return new Response(users);
}


