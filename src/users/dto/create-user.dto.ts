import { $Enums, Prisma } from "@prisma/client";

export class CreateUserDto {
    name: string
    username: string
    passwored: string
    mobile: string
    email: string
    extra_info?: JSON
    role?: $Enums.Role
}
