import type {
	AstNode,
	Properties,
	ValidationAcceptor,
	ValidationSeverity,
} from "langium";

type ErrorFormatter<
	N extends AstNode,
	P extends keyof N & Properties<N>,
> = (data: { propertyValue: N[P] }) => string;

export function uniquePropertyValidator<
	N extends AstNode,
	P extends keyof N & Properties<N>,
>(
	nodes: Array<N>,
	propertyName: P,
	accept: ValidationAcceptor,
	formatter: ErrorFormatter<N, P>,
	severity: ValidationSeverity = "error",
) {
	if (nodes.length) {
		const reported = new Set();
		for (const node of nodes) {
			const propertyValue = node[propertyName];
			if (reported.has(propertyValue)) {
				accept(severity, formatter({ propertyValue }), {
					node: node,
					property: propertyName,
				});
			}
			reported.add(propertyValue);
		}
	}
}
