export declare class App {
    private port?;
    private app;
    constructor(port?: string | number | undefined);
    middlewares(): void;
    routes(): void;
    listen(): Promise<void>;
}
//# sourceMappingURL=app.d.ts.map