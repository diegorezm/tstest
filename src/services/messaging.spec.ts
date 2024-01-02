import { Messaging } from './Messaging';
import expect from 'expect';

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());
  it("Should return type message", () => {
    const sut = new Messaging();
    expect(sut.sendMessage("test")).toMatchObject({status: expect.any(Number) ,message: expect.any(String)});
  });

});

