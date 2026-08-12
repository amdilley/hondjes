/* eslint-disable no-restricted-properties */

import { fireEvent, render, screen } from "@testing-library/react";
import { createContext, Suspense, useContext, useState } from "react";
import { expect, it, vi } from "vitest";

import { renderServerComponent } from "./renderServerComponent";

function getRandomInt(min: number, max: number) {
  // https://stackoverflow.com/a/7228322
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getID(id: string) {
  return new Promise<string>((resolve) => {
    setTimeout(
      () => resolve(id),
      // Random timeout to make our tests more realistic
      getRandomInt(10, 200),
    );
  });
}

async function AsyncComponent({
  id,
  component,
  children,
}: Readonly<{
  id: string;
  component?: React.ReactNode;
  children?: React.ReactNode;
}>) {
  const resolvedID1 = await getID(id);
  const resolvedID2 = await getID(resolvedID1);
  const resolvedID3 = await getID(resolvedID2);
  return (
    <>
      <div
        key={`AsyncComponent-${resolvedID3}`}
        // eslint-disable-next-line react/forbid-dom-props
        data-testid={`AsyncComponent-${resolvedID3}`}
      >
        {children}
      </div>
      {component}
    </>
  );
}

function Component({
  id,
  component,
  children,
}: Readonly<{
  id: string;
  component?: React.ReactNode;
  children?: React.ReactNode;
}>) {
  return (
    <>
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <div key={`Component-${id}`} data-testid={`Component-${id}`}>
        {children}
      </div>
      {component}
    </>
  );
}

it("should render an async component", async () => {
  await renderServerComponent(<AsyncComponent id="1" />);

  screen.getByTestId("AsyncComponent-1");
});

it("should render a non valid React element like a string", async () => {
  await renderServerComponent("A string");

  screen.getByText("A string");
});

it("should render a string as a props", async () => {
  await renderServerComponent(<Component id="1" component="A string" />);

  screen.getByTestId("Component-1");
  screen.getByText("A string");
});

// eslint-disable-next-line vitest/expect-expect
it("should render a component returning undefined", async () => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  function MyComponent() {
    return undefined;
  }

  await renderServerComponent(<MyComponent />);
});

// eslint-disable-next-line vitest/expect-expect
it("should render a component returning null", async () => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  function MyComponent() {
    // eslint-disable-next-line unicorn/no-null
    return null;
  }

  await renderServerComponent(<MyComponent />);
});

it("should render a component returning a number", async () => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  function MyComponent() {
    return 1;
  }

  await renderServerComponent(<MyComponent />);

  screen.getByText("1");
});

it("should render a component returning a string", async () => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  function MyComponent() {
    return "A string";
  }

  await renderServerComponent(<MyComponent />);

  screen.getByText("A string");
});

it("should render a component returning an array", async () => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  function MyComponent() {
    return [1, 2, 3];
  }

  await renderServerComponent(<MyComponent />);

  screen.getByText("123");
});

it("should render a component returning children", async () => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  function MyComponent({ children }: Readonly<{ children: React.ReactNode }>) {
    return children;
  }

  await renderServerComponent(<MyComponent>A string</MyComponent>);

  screen.getByText("A string");
});

it("should render a mix of async and sync sibling components", async () => {
  await renderServerComponent(
    <>
      <AsyncComponent id="1" />
      <Component id="2" />
      <Component id="3" />
    </>,
  );

  screen.getByTestId("AsyncComponent-1");
  screen.getByTestId("Component-2");
  screen.getByTestId("Component-3");
});

it("should render an async component with 2 child sync components", async () => {
  await renderServerComponent(
    <AsyncComponent id="1">
      <Component id="1.1" />
      <Component id="1.2" />
    </AsyncComponent>,
  );

  screen.getByTestId("AsyncComponent-1");
  screen.getByTestId("Component-1.1");
  screen.getByTestId("Component-1.2");
});

it("should render a mix of 3 async and 2 sync components", async () => {
  await renderServerComponent(
    <AsyncComponent id="1">
      <Component id="1.1">
        <AsyncComponent id="1.1.1">
          <Component id="1.1.1.1" />
        </AsyncComponent>
      </Component>
      <AsyncComponent id="1.2" />
    </AsyncComponent>,
  );

  screen.getByTestId("AsyncComponent-1");
  screen.getByTestId("Component-1.1");
  screen.getByTestId("AsyncComponent-1.1.1");
  screen.getByTestId("Component-1.1.1.1");
  screen.getByTestId("AsyncComponent-1.2");
});

