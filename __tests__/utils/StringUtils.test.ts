import { removeDoubleSpaces, removePunctuation, removeSquareBrackets } from "../../utils/StringUtils";

test("Remove punctuation function test", () => {
  expect(removePunctuation("string's with#%@ specia!@l chara,cters[]-=...")).toBe("strings with special characters");
});

test("Remove double spaces function test", () => {
  expect(removeDoubleSpaces("this line    has      double           spaces")).toBe("this line has double spaces");
});

test("Remove square bracket function test", () => {
  expect(removeSquareBrackets("[Hi]There this line has [[Square] Brackets] no[]thing")).toEqual(
    "There this line has  nothing"
  );

  expect (removeSquareBrackets("[hi]] this will ignore ] [hi] non finished brackets]["))
  .toBe("] this will ignore ]  non finished brackets]")
});
