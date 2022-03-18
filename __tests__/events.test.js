"use strict";

const eventsEmmitter = require("../lib/events");

describe("testing events", () => {
  const value = "testing";
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });
  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it("testing the packageReady event", async () => {
    eventsEmmitter.emit("packageReady", value);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("testing the packageDeleiveredSuccessfully event", async () => {
    eventsEmmitter.emit("packageDeleiveredSuccessfully", value);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
  it("testing the packagePickedUp event", async () => {
    eventsEmmitter.emit("packagePickedUp", value);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
  it("testing the packageDeleivered event", async () => {
    eventsEmmitter.emit("packageDeleivered", value);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