it("should render a mix of 4 async and 4 sync components", async () => {
  await renderServerComponent(
    <AsyncComponent id="1">
      <Component id="1.1">
        <AsyncComponent id="1.1.1">
          <Component id="1.1.1.1" />
          <Component id="1.1.1.2">
            <Component id="1.1.1.2.1">
              <AsyncComponent id="1.1.1.2.1.1" />
            </Component>
          </Component>
          <Component id="1.1.1.3" />
        </AsyncComponent>
      </Component>
      <AsyncComponent id="1.2" />
    </AsyncComponent>,
  );

  screen.getByTestId("AsyncComponent-1");
  screen.getByTestId("Component-1.1");
  screen.getByTestId("AsyncComponent-1.1.1");
  screen.getByTestId("Component-1.1.1.1");
  screen.getByTestId("Component-1.1.1.2.1");
  screen.getByTestId("AsyncComponent-1.1.1.2.1.1");
  screen.getByTestId("Component-1.1.1.3");
  screen.getByTestId("AsyncComponent-1.2");
});

// Taken and adapted from https://stackoverflow.com/a/41854075/990356
function dynFn(
  name: string,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  body: Function,
) {
  return {
    [name](...args: any[]) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return body.apply(this, args);
    },
  }[name];
}

// it("should render a mix of 4 async and 4 sync components without cache (if any?)", async () => {
//   const AsyncComponent1 = dynFn("AsyncComponent1", AsyncComponent);
//   const Component11 = dynFn("Component11", Component);
//   const AsyncComponent111 = dynFn("AsyncComponent111", AsyncComponent);
//   const Component1111 = dynFn("Component1111", Component);
//   const Component1112 = dynFn("Component1112", Component);
//   const Component11121 = dynFn("Component11121", Component);
//   const AsyncComponent111211 = dynFn("AsyncComponent111211", AsyncComponent);
//   const Component1113 = dynFn("Component1113", Component);
//   const AsyncComponent12 = dynFn("AsyncComponent12", AsyncComponent);

//   await renderServerComponent(
//     <AsyncComponent1 id="1">
//       <Component11 id="1.1">
//         <AsyncComponent111 id="1.1.1">
//           <Component1111 id="1.1.1.1" />
//           <Component1112 id="1.1.1.2">
//             <Component11121 id="1.1.1.2.1">
//               <AsyncComponent111211 id="1.1.1.2.1.1" />
//             </Component11121>
//           </Component1112>
//           <Component1113 id="1.1.1.3" />
//         </AsyncComponent111>
//       </Component11>
//       <AsyncComponent12 id="1.2" />
//     </AsyncComponent1>,
//   );

//   screen.getByTestId("AsyncComponent-1");
//   screen.getByTestId("Component-1.1");
//   screen.getByTestId("AsyncComponent-1.1.1");
//   screen.getByTestId("Component-1.1.1.1");
//   screen.getByTestId("Component-1.1.1.2.1");
//   screen.getByTestId("AsyncComponent-1.1.1.2.1.1");
//   screen.getByTestId("Component-1.1.1.3");
//   screen.getByTestId("AsyncComponent-1.2");
// });

it("should render async and sync components as props", async () => {
  await renderServerComponent(
    <AsyncComponent id="1">
      <Component id="1.1" component={<AsyncComponent id="1.1.1" />}>
        <AsyncComponent id="1.1.2">
          <Component id="1.1.2.1" />
          <Component id="1.1.2.2">
            <Component
              id="1.1.2.2.1"
              component={<AsyncComponent id="1.1.2.2.1.1" />}
            >
              <AsyncComponent id="1.1.2.2.1.2" />
            </Component>
          </Component>
          <AsyncComponent
            id="1.1.2.3"
            component={<Component id="1.1.2.3.1" />}
          />
        </AsyncComponent>
      </Component>
      <AsyncComponent id="1.2" component={<AsyncComponent id="1.2.1" />} />
    </AsyncComponent>,
  );

  screen.getByTestId("AsyncComponent-1");
  screen.getByTestId("Component-1.1");
  screen.getByTestId("AsyncComponent-1.1.1");
  screen.getByTestId("AsyncComponent-1.1.2");
  screen.getByTestId("Component-1.1.2.1");
  screen.getByTestId("Component-1.1.2.2");
  screen.getByTestId("Component-1.1.2.2.1");
  screen.getByTestId("AsyncComponent-1.1.2.2.1.1");
  screen.getByTestId("AsyncComponent-1.1.2.2.1.2");
  screen.getByTestId("AsyncComponent-1.1.2.3");
  screen.getByTestId("Component-1.1.2.3.1");
  screen.getByTestId("AsyncComponent-1.2");
  screen.getByTestId("AsyncComponent-1.2.1");
});

