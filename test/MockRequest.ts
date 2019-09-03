export class MockRequest {
    private readonly path: string;
    private readonly baseUrl: string;
    public readonly method: string;
    private readonly headers: object;


    public constructor(path: string, baseUrl: string,
                       method: string = 'GET',
                       headers: object = {}) {
        this.path = path;
        this.baseUrl = baseUrl;
        this.method = method;
        this.headers = headers;
    }


    public get(name: string): any {
        // @ts-ignore
        return this.headers[name];
    }

    public kauth: any = {
        grant: {
            'access_token': {
                content: {
                    realm_access: {
                        roles: ['test']
                    }
                }
            }
        }
    };

}
