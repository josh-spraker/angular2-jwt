import { HttpRequest } from "@angular/common/http";
export declare class JwtHelperService {
    tokenGetter: () => string;
    constructor(config?: any);
    urlBase64Decode(str: string): string;
    private b64decode;
    private b64DecodeUnicode;
    decodeToken(token?: string): any;
    getTokenExpirationDate(token?: string): Date | null;
    isTokenExpired(token?: string, offsetSeconds?: number): boolean;
    getAuthScheme(authScheme: Function | string | undefined, request: HttpRequest<any>): string;
}
