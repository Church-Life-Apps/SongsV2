import { removeDoubleSpaces, removePunctuation } from "../../utils/StringUtils";

test("Remove punctuation function test", () => {
  expect(
    removePunctuation("string's with#%@ specia!@l chara,cters[]-=...")
  ).toBe("strings with special characters");
});

test("Remove double spaces function test", () => {
  expect(
    removeDoubleSpaces("this line    has      double           spaces")
  ).toBe("this line has double spaces");
});
