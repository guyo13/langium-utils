import type { AstNode, Properties, ValidationAcceptor, ValidationSeverity } from "langium";
type ErrorFormatter<N extends AstNode, P extends keyof N & Properties<N>> = (data: {
    propertyValue: N[P];
}) => string;
export declare function uniquePropertyValidator<N extends AstNode, P extends keyof N & Properties<N>>(nodes: Array<N>, propertyName: P, accept: ValidationAcceptor, formatter: ErrorFormatter<N, P>, severity?: ValidationSeverity): void;
export {};
//# sourceMappingURL=validator-util.d.ts.map