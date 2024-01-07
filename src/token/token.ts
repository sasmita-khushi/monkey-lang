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

export type Token = {
  type: TokenTypes;
  value: string;
};
