import __vite__cjsImport0_react_jsxDevRuntime from '/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b457f6ea';
const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime['jsxDEV'];
import __vite__cjsImport1_react from '/node_modules/.vite/deps/react.js?v=b457f6ea';
const React = __vite__cjsImport1_react.__esModule
  ? __vite__cjsImport1_react.default
  : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from '/node_modules/.vite/deps/react-dom_client.js?v=b457f6ea';
const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule
  ? __vite__cjsImport2_reactDom_client.default
  : __vite__cjsImport2_reactDom_client;
import {
  createBrowserRouter,
  RouterProvider,
} from '/node_modules/.vite/deps/react-router-dom.js?v=b457f6ea';
import '/src/css/index.css';
import { Crew } from '/src/routes/crew.tsx';
import { Crewman } from '/src/routes/crewman.tsx';
import { Launch } from '/src/routes/launch.tsx?t=1685382096610';
import { Rocket } from '/src/routes/rocket.tsx';
import { Root } from '/src/routes/root.tsx';
import { theme } from '/src/theme/Theme.tsx';
import { ThemeContext } from '/src/theme/ThemeContext.tsx';
import ErrorPage from '/src/error-page.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: /* @__PURE__ */ jsxDEV(
      Root,
      {},
      void 0,
      false,
      {
        fileName:
          '/Users/erian/rocket-system-frontend/rocket-system-frontend/src/main.tsx',
        lineNumber: 15,
        columnNumber: 12,
      },
      this
    ),
    errorElement: /* @__PURE__ */ jsxDEV(
      ErrorPage,
      {},
      void 0,
      false,
      {
        fileName:
          '/Users/erian/rocket-system-frontend/rocket-system-frontend/src/main.tsx',
        lineNumber: 16,
        columnNumber: 17,
      },
      this
    ),
  },
  {
    path: 'rocket',
    element: /* @__PURE__ */ jsxDEV(
      Rocket,
      {},
      void 0,
      false,
      {
        fileName:
          '/Users/erian/rocket-system-frontend/rocket-system-frontend/src/main.tsx',
        lineNumber: 19,
        columnNumber: 12,
      },
      this
    ),
    errorElement: /* @__PURE__ */ jsxDEV(
      ErrorPage,
      {},
      void 0,
      false,
      {
        fileName:
          '/Users/erian/rocket-system-frontend/rocket-system-frontend/src/main.tsx',
        lineNumber: 20,
        columnNumber: 17,
      },
      this
    ),
  },
  {
    path: 'launch',
    element: /* @__PURE__ */ jsxDEV(
      Launch,
      {},
      void 0,
      false,
      {
        fileName:
          '/Users/erian/rocket-system-frontend/rocket-system-frontend/src/main.tsx',
        lineNumber: 23,
        columnNumber: 12,
      },
      this
    ),
    errorElement: /* @__PURE__ */ jsxDEV(
      ErrorPage,
      {},
      void 0,
      false,
      {
        fileName:
          '/Users/erian/rocket-system-frontend/rocket-system-frontend/src/main.tsx',
        lineNumber: 24,
        columnNumber: 17,
      },
      this
    ),
  },
  {
    path: 'crew',
    element: /* @__PURE__ */ jsxDEV(
      Crew,
      {},
      void 0,
      false,
      {
        fileName:
          '/Users/erian/rocket-system-frontend/rocket-system-frontend/src/main.tsx',
        lineNumber: 27,
        columnNumber: 12,
      },
      this
    ),
    errorElement: /* @__PURE__ */ jsxDEV(
      ErrorPage,
      {},
      void 0,
      false,
      {
        fileName:
          '/Users/erian/rocket-system-frontend/rocket-system-frontend/src/main.tsx',
        lineNumber: 28,
        columnNumber: 17,
      },
      this
    ),
  },
  {
    path: 'crewman',
    element: /* @__PURE__ */ jsxDEV(
      Crewman,
      {},
      void 0,
      false,
      {
        fileName:
          '/Users/erian/rocket-system-frontend/rocket-system-frontend/src/main.tsx',
        lineNumber: 31,
        columnNumber: 12,
      },
      this
    ),
    errorElement: /* @__PURE__ */ jsxDEV(
      ErrorPage,
      {},
      void 0,
      false,
      {
        fileName:
          '/Users/erian/rocket-system-frontend/rocket-system-frontend/src/main.tsx',
        lineNumber: 32,
        columnNumber: 17,
      },
      this
    ),
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  /* @__PURE__ */ jsxDEV(
    React.StrictMode,
    {
      children: /* @__PURE__ */ jsxDEV(
        ThemeContext.Provider,
        {
          value: theme,
          children: /* @__PURE__ */ jsxDEV(
            RouterProvider,
            { router },
            void 0,
            false,
            {
              fileName:
                '/Users/erian/rocket-system-frontend/rocket-system-frontend/src/main.tsx',
              lineNumber: 36,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName:
            '/Users/erian/rocket-system-frontend/rocket-system-frontend/src/main.tsx',
          lineNumber: 35,
          columnNumber: 5,
        },
        this
      ),
    },
    void 0,
    false,
    {
      fileName:
        '/Users/erian/rocket-system-frontend/rocket-system-frontend/src/main.tsx',
      lineNumber: 34,
      columnNumber: 78,
    },
    this
  )
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0JhO0FBaEJiLE9BQU9BLFdBQVc7QUFDbEIsT0FBT0MsY0FBYztBQUNyQixTQUFTQyxxQkFBcUJDLHNCQUFzQjtBQUNwRCxPQUFPO0FBQ1AsU0FBU0MsWUFBWTtBQUNyQixTQUFTQyxlQUFlO0FBQ3hCLFNBQVNDLGNBQWM7QUFDdkIsU0FBU0MsY0FBYztBQUN2QixTQUFTQyxZQUFZO0FBQ3JCLFNBQVNDLGFBQWE7QUFDdEIsU0FBU0Msb0JBQW9CO0FBQzdCLE9BQU9DLGVBQWU7QUFFdEIsTUFBTUMsU0FBU1Ysb0JBQW9CLENBQ2pDO0FBQUEsRUFDRVcsTUFBTTtBQUFBLEVBQ05DLFNBQVMsdUJBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUs7QUFBQSxFQUNkQyxjQUFjLHVCQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFVO0FBQzFCLEdBQ0E7QUFBQSxFQUNFRixNQUFNO0FBQUEsRUFDTkMsU0FBUyx1QkFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBTztBQUFBLEVBQ2hCQyxjQUFjLHVCQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFVO0FBQzFCLEdBQ0E7QUFBQSxFQUNFRixNQUFNO0FBQUEsRUFDTkMsU0FBUyx1QkFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBTztBQUFBLEVBQ2hCQyxjQUFjLHVCQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFVO0FBQzFCLEdBQ0E7QUFBQSxFQUNFRixNQUFNO0FBQUEsRUFDTkMsU0FBUyx1QkFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSztBQUFBLEVBQ2RDLGNBQWMsdUJBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVU7QUFDMUIsR0FDQTtBQUFBLEVBQ0VGLE1BQU07QUFBQSxFQUNOQyxTQUFTLHVCQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFRO0FBQUEsRUFDakJDLGNBQWMsdUJBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVU7QUFDMUIsQ0FBQyxDQUNGO0FBRURkLFNBQVNlLFdBQVdDLFNBQVNDLGVBQWUsTUFBTSxDQUFnQixFQUFFQyxPQUNsRSx1QkFBQyxNQUFNLFlBQU4sRUFDQyxpQ0FBQyxhQUFhLFVBQWIsRUFBc0IsT0FBT1YsT0FDNUIsaUNBQUMsa0JBQWUsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQixLQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUEsQ0FDRiIsIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiUm91dGVyUHJvdmlkZXIiLCJDcmV3IiwiQ3Jld21hbiIsIkxhdW5jaCIsIlJvY2tldCIsIlJvb3QiLCJ0aGVtZSIsIlRoZW1lQ29udGV4dCIsIkVycm9yUGFnZSIsInJvdXRlciIsInBhdGgiLCJlbGVtZW50IiwiZXJyb3JFbGVtZW50IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwic291cmNlcyI6WyJtYWluLnRzeCJdLCJmaWxlIjoiL1VzZXJzL2VyaWFuL3JvY2tldC1zeXN0ZW0tZnJvbnRlbmQvcm9ja2V0LXN5c3RlbS1mcm9udGVuZC9zcmMvbWFpbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3NlclJvdXRlciwgUm91dGVyUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAnLi9jc3MvaW5kZXguY3NzJztcbmltcG9ydCB7IENyZXcgfSBmcm9tICcuL3JvdXRlcy9jcmV3LnRzeCc7XG5pbXBvcnQgeyBDcmV3bWFuIH0gZnJvbSAnLi9yb3V0ZXMvY3Jld21hbi50c3gnO1xuaW1wb3J0IHsgTGF1bmNoIH0gZnJvbSAnLi9yb3V0ZXMvbGF1bmNoLnRzeCc7XG5pbXBvcnQgeyBSb2NrZXQgfSBmcm9tICcuL3JvdXRlcy9yb2NrZXQudHN4JztcbmltcG9ydCB7IFJvb3QgfSBmcm9tICcuL3JvdXRlcy9yb290LnRzeCc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vdGhlbWUvVGhlbWUudHN4JztcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gJy4vdGhlbWUvVGhlbWVDb250ZXh0LnRzeCc7XG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJy4vZXJyb3ItcGFnZS50c3gnO1xuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVCcm93c2VyUm91dGVyKFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBlbGVtZW50OiA8Um9vdCAvPixcbiAgICBlcnJvckVsZW1lbnQ6IDxFcnJvclBhZ2UgLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncm9ja2V0JyxcbiAgICBlbGVtZW50OiA8Um9ja2V0IC8+LFxuICAgIGVycm9yRWxlbWVudDogPEVycm9yUGFnZSAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdsYXVuY2gnLFxuICAgIGVsZW1lbnQ6IDxMYXVuY2ggLz4sXG4gICAgZXJyb3JFbGVtZW50OiA8RXJyb3JQYWdlIC8+LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ2NyZXcnLFxuICAgIGVsZW1lbnQ6IDxDcmV3IC8+LFxuICAgIGVycm9yRWxlbWVudDogPEVycm9yUGFnZSAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdjcmV3bWFuJyxcbiAgICBlbGVtZW50OiA8Q3Jld21hbiAvPixcbiAgICBlcnJvckVsZW1lbnQ6IDxFcnJvclBhZ2UgLz4sXG4gIH0sXG5dKTtcblxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpIGFzIEhUTUxFbGVtZW50KS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoZW1lfT5cbiAgICAgIDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e3JvdXRlcn0gLz5cbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcbiJdfQ==
