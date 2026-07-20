import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Subscribe from "./Subscribe";
import { supabase } from "../supabase";

vi.mock("../supabase", () => ({
  supabase: {
    from: vi.fn(),
  },
}));

beforeEach(() => {
  vi.clearAllMocks();
  vi.spyOn(window, "alert").mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

function setupInsert(error: any = null) {
  const insert = vi.fn().mockResolvedValue({ error });
  vi.mocked(supabase.from).mockReturnValue({
    insert,
  } as unknown as ReturnType<typeof supabase.from>);
  return insert;
}

async function subscribe(email = "test@example.com") {
  const user = userEvent.setup();
  render(<Subscribe />);
  await user.type(screen.getByPlaceholderText(/enter your email/i), email);
  await user.click(screen.getByRole("button", { name: /subscribe/i }));
}

test("submits email to Supabase", async () => {
  const insert = setupInsert();
  await subscribe();
  expect(supabase.from).toHaveBeenCalledTimes(1);
  expect(supabase.from).toHaveBeenCalledWith("subscribers");
  expect(insert).toHaveBeenCalledWith([{ email: "test@example.com" }]);
  expect(window.alert).toHaveBeenCalledWith("Subscription successful!");
});

test("shows duplicate email message", async () => {
  const insert = setupInsert({
    code: "23505",
    message: "duplicate key value",
  });
  await subscribe();
  expect(supabase.from).toHaveBeenCalledTimes(1);
  expect(supabase.from).toHaveBeenCalledWith("subscribers");
  expect(insert).toHaveBeenCalledWith([{ email: "test@example.com" }]);
  expect(window.alert).toHaveBeenCalledWith("Email already subscribed.");
});
