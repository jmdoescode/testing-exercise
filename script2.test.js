const swapi = require("./script2");
const fetch = require("node-fetch");

it("calls swapi to get people", (done) => {
  expect.assertions(1); //to expect an assertion. Best for async code

	swapi.getPeople(fetch).then((data) => {
		expect(data.count).toEqual(87);
    done();
	});
});


it("calls swapi to get people", () => {
  expect.assertions(1);

	return swapi.getPeople(fetch).then((data) => {
		expect(data.count).toEqual(87);
	});
});


it("calls swapi to get people with a promise", () => {
  expect.assertions(2);

	return swapi.getPeoplePromise(fetch).then((data) => {
		expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
	});
});

// Mock functions are also known as "spies", because
// they let you spy on the behavior of a function that is
// called indirectly by some other code, rather than just
// testing the output. You can create a mock function with
// jest.fn(). If no implementation is given, the mock
// function will return undefined when invoked.
