import "@emotion/react";

declare module "@emotion/react" {
  export interface theme {
    mainColor: string;
    mediaQuery: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
