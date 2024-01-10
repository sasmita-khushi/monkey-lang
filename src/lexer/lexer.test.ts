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

  test("lexer must return new token correctly for variable assignment stattement", () => {
    let input = "let x = 10;";
    let lexer = new Lexer(input);
    expect(lexer.nextToken()).toEqual({
      type: TokenTypes.LET,
      value: TokenTypes.LET,
    });
    expect(lexer.nextToken()).toEqual({
      type: TokenTypes.IDENT,
      value: TokenTypes.IDENT,
    });
    expect(lexer.nextToken()).toEqual({
      type: TokenTypes.ASSIGN,
      value: TokenTypes.ASSIGN,
    });
    expect(lexer.nextToken()).toEqual({
      type: TokenTypes.INT,
      value: TokenTypes.INT,
    });
    expect(lexer.nextToken()).toEqual({
      type: TokenTypes.SEMICOLON,
      value: TokenTypes.SEMICOLON,
    });
  });
});