// In React > 19, async Client Components are not supported in client context.
// When wrapped in Suspense, the fallback is shown permanently — the components never render.
it("should not render a Suspense async component with fallback", () => {
  render(
    <Suspense fallback="Loading...">
      <AsyncComponent id="1" />
    </Suspense>,
  );

  screen.getByText("Loading...");
  expect(screen.queryByTestId("AsyncComponent-1")).toBeNull();
});

it("should render a mix of Suspense async components", async () => {
  await renderServerComponent(
    <Suspense fallback="Loading-1">
      <AsyncComponent id="1" />
      <Suspense fallback="Loading-2">
        <AsyncComponent id="2" />
      </Suspense>
    </Suspense>,
  );

  expect(screen.queryByText("Loading-1")).toBeNull();
  screen.getByTestId("AsyncComponent-1");
  expect(screen.queryByText("Loading-2")).toBeNull();
  screen.getByTestId("AsyncComponent-2");
});

it("should render a mix of Suspense async components without fallback", async () => {
  await renderServerComponent(
    <Suspense>
      <AsyncComponent id="1" />
      <Suspense>
        <AsyncComponent id="2" />
      </Suspense>
    </Suspense>,
  );

  screen.getByTestId("AsyncComponent-1");
  screen.getByTestId("AsyncComponent-2");
});

// In React > 19, async Client Components are not supported in client context.
// When wrapped in Suspense, the fallback is shown permanently — the components never render.
it("should not render a mix of Suspense async components", () => {
  render(
    <Suspense fallback="Loading-1">
      <AsyncComponent id="1" />
      <Suspense fallback="Loading-2">
        <AsyncComponent id="2" />
      </Suspense>
    </Suspense>,
  );

  screen.getByText("Loading-1");
  expect(screen.queryByTestId("AsyncComponent-1")).toBeNull();

  // The inner suspense fallback is not rendered until the outer suspense resolves, so it will never be rendered in this test.
  expect(screen.queryByText("Loading-2")).toBeNull();
  expect(screen.queryByTestId("AsyncComponent-2")).toBeNull();
});

const ThemeContext = createContext("light");

function ComponentWithTheme() {
  const theme = useContext(ThemeContext);
  // eslint-disable-next-line react/forbid-dom-props
  return <div data-testid={`ComponentWithTheme-${theme}`} />;
}

function ThemeSelector({
  onThemeChange,
}: Readonly<{
  onThemeChange: (theme: string) => void;
}>) {
  const theme = useContext(ThemeContext);

  return (
    <label>
      Pick a theme:
      <select value={theme} onChange={(e) => onThemeChange(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="rainbow">Rainbow</option>
      </select>
    </label>
  );
}

function AppWithTheme() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSelector onThemeChange={setTheme} />
      <ComponentWithTheme />
    </ThemeContext.Provider>
  );
}

it("should work with hooks", async () => {
  await renderServerComponent(<AppWithTheme />);

  screen.getByTestId("ComponentWithTheme-light");

  const themeSelector = screen.getByLabelText("Pick a theme:");

  fireEvent.change(themeSelector, { target: { value: "rainbow" } });
  screen.getByTestId("ComponentWithTheme-rainbow");

  fireEvent.change(themeSelector, { target: { value: "dark" } });
  screen.getByTestId("ComponentWithTheme-dark");
});

it("should throw when components remain unstable", async () => {
  vi.stubGlobal(
    "MutationObserver",
    class {
      cb: (mutations?: any, obs?: any) => void;
      constructor(cb: (mutations?: any, obs?: any) => void) {
        this.cb = cb;
      }
      observe() {
        // Always report that there is some DOM mutations so the loop continue (== the DOM never becomes stable)
        this.cb();
      }
      disconnect = vi.fn();
    },
  );

  await expect(renderServerComponent(<div />)).rejects.toThrow(
    "flushSuspenseBoundaries failed: Remained unstable after 50 passes. This likely indicates an infinite update loop in your components.",
  );

  vi.unstubAllGlobals();
});
