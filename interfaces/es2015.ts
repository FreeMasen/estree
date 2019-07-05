import * as es5 from './es5';

export interface Program extends es5.Program {
    sourceType: "script" | "module";
    body: [ Statement | ModuleDeclaration ];
}





export interface Function extends es5.Function {
    generator: boolean;
}





export interface ForOfStatement extends ForInStatement {
    type: "ForOfStatement";
}





export interface VariableDeclaration extends es5.VariableDeclaration {
    kind: "var" | "let" | "const";
}




export interface Super extends Node {
    type: "Super";
}

export interface CallExpression extends es5.CallExpression {
    callee: Expression | Super;
}

export interface MemberExpression extends es5.MemberExpression {
    object: Expression | Super;
}




export interface SpreadElement extends Node {
    type: "SpreadElement";
    argument: Expression;
}

export interface ArrayExpression extends es5.ArrayExpression {
    elements: [ Expression | SpreadElement | null ];
}

export interface CallExpression extends es5.CallExpression {
    arguments: [ Expression | SpreadElement ];
}

export interface NewExpression extends es5.NewExpression {
    arguments: [ Expression | SpreadElement ];
}



**FIXME:** This describes the Esprima and Acorn behaviors, which is not currently aligned with the SpiderMonkey behavior.


export interface AssignmentExpression extends es5.AssignmentExpression {
    left: Pattern;
}




export interface Property extends es5.Property {
    key: Expression;
    method: boolean;
    shorthand: boolean;
    computed: boolean;
}




export interface ArrowFunctionExpression extends Function, Expression {
    type: "ArrowFunctionExpression";
    body: FunctionBody | Expression;
    expression: boolean;
}





export interface YieldExpression extends Expression {
    type: "YieldExpression";
    argument: Expression | null;
    delegate: boolean;
}






export interface TemplateLiteral extends Expression {
    type: "TemplateLiteral";
    quasis: [ TemplateElement ];
    expressions: [ Expression ];
}




export interface TaggedTemplateExpression extends Expression {
    type: "TaggedTemplateExpression";
    tag: Expression;
    quasi: TemplateLiteral;
}




export interface TemplateElement extends Node {
    type: "TemplateElement";
    tail: boolean;
    value: {
        cooked: string;
        raw: string;
    };
}





export interface AssignmentProperty extends Property {
    type: "Property"; // inherited
    value: Pattern;
    kind: "init";
    method: false;
}

export interface ObjectPattern extends Pattern {
    type: "ObjectPattern";
    properties: [ AssignmentProperty ];
}




export interface ArrayPattern extends Pattern {
    type: "ArrayPattern";
    elements: [ Pattern | null ];
}




export interface RestElement extends Pattern {
    type: "RestElement";
    argument: Pattern;
}




export interface AssignmentPattern extends Pattern {
    type: "AssignmentPattern";
    left: Pattern;
    right: Expression;
}




export interface Class extends Node {
    id: Identifier | null;
    superClass: Expression | null;
    body: ClassBody;
}




export interface ClassBody extends Node {
    type: "ClassBody";
    body: [ MethodDefinition ];
}




export interface MethodDefinition extends Node {
    type: "MethodDefinition";
    key: Expression;
    value: FunctionExpression;
    kind: "constructor" | "method" | "get" | "set";
    computed: boolean;
    static: boolean;
}




export interface ClassDeclaration extends Class, Declaration {
    type: "ClassDeclaration";
    id: Identifier;
}




export interface ClassExpression extends Class, Expression {
    type: "ClassExpression";
}




export interface MetaProperty extends Expression {
    type: "MetaProperty";
    meta: Identifier;
    property: Identifier;
}





export interface ModuleDeclaration extends Node { }





export interface ModuleSpecifier extends Node {
    local: Identifier;
}






export interface ImportDeclaration extends ModuleDeclaration {
    type: "ImportDeclaration";
    specifiers: [ ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier ];
    source: Literal;
}





export interface ImportSpecifier extends ModuleSpecifier {
    type: "ImportSpecifier";
    imported: Identifier;
}





export interface ImportDefaultSpecifier extends ModuleSpecifier {
    type: "ImportDefaultSpecifier";
}





export interface ImportNamespaceSpecifier extends ModuleSpecifier {
    type: "ImportNamespaceSpecifier";
}






export interface ExportNamedDeclaration extends ModuleDeclaration {
    type: "ExportNamedDeclaration";
    declaration: Declaration | null;
    specifiers: [ ExportSpecifier ];
    source: Literal | null;
}



_Note: Having `declaration` populated with non-empty `specifiers` or non-null `source` results in an invalid state._



export interface ExportSpecifier extends ModuleSpecifier {
    type: "ExportSpecifier";
    exported: Identifier;
}





export interface ExportDefaultDeclaration extends ModuleDeclaration {
    type: "ExportDefaultDeclaration";
    declaration: Declaration | Expression;
}





export interface ExportAllDeclaration extends ModuleDeclaration {
    type: "ExportAllDeclaration";
    source: Literal;
}


