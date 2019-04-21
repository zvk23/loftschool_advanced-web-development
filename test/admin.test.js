const fs = require("fs");
const webdriverio = require("webdriverio");
const options = require("../wdio.conf");
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
	return client.init().url("http://localhost:8888/lf/admin/#/login");
});

test("На странице есть кнопка Авторизоваться", () => {
	return client
		.isExisting(".app-login__btn")
		.then(browsers => {
			for (const browserName in browsers) {
				expect(browsers[browserName]).toBe(true);
			}
		})
});
