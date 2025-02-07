"use client";

import { ReduxProvider } from "@/store/providers/redux-provider";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Jura, Montserrat } from "next/font/google";
import { AppStateInitializer } from "./AppStateInitializer";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// const jura = Jura({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-jura",
// });

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
//   variable: "--font-montserrat",
// });

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
    // Override all typography variants
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
        },
      },
    },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* <link
          href="https://fonts.googleapis.com/css?family=Jura:300,400,500,600,700&display=swap"
          rel="stylesheet"
        ></link> */}
      </head>

      <body
        style={{
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <ReduxProvider>
            <AppStateInitializer />

            {children}
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
