import { TokenTypes, Token } from "../token/token";

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
    return this.ch;
  }

  private isLetter(ch: string): boolean {
    let code = ch.charCodeAt(0);
    if ((code >= 97 && code <= 122) || (code <= 65 && code <= 90)) {
      return true;
    } else {
      return false;
    }
  }
  nextToken(): Token {
    let token: Token;
    let ch = this.readChar();
    switch (ch) {
      case TokenTypes.ASSIGN:
        token = new Token(TokenTypes.ASSIGN);
        break;
      case TokenTypes.SEMICOLON:
        token = new Token(TokenTypes.SEMICOLON);
        break;
      case TokenTypes.COMMA:
        token = new Token(TokenTypes.COMMA);
        break;
      case TokenTypes.PLUS:
        token = new Token(TokenTypes.PLUS);
        break;
      case TokenTypes.LPAREN:
        token = new Token(TokenTypes.LPAREN);
        break;
      case TokenTypes.RPAREN:
        token = new Token(TokenTypes.RPAREN);
        break;
      case TokenTypes.LBRACE:
        token = new Token(TokenTypes.LBRACE);
        break;
      case TokenTypes.RBRACE:
        token = new Token(TokenTypes.RBRACE);
        break;
      default:
        token = new Token(TokenTypes.ILLEGAL);
        break;
    }
    return token;
  }
}
