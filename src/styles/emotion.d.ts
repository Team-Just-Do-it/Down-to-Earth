import "@emotion/react";

declare module "@emoticon/react" {
  export interface theme {
    mainColor: string;
    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
