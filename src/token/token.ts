export enum TokenTypes {
  IDENT = "IDENT",
  INT = "INT",

  ASSIGN = "=",
  PLUS = "+",

  COMMA = ",",
  SEMICOLON = ";",

  LPAREN = "(",
  RPAREN = ")",
  LBRACE = "{",
  RBRACE = "}",

  FUNCTION = "FUNCTION",
  LET = "LET",

  ILLEGAL = "ILLEGAL",
  EOF = "EOF", //END OF FILE
}

//type TokenType = (typeof TokenTypes)[keyof typeof TokenTypes];

export class Token {
  type: TokenTypes;
  value: string;
  constructor(type: TokenTypes, value?: string) {
    this.type = type;
    if (value) {
      this.value = value;
    } else {
      this.value = type;
    }
  }
}
let p: Token = new Token(TokenTypes.ASSIGN, "pp");
console.log(p.type);
console.log(p.value);
