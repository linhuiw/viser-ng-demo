/* SystemJS module definition */
declare var module: NodeModule;
interface NodeRequireFunction {
  (id: string): any;
}
interface NodeRequire extends NodeRequireFunction {
  resolve(id: string): string;
  cache: any;
  main: NodeModule | undefined;
}
declare var require: NodeRequire;
interface NodeModule {
  id: string;
}
