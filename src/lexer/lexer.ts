import { TokenTypes } from "../token/token";
import type { Token } from "../token/token";

export default class Lexer {
  input: string;
  position: number;
  readposition: number;
  ch: string | null;

  constructor(input: string) {
    this.input = input;
    this.position = -1;
    this.readposition = 0;
    this.ch = null;
  }
  readChar() {
    if (this.readposition < this.input.length) {
      this.ch = this.input[this.readposition];
      this.position = this.readposition;
      this.readposition++;
    } else {
      this.ch = null;
    }
  }

  nextToken(): Token {
    let token: Token;
    this.readChar();
    switch (this.ch) {
      case TokenTypes.ASSIGN:
        token = { type: TokenTypes.ASSIGN, value: TokenTypes.ASSIGN };
        break;
      case TokenTypes.SEMICOLON:
        token = { type: TokenTypes.SEMICOLON, value: TokenTypes.SEMICOLON };
        break;
      case TokenTypes.COMMA:
        token = { type: TokenTypes.COMMA, value: TokenTypes.COMMA };
        break;
      case TokenTypes.PLUS:
        token = { type: TokenTypes.PLUS, value: TokenTypes.PLUS };
        break;
      case TokenTypes.LPAREN:
        token = { type: TokenTypes.LPAREN, value: TokenTypes.LPAREN };
        break;
      case TokenTypes.RPAREN:
        token = { type: TokenTypes.RPAREN, value: TokenTypes.RPAREN };
        break;
      case TokenTypes.LBRACE:
        token = { type: TokenTypes.LBRACE, value: TokenTypes.LBRACE };
        break;
      case TokenTypes.RBRACE:
        token = { type: TokenTypes.RBRACE, value: TokenTypes.RBRACE };
        break;
      default:
        token = { type: TokenTypes.ILLEGAL, value: TokenTypes.ILLEGAL };
        break;
    }
    return token;
  }
}
