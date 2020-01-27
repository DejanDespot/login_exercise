import React from "react";
import { mount, configure } from "enzyme";
import Login from "./Login";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import "regenerator-runtime/runtime";

it("renders text input with label for the email input", () => {
  // test email label
  const wrapper = mount(<Login />);
  const emailLabel = wrapper.find("label").first();
  expect(emailLabel).toHaveLength(1);
  expect(emailLabel.prop("htmlFor")).toEqual("email");

  // test email input
  const emailInput = wrapper.find('input[name="email"]');
  expect(emailInput.prop("type")).toEqual("text");
  expect(emailInput.prop("name")).toEqual("email");
  expect(emailInput.prop("id")).toEqual("email");
});

it("calls login prop function when form is submitted", async () => {
  const login = jest.fn();
  const wrapper = mount(<Login login={login} />);
  const emailInput = wrapper.find('input[name="email"]');

  emailInput.instance().value = "test@example.com";

  const passwordInput = wrapper.find('input[name="password"]');

  passwordInput.instance().value = "pass123";

  const form = wrapper.find("form");

  /* fire events that update state */
  form.simulate("submit");

  expect(login).toHaveBeenCalledTimes(1);
});
