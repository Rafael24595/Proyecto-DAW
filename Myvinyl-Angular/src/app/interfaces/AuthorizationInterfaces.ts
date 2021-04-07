export interface SingIn{
    email:string,
    password: string
}

export interface SingInForm{
    email:string,
    password: string
}

export interface SingUp{
    name:string,
    email:string,
    passsword: string
}

export interface SingUpForm{
    name:string,
    email:string,
    password: string,
    repassword: string;
}

export interface ServerErrorToken{
    destroyToken:string,
    message:string
}

export interface ServerErrorForm{
    attribute:string,
    message:string
}

export interface Token{
    token:string
}