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
  let lib: ILib;

  beforeAll(done => {
    done();
  });

  afterAll(() => {
    return;
  });

  beforeEach(() => {
    lib = new Lib();

    return;
  });

  afterEach(done => {
    done();
  });

  test(
    'should return "abc123"',
    () => {
      expect(lib.message).toEqual(ResultData);
    },
    testTimeout
  );
});
