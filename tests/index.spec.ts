import { ILib, Lib } from "../";
import { ResultData } from "./data/result.data";

const testTimeout = 1000;

beforeAll(done => {
  done();
});

afterAll(() => {
  return;
});

describe("Lib", () => {

  beforeAll(done => {
    done();
  });

  afterAll(() => {
    return;
  });

  beforeEach(() => {
    return;
  });

  afterEach(done => {
    done();
  });

  it("should be instantiable", () => {
    const lib = Lib;
    return expect(new lib()).toBeInstanceOf(Lib);
  });
});
