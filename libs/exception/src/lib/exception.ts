import { HttpException, HttpStatus } from "@nestjs/common";

export class Exception {

    static ALREADY_EXISTS(value: string) {
        return new HttpException(`${value} already exists.`, HttpStatus.BAD_REQUEST);
    }

    static NOT_FOUND(model: string) {
        return new HttpException(`No ${model} found.`, HttpStatus.BAD_REQUEST)
    }

    static INVALID_EMAIL_OR_PASSWORD() {
        return new HttpException('Invalid email or password', HttpStatus.BAD_REQUEST);
    }

    static UNAUTHORIZED() {
        return new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    static USER_INACTIVE() {
        return new HttpException('Inactive user, please check your email for OTP', HttpStatus.BAD_REQUEST)
    }

}