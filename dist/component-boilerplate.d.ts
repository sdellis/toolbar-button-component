// component-boilerplate v1.0.2 https://github.com/viewdir/component-boilerplate#readme
declare namespace MyComponents {
    class ExampleComponent extends _Components.BaseComponent {
        constructor(options: IExampleComponentOptions);
        test(): void;
        protected _init(): boolean;
        protected _getDefaultOptions(): IExampleComponentOptions;
        protected _resize(): void;
    }
}
declare namespace MyComponents.ExampleComponent {
    class Events {
        static TEST: string;
    }
}

declare namespace MyComponents {
    interface IExampleComponentOptions extends _Components.IBaseComponentOptions {
    }
}
