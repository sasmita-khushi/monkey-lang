import { describe, test, expect } from "bun:test";
import Lexer from "./lexer";
import { TokenTypes } from "../token/token";
describe("testing lexer", () => {
  test("lexer must return next token correctly", () => {
    let input = "=+(){},;";
    let lexer = new Lexer(input);
    expect(lexer.nextToken()).toEqual({ type: TokenTypes.ASSIGN, value: "=" });
    expect(lexer.nextToken()).toEqual({ type: TokenTypes.PLUS, value: "+" });
    expect(lexer.nextToken()).toEqual({ type: TokenTypes.LPAREN, value: "(" });
    expect(lexer.nextToken()).toEqual({ type: TokenTypes.RPAREN, value: ")" });
    expect(lexer.nextToken()).toEqual({ type: TokenTypes.LBRACE, value: "{" });
    expect(lexer.nextToken()).toEqual({ type: TokenTypes.RBRACE, value: "}" });
    expect(lexer.nextToken()).toEqual({ type: TokenTypes.COMMA, value: "," });
    expect(lexer.nextToken()).toEqual({
      type: TokenTypes.SEMICOLON,
      value: ";",
    });
    expect(lexer.nextToken()).toEqual({
      type: TokenTypes.ILLEGAL,
      value: TokenTypes.ILLEGAL,
    });
  });
  test("lexer readchar method must read next char correctly", () => {
    let input = "+()";
    let lexer = new Lexer(input);
    lexer.readChar(); //+
    expect(lexer.ch).toBe("+");
    expect(lexer.position).toBe(0);
    expect(lexer.readposition).toBe(1);
    lexer.readChar(); //(;
    expect(lexer.ch).toBe("(");
    expect(lexer.position).toBe(1);
    expect(lexer.readposition).toBe(2);
    lexer.readChar(); //):
    expect(lexer.ch).toBe(")");
    expect(lexer.position).toBe(2);
    expect(lexer.readposition).toBe(3);
    lexer.readChar();
    expect(lexer.ch).toBeNull();
  });
});
